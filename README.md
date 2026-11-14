# ☕ MigraCode Coffee: Git Workflow Practice

Welcome! In this project you will practise the **real workflow developers use every day**:

> **branch → code → `git add` → `git commit` → `git push` → Pull Request**

To have something to commit, you will solve small JavaScript exercises. They all follow one story: you just got a job at **MigraCode Coffee**, a small café, and you will write code to help it run.

---

## 📋 The rules

1. **One branch per exercise.** Every time you start a new exercise, create a new branch.
2. **Branch name pattern:** `your-name-exercise-name`, all in lowercase and with no spaces. Example: `amina-strings`
3. **Always create the new branch from `main`.** Don't create it from the branch of the previous exercise.
4. **Work only on that exercise** in that branch.
5. **When you finish:** `git add` → `git commit` → `git push`.
6. **Open a Pull Request on GitHub** for that branch. That means one PR per exercise.

---

## 📚 Exercises

| # | File | Topic | Branch name to use |
| --- | --- | --- | --- |
| 1 | `exercises/01-strings.js` | Strings | `your-name-strings` |
| 2 | `exercises/02-numbers.js` | Numbers | `your-name-numbers` |
| 3 | `exercises/03-functions.js` | Functions | `your-name-functions` |
| 4 | `exercises/04-conditionals.js` | `if` / `else` | `your-name-conditionals` |
| 5 | `exercises/05-while-loops.js` | `while` loops | `your-name-while-loops` |
| 6 | `exercises/06-cafe-machine.js` | Everything together + your own `console.assert` | `your-name-cafe-machine` |

Do them **in order**, from 1 to 6.

---

## ✅ Before you start

You need:

1. A **GitHub account** → <https://github.com/signup>
2. **Git** installed → check with `git --version`
3. **Node.js** installed → check with `node --version`
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

**Your goal: run the file and see no `Assertion failed` messages.**

When you first run a file, you will see many `Assertion failed` messages. That is expected, because you haven't solved anything yet. Fix them one by one.

> ⚠️ Only change the lines marked with ✏️. Don't change the `console.assert` lines (except in exercise 6.4, where you write your own).

---

## 🛠️ Part 1: One-time setup

You only do this **once**, at the very beginning.

### 1.1 Fork the repository

Click the **Fork** button (top-right of this page on GitHub). This creates **your own copy** of the project under your GitHub account, so you can push your work to it.

### 1.2 Clone YOUR fork

On **your fork** (the URL should contain your username), click the green **Code** button, copy the URL, and run:

```bash
git clone https://github.com/YOUR-USERNAME/REPOSITORY-NAME.git
cd REPOSITORY-NAME
```

From now on, **always run the commands from this folder** (the root of the project).

---

## 🔁 Part 2: The workflow for EVERY exercise

Repeat these steps **for each exercise**. The examples use a student called `amina` doing **exercise 1 (strings)**. Replace them with your name and the exercise you're doing.

### Step 1: Go back to `main`

Every new exercise starts from `main`:

```bash
git checkout main
```
//git checkout -b adil-solutions

### Step 2: Create a new branch for the exercise

Pattern: `your-name-exercise-name`

```bash
git checkout -b amina-strings
```

Check that you are on the new branch (it has a `*` next to it):

```bash
git branch
```

### Step 3: Copy the exercise into your folder

Copy **only the exercise you're doing** into `solutions/your-name/`:

```bash
mkdir -p solutions/amina
cp exercises/01-strings.js solutions/amina/
```

### Step 4: Solve the exercise

Open `solutions/amina/01-strings.js` in your editor and solve it. Run it as many times as you need:

```bash
node solutions/amina/01-strings.js
```

Keep going until you see **no `Assertion failed` messages**. 🎉

### Step 5: `git add`

Check what changed, then add your file to the staging area:

```bash
git status                                  # red = changed but not added yet
git add solutions/amina/01-strings.js
git status                                  # green = ready to commit
```

### Step 6: `git commit`

Save a snapshot of your work with a clear message:

```bash
git commit -m "Solve strings exercise"
```

