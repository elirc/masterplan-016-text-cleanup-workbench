# Building Text Cleanup Workbench, one decision at a time

[Learning route](00-START-HERE.md) · [Code tour](03-CODE-TOUR.md)

This is a reconstruction of how to approach the finished reference. It explains visible design choices; it is not a transcript of hidden reasoning or a claim that a fictional team performed these steps.

## Start from the contract

Each source line is retained as a record with before and after strings. Cleanup trims both ends and collapses runs of JavaScript whitespace to one ordinary space. It preserves letter case, Unicode characters and punctuation. Empty records remain present. The source array and textarea are not changed, and applying cleanText twice gives the same result as applying it once.

The smallest useful result answers this user need: A librarian needs a small script that normalizes pasted titles and explains every changed value. Write the examples before choosing file names. Keep the scope small enough that the decisive behavior fits in one trace.

## Step 1: Decide what one record means

The adapter splits on newline first, so the UI treats lines as records. The core cleanText can normalize a string containing newlines too, but the browser flow establishes record boundaries before calling it. This is an example of input interpretation belonging at an adapter boundary.

**Pause and produce evidence:**   hello   world  . Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 2: Trace a transformation

Read trim and replace in order. Use tabs and repeated spaces in one example and note exactly which characters become one space. Then use a Unicode word with punctuation and confirm those characters are still present. A visually ordinary sample alone would hide an overaggressive ASCII-only cleanup.

**Pause and produce evidence:**  café   —   déjà vu! . Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 3: Preserve list shape

Read the map callback and count rows before and after. No splice or filter is present. The test freezes the source array to help expose mutations. Explain that frozen input is a test aid, while the actual contract is preservation regardless of whether the caller froze its data.

**Pause and produce evidence:** Only spaces or an empty string. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 4: Test two passes

For each fixture compute first = cleanText(source) and second = cleanText(first). Compare them, then separately compare first with a hand-written expectation. This avoids the common mistake of calling a mathematical property sufficient proof of all product behavior.

**Pause and produce evidence:** Only spaces or an empty string. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Keep the implementation reviewable

A useful commit has one understandable reason to exist. Separate the initial working slice, the checks that expose its important boundaries, and the teaching material that explains it. The published commits in this repository were assembled from verified working files; they are real commits, not fabricated evidence of a long historical development process. 

For your own variation, commit at a point where the behavior and evidence agree. Describe the trigger, the resulting behavior and the check in the commit message or review note. Avoid mixing a rule change with unrelated formatting because it makes the learning decision harder to see.

## Stop before adding a platform

The next useful improvement is a sharper example or clearer explanation, not a database, account system or framework migration. Add an abstraction only when it names a real repeated responsibility. You should be able to describe what becomes easier to change after the abstraction and what new complexity it introduces.

**Independent design choice from the original brief:** Choose which characters must be preserved.

The reference made one choice, documented in the code tour. You may choose differently in a branch if you first revise the contract and acceptance examples. A deliberate alternative is a stronger learning artifact than an unexplained copy.
