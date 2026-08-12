---
name: commit-and-push
description: Use this skill when committing and pushing changes to a git repository. It provides guidance on best practices for version control and collaboration using git.
---

Generate a commit message that follows conventional commits. The commit message should be clear and concise, describing the purpose of the change. Use the imperative mood in your commit messages (e.g., "Add feature X" instead of "Added feature X").

Body should not be too long. If necessary, provide additional context in the body of the commit message.

After committing, push the changes to the remote repository. If there are any conflicts, resolve them  using `git pull --rebase` before pushing.