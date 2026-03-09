#!/usr/bin/env bash
# FinanceGame Test Runner
# Usage: bash scripts/test.sh [milestone_number]
# Starts a local HTTP server, runs Playwright tests, saves results + screenshots

set -e

# Ensure Chrome can find shared libs extracted to ~/.local/lib
export LD_LIBRARY_PATH="${HOME}/.local/lib:${LD_LIBRARY_PATH}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
PORT=8765
RESULTS_DIR="$SCRIPT_DIR/test-results"
SCREENSHOTS_DIR="$SCRIPT_DIR/screenshots"
MILESTONE="${1:-auto}"

mkdir -p "$RESULTS_DIR" "$SCREENSHOTS_DIR"

# Kill any existing server on port
kill $(lsof -ti:$PORT) 2>/dev/null || true

# Start HTTP server
echo "[test.sh] Starting HTTP server on port $PORT..."
cd "$PROJECT_DIR"
python3 -m http.server $PORT --bind 127.0.0.1 > /tmp/finance-game-server.log 2>&1 &
SERVER_PID=$!
echo "[test.sh] Server PID: $SERVER_PID"

# Wait for server to be ready
for i in {1..10}; do
  if curl -s http://127.0.0.1:$PORT > /dev/null 2>&1; then
    echo "[test.sh] Server ready."
    break
  fi
  sleep 0.5
done

# Run Playwright test script
echo "[test.sh] Running Playwright tests (milestone: $MILESTONE)..."
node "$SCRIPT_DIR/playwright-test.js" "$PORT" "$MILESTONE" "$RESULTS_DIR" "$SCREENSHOTS_DIR"
EXIT_CODE=$?

# Cleanup server
kill $SERVER_PID 2>/dev/null || true
echo "[test.sh] Server stopped."

# Print summary
if [ -f "$RESULTS_DIR/latest.json" ]; then
  echo ""
  echo "=== TEST RESULTS ==="
  node -e "
    const r = require('$RESULTS_DIR/latest.json');
    console.log('Milestone:', r.milestone_name);
    console.log('Overall:', r.overall);
    console.log('Passed:', r.passed, '/ Failed:', r.failed, '/ Warnings:', r.warnings);
    r.tests.forEach(t => {
      const icon = t.status === 'PASS' ? '✓' : t.status === 'WARN' ? '⚠' : '✗';
      console.log(icon, t.name, t.error ? '— ' + t.error : '');
    });
  "
fi

exit $EXIT_CODE
