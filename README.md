# ☕ MigraCode Coffee: Git Workflow Practice

Welcome! In this project you will practise the **real workflow developers use every day**:

> **fork → clone → branch → code → `git add` → `git commit` → `git push` → Pull Request**

To have something to commit, you will solve small JavaScript exercises. They all follow one story: you just got a job at **MigraCode Coffee**, a small café, and you will write code to help it run.

| File | Topic | What you do at the café |
| --- | --- | --- |
| `01-strings.js` | Strings | Prepare the sign, the welcome message, clean up orders |
| `02-numbers.js` | Numbers | Add up prices, split the bill, pack cookies into boxes |
| `03-functions.js` | Functions | Greet customers, calculate totals, format prices |
| `04-conditionals.js` | `if` / `else` | Opening hours, cup sizes, discounts, payments |
| `05-while-loops.js` | `while` loops | Countdown, drawing cups, coffee stock, loyalty card |
| `06-cafe-machine.js` | Everything together + `console.assert` | Build the order machine and write your own tests |

---

## ✅ Before you start

You need:

1. A **GitHub account** → <https://github.com/signup>
2. **Git** installed → check with `git --version` in your terminal
3. **Node.js** installed → check with `node --version` in your terminal
4. A code editor, for example **VS Code**

If you have never used git on this computer, tell git who you are (only once):

```bash
git config --global user.name "Your Name"
git config --global user.email "the-email-of-your-github-account@example.com"
```

---

## 🧪 How the exercises work: `console.assert`

Each exercise file already has **checks** written with `console.assert`:

```js
console.assert(condition, "message to show if the condition is false");
```

- If the condition is **true**, nothing is printed. ✅
- If the condition is **false**, it prints `Assertion failed: message`. ❌

Your goal: **run the file and see no `Assertion failed` messages.**

```bash
node 01-strings.js
```

When you first run a file, you will see many `Assertion failed` messages. That is expected, because you haven't solved anything yet. Fix them one by one.

> ⚠️ Only change the lines marked with ✏️. Don't change the `console.assert` lines (except in exercise 6.4, where you write your own).

---

## 🚀 Step by step

### Step 1: Fork the repository

Click the **Fork** button (top-right of this page on GitHub). This creates **your own copy** of the project under your GitHub account, so you can push your work to it.

### Step 2: Clone YOUR fork to your computer

On **your fork** (the URL should contain your username), click the green **Code** button and copy the URL. Then in the terminal:

```bash
git clone https://github.com/YOUR-USERNAME/REPOSITORY-NAME.git
cd REPOSITORY-NAME
```

### Step 3: Create a branch for your work

Never work directly on `main`. Create a branch with your name:

```bash
git checkout -b YOUR-NAME-solutions
```
//git checkout -b adil-solutions

Check which branch you are on at any moment with:

```bash
git branch
```

### Step 4: Copy the exercises into your own folder

Each student works in their own folder inside `solutions/`, so nobody overwrites anybody else's work:

```bash
mkdir solutions/YOUR-NAME
cp exercises/*.js solutions/YOUR-NAME/
cd solutions/YOUR-NAME
```

> Example: `mkdir solutions/amina` and `cp exercises/*.js solutions/amina/`

### Step 5: Solve an exercise and commit it

Open `01-strings.js` in your editor, solve it, and run it:

```bash
node 01-strings.js
```

When there are no `Assertion failed` messages, **save your progress with git**:

```bash
git status                       # see which files changed (red = not added yet)
git add 01-strings.js            # put the file in the "staging area"
git status                       # now it's green = ready to commit
git commit -m "Solve 01 strings exercises"
```

### Step 6: Repeat for every exercise (one commit per exercise)

Do Step 5 again for `02-numbers.js`, `03-functions.js`, and so on. **One commit per exercise.** Small commits with clear messages are a great habit!

See the list of your commits with:

```bash
git log --oneline
```

### Step 7: Push your branch to GitHub

```bash
git push -u origin YOUR-NAME-solutions
```

- `origin` = your fork on GitHub
- `-u` connects your local branch to the GitHub branch, so next time you can simply run `git push`

### Step 8: Open a Pull Request

1. Go to **your fork** on GitHub. You will see a yellow banner: **"Compare & pull request"**. Click it.
2. Check that the PR goes **from** `YOUR-USERNAME/REPOSITORY-NAME` → `YOUR-NAME-solutions`
   **into** the original repository → `main`.
3. Title: `Solutions: Your Name`
4. Fill in the checklist in the description.
5. Click **Create pull request**. 🎉

### Step 9: Respond to feedback

Your teacher may leave comments on your PR. To make changes, edit the files, then:

```bash
git add .
git commit -m "Fix countdown after review"
git push
```

There's no need to open a new PR. It **updates automatically** when you push to the same branch.

---

## 🗺️ The whole workflow in one picture

```
  GitHub (original repo)
          │  Fork (button on GitHub)
          ▼
  GitHub (YOUR fork) ◄──────────────── git push ───────────┐
          │  git clone                                      │
          ▼                                                 │
  Your computer ──► git checkout -b ──► edit code ──► git add ──► git commit
                                                            │
  Pull Request: YOUR fork/branch ───► original repo/main    │
```

---

## 🆘 Common problems

| Problem | Solution |
| --- | --- |
| `Permission denied` / `403` when pushing | You cloned the **original** repo instead of **your fork**. Run `git remote -v` to check. Fix it with `git remote set-url origin https://github.com/YOUR-USERNAME/REPOSITORY-NAME.git` |
| GitHub asks for a password and rejects it | GitHub doesn't accept account passwords in the terminal. Use a [Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) as the password, or log in with the [GitHub CLI](https://cli.github.com/): `gh auth login` |
| `nothing to commit` | You forgot to save the file in the editor, or you already committed it. |
| `node: command not found` | Install Node.js from <https://nodejs.org> |
| `Cannot find module ...01-strings.js` | You're in the wrong folder. Run `pwd` and `ls`, then `cd solutions/YOUR-NAME` |
| The terminal is stuck after running a file | You have an infinite `while` loop. Press `Ctrl + C` and check your loop condition. |
| I committed on `main` by mistake | Run `git checkout -b YOUR-NAME-solutions`. The new branch keeps your commits. |

---

## ⭐ Extra challenges (optional)

- Run `git log --oneline` and take a screenshot of your commit history for the PR.
- Add a new drink to the menu in `06-cafe-machine.js` and write a `console.assert` for it.
- Look at a classmate's Pull Request and leave a nice comment or a suggestion. 💬
