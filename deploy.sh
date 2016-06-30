#!/bin/bash
set -e

echo "Compilando ..."
ember build --prod

rm -rf out || exit 0;
mkdir out;
cp -rf dist/* out/

echo "Preparando el deploy ..."
cd out
git init

# The first and only commit to this new Git repo contains all the
# files present with the commit message "Deploy to GitHub Pages".
git add .
git commit -m "update"
git remote add origin git@github.com:hugoruscitti/ember-blockly.git

echo "Realizando push a gitpages..."
git push --force git@github.com:hugoruscitti/ember-blockly.git master:gh-pages

echo "Limpiando los cambios"
cd ..
rm -rf out

echo "Listo: http://hugoruscitti.github.io/ember-blockly/"
