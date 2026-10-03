# Build journal: Text Cleanup Workbench

[Code tour](03-CODE-TOUR.md) · [Actual verification](VERIFICATION.md)

This is a retrospective teaching narrative about the implementation in this repository. It is not a verbatim conversation, fabricated team debate or hidden chain-of-thought transcript. The design explanations below are reviewable rationales tied to the source. Dates and check results belong to the verification record.

## The starting problem

A librarian needs a small script that normalizes pasted titles and explains every changed value.

The main temptation was to make the project larger than its learning target. The useful boundary is **pure transformations and idempotence**. A finished small example lets you inspect the whole path and ask what each part contributes. Extra infrastructure would add more things to configure before the central idea became clear.

## The first contract

Each source line is retained as a record with before and after strings. Cleanup trims both ends and collapses runs of JavaScript whitespace to one ordinary space. It preserves letter case, Unicode characters and punctuation. Empty records remain present. The source array and textarea are not changed, and applying cleanText twice gives the same result as applying it once.

The contract turned broad intent into examples that can disagree with an implementation. That matters because a plausible-looking result can hide a wrong boundary rule. The examples in the concepts guide were chosen to expose those distinctions, not to make the demo look flawless.

## Decision note 1: Preserve the original alongside the result

A cleanup preview should make losses inspectable. Each row keeps before and after, and the adapter never assigns the cleaned value back into the source control. A user can compare the transformation before deciding whether to adopt it. Empty lines remain records, so row positions do not shift silently.

**What a learner should challenge:** What information disappears if you filter out empty results before review?

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## Decision note 2: Keep normalization narrow

The contract changes whitespace only. Lowercasing, punctuation stripping and accent removal could damage names or meaning. They are not slipped into the same helper because they require separate user intent and examples. JavaScript whitespace includes more than the ordinary space character; the documented regex is the exact boundary.

**What a learner should challenge:** Would collapsing spaces be appropriate inside every source-code string or poem?

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## Decision note 3: Use idempotence as a second kind of check

A known example checks an intended output. Idempotence checks that further passes do not keep changing that output. Neither replaces the other: a function returning an empty string for everything would be idempotent but wrong. Pair both properties with source-preservation checks.

**What a learner should challenge:** Name an idempotent implementation that violates the actual cleanup contract.

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## What the checks contributed

The pure-function checks exercised the contract independently of the DOM. Browser checks then verified that real controls passed inputs, showed results and recovered from relevant error or empty states. These are complementary forms of evidence.

The record in VERIFICATION.md reports actual local observations. A GitHub Actions workflow is provided, but its remote result must be inspected separately after a push. A screenshot documents one rendered state; it is not a substitute for the interaction and boundary checks.

## What you should do differently on your own build

Start from the same user need but write your own examples first. Choose a small variation from the story list. Predict behavior, implement a slice and compare the result with your prediction. The reference helps you judge a finished result; your journal should record your own uncertainties and discoveries rather than adopting this narrative as if you experienced it.

## The handoff

The next learner can start from README, locate `cleanList`, reproduce the example table and attempt one bounded story. That is the intended handoff quality: a working result plus enough evidence and explanation to continue safely. The six practice stories remain unfinished for the learner.
