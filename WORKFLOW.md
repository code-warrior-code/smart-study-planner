# Workflow Drill: Vague vs Precise Prompting

## Round 1 (Vague Prompt)

I asked the AI: *"Add a form to add a subject with name and exam date"*.

The output was a basic form that captured the fields I named, but nothing more. Because I only mentioned name and exam date, the AI had no reason to add a difficulty selector, no validation on empty fields, no check that the exam date was actually in the future, and no tests. It technically matched what I asked for — the problem is what I asked for was incomplete.

## Round 2 (Precise Prompt)

This time I specified exact fields (name, exam date, difficulty as a dropdown of Easy/Medium/Hard), explicit validation rules (no empty fields, exam date must be a future date, difficulty must be one of the three valid options), and asked for tests to be written and run alongside the feature.

The result was noticeably more complete:

- **`SubjectForm.jsx`** — a full form with all three fields, inline error messages per field, and accessibility attributes (`aria-invalid`, `aria-describedby`, `role="alert"`) that weren't asked for line-by-line but followed naturally from being told to build a real, validated form.
- **`validateSubject.js`** — a separate validation utility (`validateSubject`, `isFutureDate`, `isSubjectValid`) instead of inline validation logic scattered inside the component. This wasn't explicitly requested, but structuring validation separately made the rules easier to test.
- **`validateSubject.test.js`** — 8 test cases covering empty name, whitespace-only name, missing exam date, past exam date, missing difficulty, invalid difficulty, multiple simultaneous errors, and the future-date boundary condition.
- **`vitest` config** — added to `package.json` and `vite.config.js` so the tests actually run, not just exist as files.

## Comparison

The core difference: Round 1's output was *correct against a narrow prompt*, but not correct against what the feature actually needed. Round 2's output was correct against the real requirements because the prompt stated the requirements. Precise prompts front-load the thinking (what fields, what rules, what counts as invalid) so the AI doesn't have to guess — and the request to "write tests and run them" forced verification instead of just trusting the first output.

## A Mistake I Caught

The exam date validation initially only needs to check "is this a valid date," but a date picker with no `min` constraint would let someone pick a date in the past and have it silently accepted until form submission. Looking at the diff, the fix was setting `min={minDate}` on the date input itself (restricting the calendar picker to tomorrow onward) in addition to the `isFutureDate` check in `validateSubject.js` — a UI-level guard plus a logic-level guard, rather than relying on just one. If I had accepted the first version without checking both layers, a user could still submit a past date by typing it directly instead of using the picker.
