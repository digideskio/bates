#!/bin/bash

cp $BATES_PTH/.eslintrc ./.eslintrc
if [ ! -e .gitignore ]; then
  cp $BATES_PTH/template/gitignore ./.gitignore
fi
if [ ! -e .npmignore ]; then
  cp $BATES_PTH/template/.npmignore ./
fi
if [ ! -e .travis.yml ]; then
  cp $BATES_PTH/template/.travis.yml ./
fi
if [ ! -d dist ]; then
  mkdir dist
fi
if [ ! -e dist/200.html ]; then
  cp $BATES_PTH/template/200.html dist/
fi
if [ ! -e dist/favicon.png ]; then
  cp $BATES_PTH/template/favicon.png dist/
fi
if [ ! -d src ]; then
  mkdir src
fi
# if [ ! -e src/dist.js ]; then
#   cp $BATES_PTH/template/dist.js src/
# fi
if [ ! -e src/index.js ]; then
  cp $BATES_PTH/template/index.js src/
fi
if [ ! -e src/main.js ]; then
  cp $BATES_PTH/template/main.js src/
fi
if [ ! -e src/main.test.js ]; then
  cp $BATES_PTH/template/main.test.js src/
fi
