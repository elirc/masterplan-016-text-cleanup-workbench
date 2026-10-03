# Debugging laboratory

[Concepts](02-CONCEPTS-AND-TRACES.md) · [Practice stories](05-PRACTICE-STORIES.md)

These are deliberately proposed defects for a scratch branch. They are not claims that the shipped reference still contains these bugs. Keep main working and introduce only one change at a time.

## Case 1: Accents disappear from names

**Introduce or discuss this mistake:** Add an ASCII-only replacement to the cleanup chain.

**Discriminating experiment:** Use café and déjà vu rather than only hello.

### Worked diagnosis

First state the expected contract: Each source line is retained as a record with before and after strings. Cleanup trims both ends and collapses runs of JavaScript whitespace to one ordinary space. It preserves letter case, Unicode characters and punctuation. Empty records remain present. The source array and textarea are not changed, and applying cleanText twice gives the same result as applying it once. Then create the smallest example from the experiment above. Compare the observed result with the contract before changing more code. The likely cause is at this boundary: **public/core.js: whitespace normalization must not become letter filtering.**. Repair that boundary, rerun the example, and check one neighboring valid case so the repair does not merely special-case the chosen input.

The completed reasoning record is: symptom → contract violated → input that distinguishes hypotheses → owning line or rule → minimal repair → regression evidence. This is a worked diagnostic route; fill in your actual outputs when you run it. No invented console transcript is supplied.

## Case 2: Blank source rows vanish

**Introduce or discuss this mistake:** Filter empty after values from the result.

**Discriminating experiment:** Use a three-line source whose middle line is blank.

### Your investigation

1. Write two possible explanations before looking at the hints.
2. Predict what the experiment would show if each explanation were true.
3. Run or inspect the smallest discriminating case and record the result.
4. Identify the owning file and make one bounded repair.
5. Verify the original case and a neighboring case; explain why both matter.

**Location hint, only after your attempt:** public/core.js and app.js: preserve one output record per source record.

## Case 3: Repeated cleanup keeps changing output

**Introduce or discuss this mistake:** Add a rule that removes only one extra space per call.

**Discriminating experiment:** Run the helper twice on a long whitespace run.

### Your investigation

1. Write two possible explanations before looking at the hints.
2. Predict what the experiment would show if each explanation were true.
3. Run or inspect the smallest discriminating case and record the result.
4. Identify the owning file and make one bounded repair.
5. Verify the original case and a neighboring case; explain why both matter.

**Location hint, only after your attempt:** public/core.js: normalization must reach its stable form in one pass.

## If the first repair does not work

Do not pile on another unrelated edit. Read the diff and check whether the observed failure changed. If the hypothesis was wrong, write that down and restore only your own experimental change before testing the next hypothesis. A rejected hypothesis is useful progress when its evidence is clear.

When asking an assistant for help, provide the exact input, expected and observed result, the current diff and the file you believe owns the rule. Ask for one counterexample or diagnostic question first. Keep proposed causes separate from demonstrated causes.
