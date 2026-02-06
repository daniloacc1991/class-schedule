# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Claude Code configuration workspace** — not a traditional software project. It contains custom agents, skills, commands, and MCP server configurations that extend Claude Code's capabilities. The primary data file is an Excel schedule ("HORARIO DE SOFIA (FIRST).xlsx").

There is no build system, no test suite, no linting, and no package manager. The project consists entirely of configuration files (Markdown, JSON), Python utility scripts, and OOXML schemas.

## Repository Structure

```
.claude/
├── agents/          # 4 specialized agents (frontend-developer, typescript-pro, ui-ux-designer, documentation-expert)
├── commands/        # 4 slash commands (ultra-think, update-docs, add-changelog, workflow-orchestrator)
├── scripts/         # Context monitor (status line Python script)
├── skills/          # 11 skills (docx, xlsx, theme-factory, frontend-design, senior-frontend,
│                    #   react-best-practices, ui-design-system, file-organizer, astro, astro-framework,
│                    #   quality-documentation-manager)
└── settings.local.json
.mcp.json            # MCP server configs (context7, memory, filesystem, markitdown)
```

## MCP Servers

Configured in `.mcp.json` and enabled in `.claude/settings.local.json`:

- **context7** — Documentation lookup via `@upstash/context7-mcp`
- **memory** — Persistent knowledge graph via `@modelcontextprotocol/server-memory`
- **filesystem** — File access via `@modelcontextprotocol/server-filesystem`
- **markitdown** — Document conversion via Docker (`markitdown-mcp:latest`)

## Key Architectural Details

### Agents
- **ui-ux-designer** runs on **Opus** model with read-only tools (Read, Grep, Glob). It provides research-backed design critique citing Nielsen Norman Group studies — it does not write code.
- **frontend-developer** and **typescript-pro** run on **Sonnet** model with write access (Read, Write, Edit, Bash).
- **documentation-expert** specializes in technical writing, documentation standards (Diátaxis, Docs as Code), API docs (OpenAPI/Swagger), and code documentation (JSDoc, Sphinx, Doxygen). Creates and maintains READMEs, user guides, and tutorials.

### Skills
- **docx**: Full OOXML-based Word document workflow. Uses docx-js for creation, raw OOXML XML editing for modifications, and a "redlining" workflow (tracked changes) for editing third-party or formal documents. Includes OOXML XSD schemas and Python validation scripts.
- **xlsx**: Spreadsheet operations via pandas/openpyxl. Enforces zero formula errors, financial color-coding standards (blue=inputs, black=formulas, green=cross-sheet links), and formula preservation over hardcoded values.
- **theme-factory**: 10 pre-built visual themes. Workflow: show `theme-showcase.pdf` → user selects → apply to artifact.
- **frontend-design**: Generates distinctive, production-grade UIs. Emphasizes bold aesthetic direction and avoids generic "AI slop" aesthetics.
- **astro**: Quick reference for Astro projects — CLI commands, project structure, core config, and deployment adapters (Node, Vercel, Netlify, Cloudflare).
- **astro-framework**: Comprehensive Astro specialist with islands architecture, content collections (Zod schemas), client hydration directives, SSR adapters, view transitions, and UI framework integrations. Includes `references/` docs and `rules/` for context-specific guidance.
- **quality-documentation-manager**: Senior Quality Documentation Manager for document control system design (ISO 13485), regulatory documentation oversight (EU MDR, FDA 510(k)/PMA, 21 CFR Part 11), change control workflows, DMS implementation, and multi-language documentation management. Targets medical device organizations.

### Status Line
Custom context monitor at `.claude/scripts/context-monitor.py` displays model name, directory, git branch/status, context usage (progress bar with color-coded alerts), and session metrics (cost, duration, lines changed).

### Permissions
Pre-allowed in `settings.local.json`: `Bash(wc:*)`, `Bash(du:*)`, `Bash(python3:*)`.