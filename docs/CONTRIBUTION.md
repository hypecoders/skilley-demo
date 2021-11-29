# Contribution (Version Control)

For now, we use classic version control workflow - _push everything to master branch_.

In the future, we will utilize [Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) workflow with minor additions.\
&nbsp;

## Branches

### Master

Everything is immediately pushed straight to this branch.\
&nbsp;

## Commiting

### Use the seven rules of a great Git commit message

<details>
  <summary>1. Separate subject from body with a blank line</summary>
  &nbsp;

Not every commit requires both a subject and a body.

```
git commit -m "Fix typo in introduction to user guide"
```

However, when a commit merits a bit of explanation and context, you need to write a body.

```
Summarize changes in around 50 characters or less

More detailed explanatory text, if necessary. Wrap it to about 72
characters or so. In some contexts, the first line is treated as the
subject of the commit and the rest of the text as the body. The
blank line separating the summary from the body is critical (unless
you omit the body entirely); various tools like `log`, `shortlog`
and `rebase` can get confused if you run the two together.

Further paragraphs come after blank lines.

 - Bullet points are okay, too

 - Typically a hyphen or asterisk is used for the bullet, preceded
   by a single space, with blank lines in between, but conventions
   vary here

If you use an issue tracker, put references to them at the bottom,
like this:

Resolves: #123
See also: #456, #789
```

</details>

<details>
  <summary>2. Limit the subject line to 50 characters</summary>
  &nbsp;

50 characters is not a hard limit, just a rule of thumb. Keeping subject lines at this length ensures that they are readable.

> Tip: If you’re having a hard time summarizing, you might be committing too many changes at once. Strive for atomic commits.

So shoot for 50 characters, but consider 72 the hard limit.\
 &nbsp;

</details>

3. Capitalize the subject line

4. Do not end the subject line with a period

<details>
  <summary>5. Use the imperative mood in the subject line</summary>
  &nbsp;

_Imperative mood_ just means “spoken or written as if giving a command or instruction”.

- Clean your room
- Remove deprecated methods
- Refactor subsystem X for readability

**A properly formed Git commit subject line should always be able to complete the following sentence:**

- If applied, this commit will _\<your subject line here\>_\
 &nbsp;
</details>

6. Wrap the body at 72 characters

7. Use the body to explain _what_ and _why_, not _how_

[Read more](https://chris.beams.io/posts/git-commit/) about writing Git commit messages.
