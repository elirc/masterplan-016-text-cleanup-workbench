# M016: mentor hints and answer directions

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

Use this chapter after making an attempt. It provides reasoning directions and evaluation criteria, not finished feature patches. A learner can choose a different design when the revised contract is explicit and the evidence supports it.

## Retrieval card 01: answer direction

**Question:** Explain pure transformation through this project

A result computed without changing caller-owned input.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 02: answer direction

**Question:** Explain idempotence through this project

A second application has the same result as the first.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 03: answer direction

**Question:** Explain record boundary through this project

The rule deciding where one input item ends.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 04: answer direction

**Question:** Explain information loss through this project

Data discarded or normalized by a rule.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 05: answer direction

**Question:** Predict:   hello   world  

hello world

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 06: answer direction

**Question:** Predict:  café   —   déjà vu! 

café — déjà vu!

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 07: answer direction

**Question:** Predict: Only spaces or an empty string

Empty output record, not a dropped row

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 08: answer direction

**Question:** What information disappears if you filter out empty results before review?

A cleanup preview should make losses inspectable. Each row keeps before and after, and the adapter never assigns the cleaned value back into the source control. A user can compare the transformation before deciding whether to adopt it. Empty lines remain records, so row positions do not shift silently.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 09: answer direction

**Question:** Would collapsing spaces be appropriate inside every source-code string or poem?

The contract changes whitespace only. Lowercasing, punctuation stripping and accent removal could damage names or meaning. They are not slipped into the same helper because they require separate user intent and examples. JavaScript whitespace includes more than the ordinary space character; the documented regex is the exact boundary.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 10: answer direction

**Question:** Name an idempotent implementation that violates the actual cleanup contract.

A known example checks an intended output. Idempotence checks that further passes do not keep changing that output. Neither replaces the other: a function returning an empty string for everything would be idempotent but wrong. Pair both properties with source-preservation checks.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 11: answer direction

**Question:** What does your strongest check not prove?

Use the scope recorded in VERIFICATION.md; do not infer production readiness from a small local fixture.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 12: answer direction

**Question:** When should a cleanup function leave an unusual value alone?

A transformation preview is useful because source and result can be compared. Normalization should have a narrowly stated loss policy: here whitespace changes, while letters and punctuation remain. Idempotence asks whether another pass changes the result; it cannot by itself establish that the first result was correct. Pair property checks with hand-authored examples.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Story 07: Add character-count differences

**First hint:** The desired improvement is “Quantify each cleanup without hiding source.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Derive before and after string lengths; show the difference; explain the chosen JavaScript length semantics. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Empty and unchanged records have consistent counts. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose whether code units are sufficient for the lesson. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 08: Add numbered output rows

**First hint:** The desired improvement is “Keep correspondence visible with repeated text.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Retain source position as a display label; render one row per source line; preserve empty lines. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Identical source strings still have distinct row positions. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose one-based labels for readers. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 09: Add a punctuation preservation test

**First hint:** The desired improvement is “Catch an overbroad replacement rule.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Choose quotes, dashes and markup-looking text; hand-author expected cleanup; compare only whitespace changes. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Punctuation survives and is rendered as text. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose a culturally varied fixture set. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 10: Add a nonbreaking-space lesson

**First hint:** The desired improvement is “Make the whitespace vocabulary concrete.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Create an explicit escaped fixture; inspect trim and replacement results; document what the chosen regex normalizes. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The expected value is stated as characters rather than a visually ambiguous screenshot. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Decide whether that space should be preserved in an alternative mode. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 11: Add an undo-source-edit exercise

**First hint:** The desired improvement is “Keep source editing separate from cleanup preview.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Define one captured editor snapshot; allow explicit restoration; invalidate the derived preview after restoration. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Restoring source never silently applies cleaned output. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose when to capture the source snapshot. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 12: Add selected-row inspection

**First hint:** The desired improvement is “Focus on one before-and-after pair.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Store a row index for inspection; derive the pair from current preview; clear invalid selection on new preview. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: A shorter new source cannot show an old unrelated row. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose default inspection behavior. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 13: Add a cleanup policy label

**First hint:** The desired improvement is “Tell the reader which rules produced the output.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Name trim and whitespace collapse near the result; keep wording tied to the actual function; distinguish future modes. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The label never claims case folding or punctuation removal. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose a concise rule description. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 14: Add a reversibility discussion

**First hint:** The desired improvement is “Explain why normalization cannot restore original spacing.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Compare two differently spaced inputs with the same output; identify lost information; justify retaining before values. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The guide demonstrates many-to-one transformation with a concrete pair. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose inputs with the same cleaned result. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 15: Add a fixture import boundary

**First hint:** The desired improvement is “Read a JSON array of strings in a separate practice branch.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Parse JSON; reject non-string rows before cleanup; preserve the original parsed list for review. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: One malformed row is explained rather than coerced into a misleading string. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose whole-input rejection or a preview error list. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Mentor feedback rubric

| Dimension | Beginning | Developing | Independent evidence |
|---|---|---|---|
| Trace | Names files only | Follows one ordinary case | Predicts a new boundary and explains its owner |
| Test design | Copies output | Uses a stated expectation | Rejects a plausible wrong candidate |
| Design | Repeats a slogan | Names an alternative | Compares costs using a concrete change |
| Agent use | Accepts a generated answer | Checks suggested edits | Supplies own proposal and adjudicates critiques |
| Handoff | Claims it works | Lists actual checks | Explains behavior, evidence and limits coherently |

Use the rubric to choose the next practice action, not to label yourself permanently. A learner may be independent at source tracing and still need help designing a failure case. Target the missing skill with one smaller exercise.
