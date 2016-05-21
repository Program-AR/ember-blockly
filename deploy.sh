#!/bin/bash
set -e

ember build --prod
cp -r dist/* out/

rm -rf out || exit 0;
mkdir out;
cd out
git init

# The first and only commit to this new Git repo contains all the
# files present with the commit message "Deploy to GitHub Pages".
git add .
git commit -m "update"
git remote add origin git@github.com:hugoruscitti/ember-blockly.git

git push --force git@github.com:hugoruscitti/ember-blockly.git master:gh-pages
cd ..
rm -rf out
