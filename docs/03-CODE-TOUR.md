# Code tour and architecture decisions

[Overview](../README.md) · [Concepts](02-CONCEPTS-AND-TRACES.md)

| File | Responsibility |
|---|---|
| [package.json](../package.json) | Names the module format, Node requirement and local commands; private prevents npm publication. |
| [.github/workflows/check.yml](../.github/workflows/check.yml) | Runs the committed checks on GitHub. A workflow file is not evidence that a remote run succeeded. |
| [public/index.html](../public/index.html) | Semantic content, controls and explicit IDs. |
| [public/style.css](../public/style.css) | Presentation, focus indication and project-specific layout. |
| [tools/serve.mjs](../tools/serve.mjs) | Local preview infrastructure; only public/ is served. |
| [tools/check-site.mjs](../tools/check-site.mjs) | Checks referenced local assets exist, without pretending to judge usability. |
| [public/core.js](../public/core.js) | The main input/output rule; no DOM access. |
| [public/app.js](../public/app.js) | Clean button: splits the textarea on newlines and prints before/after rows with a second-pass check. |
| [test/core.test.js](../test/core.test.js) | Independent boundary examples for the core contract. |

## Follow one path, not every file

Start at [public/core.js](../public/core.js) and locate `cleanList`. Use this trace as a map: Read textarea → split on newline into source records → map each string to {before, after: cleanText(before)} → trim and collapse whitespace → render both values → apply cleanText again to verify a stable second pass.

The tooling is intentionally separate from the product concept. You can study the local server or CI after the main rule is clear. Neither an HTTP preview server nor a workflow configuration should become a prerequisite for understanding a small pure function.

## Decision: Preserve the original alongside the result

A cleanup preview should make losses inspectable. Each row keeps before and after, and the adapter never assigns the cleaned value back into the source control. A user can compare the transformation before deciding whether to adopt it. Empty lines remain records, so row positions do not shift silently.

**Review question:** What information disappears if you filter out empty results before review?

**Your alternative:** Write a plausible different choice, then give a concrete example that reveals its cost. “More scalable” or “cleaner” is not enough; identify a changed dependency, a new state to manage, or a user-visible failure mode.

## Decision: Keep normalization narrow

The contract changes whitespace only. Lowercasing, punctuation stripping and accent removal could damage names or meaning. They are not slipped into the same helper because they require separate user intent and examples. JavaScript whitespace includes more than the ordinary space character; the documented regex is the exact boundary.

**Review question:** Would collapsing spaces be appropriate inside every source-code string or poem?

**Your alternative:** Write a plausible different choice, then give a concrete example that reveals its cost. “More scalable” or “cleaner” is not enough; identify a changed dependency, a new state to manage, or a user-visible failure mode.

## Decision: Use idempotence as a second kind of check

A known example checks an intended output. Idempotence checks that further passes do not keep changing that output. Neither replaces the other: a function returning an empty string for everything would be idempotent but wrong. Pair both properties with source-preservation checks.

**Review question:** Name an idempotent implementation that violates the actual cleanup contract.

**Your alternative:** Write a plausible different choice, then give a concrete example that reveals its cost. “More scalable” or “cleaner” is not enough; identify a changed dependency, a new state to manage, or a user-visible failure mode.

## Change boundaries

A small change should begin in the file that owns its meaning. Change domain rules in the core (`public/core.js`), wording and interaction in the browser adapter (`public/app.js`), and layout in the relevant CSS rule.

If a story crosses two files, say why. A new option may require the core contract, a control and tests to change together. That is a coherent feature boundary, not permission to rewrite unrelated parts of the project.

## Deliberate limits

Persistence and frameworks are explicit where used: M019 saves a namespaced local draft; M024–M025 introduce React. The remaining builds use plain JavaScript and local data. M025 saved definitions last for the current session only. The preview server is a local development aid, not a production hosting system. A browser screenshot is one observation, not proof of every device or assistive technology. Keep these limits visible when describing your own work.