> 💡 You can also commit several times while working (for example after each part of the exercise). Small commits are a great habit!

### Step 7: `git push`

Send your branch to GitHub:

```bash
git push -u origin amina-strings
```

- `origin` = your fork on GitHub
- `amina-strings` = the branch you're pushing

### Step 8: Create a Pull Request on GitHub

1. Go to **your fork** on GitHub. You will see a yellow banner, **"Compare & pull request"**. Click it.
   (If you don't see it, go to the **Pull requests** tab → **New pull request**.)
2. Check the direction of the PR:
   - **base repository:** the original repository, branch `main`
   - **head repository:** your fork, branch `amina-strings`
3. **Title:** `Amina - Strings`
4. Fill in the checklist in the description.
5. Click **Create pull request**. 🎉

### Step 9: Next exercise

Go back to **Step 1** and repeat with the next exercise and a new branch:

```bash
git checkout main
git checkout -b amina-numbers
mkdir -p solutions/amina
cp exercises/02-numbers.js solutions/amina/
# ...solve, add, commit, push, Pull Request
```

---

## 📝 Cheat sheet: one exercise from start to finish

```bash
git checkout main                              # 1. start from main
git checkout -b amina-strings                  # 2. new branch: your-name-exercise-name
mkdir -p solutions/amina                       # 3. your folder
cp exercises/01-strings.js solutions/amina/    #    copy the exercise
node solutions/amina/01-strings.js             # 4. solve & run until no "Assertion failed"
git add solutions/amina/01-strings.js          # 5. add
git commit -m "Solve strings exercise"         # 6. commit
git push -u origin amina-strings               # 7. push
                                               # 8. open the Pull Request on GitHub
```

---

## 💬 Part 3: When you get feedback on a Pull Request

Your teacher may leave comments on your PR. To fix something, **go back to the branch of that exercise**:

```bash
git checkout amina-strings
# edit the file and run it again
git add solutions/amina/01-strings.js
git commit -m "Fix strings exercise after review"
git push
```

There's no need to open a new PR. The existing one **updates automatically** when you push to the same branch.

---

## 🗺️ The whole picture

```
                    ┌─── amina-strings ────► push ──► Pull Request #1
                    │
  main ─────────────┼─── amina-numbers ────► push ──► Pull Request #2
  (always start     │
   from here)       └─── amina-functions ──► push ──► Pull Request #3
                                ...
  Inside each branch:  edit ──► git add ──► git commit ──► git push
```

---

## 🆘 Common problems

| Problem | Solution |
| --- | --- |
| My PR shows files from a **previous exercise** | You created the branch from another exercise branch instead of `main`. Always run `git checkout main` **before** `git checkout -b ...` |
| I don't know which branch I'm on | Run `git branch`. The one with `*` is your current branch. |
| `Permission denied` / `403` when pushing | You cloned the **original** repo instead of **your fork**. Check with `git remote -v`, and fix it with `git remote set-url origin https://github.com/YOUR-USERNAME/REPOSITORY-NAME.git` |
| GitHub asks for a password and rejects it | GitHub doesn't accept account passwords in the terminal. Use a [Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) as the password, or log in with the [GitHub CLI](https://cli.github.com/): `gh auth login` |
| `nothing to commit` | You forgot to save the file in the editor, or you already committed it. |
| `error: pathspec ... did not match` | The file path is wrong. Run `ls solutions/YOUR-NAME` to see your files. |
| `Cannot find module ...` when running `node` | You're not in the project root. Run `pwd`, then `cd` into the project folder. |
| The terminal is stuck after running a file | You have an infinite `while` loop. Press `Ctrl + C` and check your loop condition. |
| I worked on `main` by mistake (not committed yet) | Run `git checkout -b your-name-exercise-name`. Your changes come with you to the new branch. |

---

## ⭐ Extra challenges (optional)

- Run `git log --oneline` on each branch and compare the histories.
- Add a new drink to the menu in `06-cafe-machine.js` and write a `console.assert` for it.
- Look at a classmate's Pull Request and leave a nice comment or a suggestion. 💬
