1. touch README.md
   git init

2. git add README.md

3. git diff
   git diff --cached
   git diff HEAD

4. git commit -m "The README.md file for the repositoy"
   git add index.html
   git commit -m "commits webpage"
   git add style.css
   git commit -m "this styles the page"
   git add script.js
   git commit -m "this makes the webpage interactive"

5. git checkout style.css
   git checkout script.js

6. git reset HEAD index.html
   git reset HEAD README.md

7. git reset HEAD^

8. git status

9. git log
   git log --stat
   git log --oneline
   git log -p -2/-1/-3

14. git checkout feature1
    git checkout master
    git branch
    git branch -v
    git branch -a