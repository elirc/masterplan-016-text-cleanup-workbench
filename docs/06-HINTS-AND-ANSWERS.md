# Hints and answer directions

[Return to the stories](05-PRACTICE-STORIES.md)

There are intentionally no complete feature patches here. Use one hint, return to your code and produce evidence. Your design can differ from the reference when you state and verify the new contract.

## Story 01: Count changed records

**Hint 1 — ownership:** Begin from `cleanList`. Derive a count from before !== after and display it alongside total rows.

**Hint 2 — reasoning:** Revisit the decision “Preserve the original alongside the result”. Ask yourself: What information disappears if you filter out empty results before review?

**Answer direction:** A defensible solution demonstrates this observable result: Unchanged, changed and empty rows produce independently verified totals. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 02: Add a copy-results action

**Hint 1 — ownership:** Begin from `cleanList`. Offer explicit copying of cleaned rows while preserving the source editor and showing copy failure.

**Hint 2 — reasoning:** Revisit the decision “Keep normalization narrow”. Ask yourself: Would collapsing spaces be appropriate inside every source-code string or poem?

**Answer direction:** A defensible solution demonstrates this observable result: The source remains unchanged and the UI does not claim clipboard success if the API fails. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 03: Make whitespace policy selectable

**Hint 1 — ownership:** Begin from `cleanList`. Add a separate trim-only mode and keep the existing collapse mode.

**Hint 2 — reasoning:** Revisit the decision “Use idempotence as a second kind of check”. Ask yourself: Name an idempotent implementation that violates the actual cleanup contract.

**Answer direction:** A defensible solution demonstrates this observable result: Interior spacing is preserved in trim-only mode and collapsed only in the documented mode. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 04: Highlight unchanged rows

**Hint 1 — ownership:** Begin from `cleanList`. Render a textual unchanged marker for each stable source row.

**Hint 2 — reasoning:** Revisit the decision “Preserve the original alongside the result”. Ask yourself: What information disappears if you filter out empty results before review?

**Answer direction:** A defensible solution demonstrates this observable result: The marker agrees with exact string equality and does not rely on color alone. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 05: Expand Unicode fixtures

**Hint 1 — ownership:** Begin from `cleanList`. Add non-Latin letters, emoji and punctuation examples with explicit expected strings.

**Hint 2 — reasoning:** Revisit the decision “Keep normalization narrow”. Ask yourself: Would collapsing spaces be appropriate inside every source-code string or poem?

**Answer direction:** A defensible solution demonstrates this observable result: The tests catch deletion or case folding outside the whitespace contract. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 06: Add a resettable preview

**Hint 1 — ownership:** Begin from `cleanList`. Clear derived results when the source changes and require another preview.

**Hint 2 — reasoning:** Revisit the decision “Use idempotence as a second kind of check”. Ask yourself: Name an idempotent implementation that violates the actual cleanup contract.

**Answer direction:** A defensible solution demonstrates this observable result: A displayed cleaned list cannot be mistaken for the current source after an edit. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Answers to the trace questions

Read textarea → split on newline into source records → map each string to {before, after: cleanText(before)} → trim and collapse whitespace → render both values → apply cleanText again to verify a stable second pass.

The expected examples are in the concepts table. Use them to check your reasoning, then supply a new example of your own. A copied sentence is not evidence that you can trace a changed input.

## When to ask for more help

Ask after you can show a concrete attempt, a specific uncertainty and an observation. Request a smaller hint before a full patch. If you do accept generated code, explain each changed line and run a counterexample you chose independently.
