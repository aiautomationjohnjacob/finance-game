# Agent Instructions

## Orchestration Model

One lead agent coordinates multiple research subagents working in parallel.
Each subagent owns one research goal from phases.md.

## Lead Agent Responsibilities

- Break research goals into parallel tasks
- Assign one subagent per research goal
- Synthesize findings into decisions
- Write decisions to `.claude/rules/decisions.md` when a goal is complete
- Never start EXECUTION phase without user confirmation

## Subagent Responsibilities

- Each subagent owns one research goal
- Use WebSearch to gather data (prioritize 2025–2026 sources)
- Report findings as a structured markdown file
- Write findings to `.claude/research/pass<N>/<goal-slug>.md`
- Keep findings factual — no speculation without data
- Cite all sources

## Communication Pattern

- Lead posts tasks, subagents claim and complete them
- Subagents write findings to `.claude/research/` (one file per goal per pass)
- Lead reads research files to synthesize decisions

## Constraints

- Do not ask the user for information that can be researched
- Do not write application code during RESEARCH phase
- Compact context at 50% usage
- Always cite sources for any factual claim
- Keep scope to what can be built as simple HTML/CSS/JS — flag anything requiring external APIs
