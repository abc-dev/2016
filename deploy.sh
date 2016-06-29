#!/bin/bash

# Colors
DEFAULT='\033[0m'
RED='\033[00;31m'
GREEN='\033[00;32m'
YELLOW='\e[0;33m'

echo "${RED}Baixando dependências"
npm i

echo "${YELLOW}Gerando o projeto"
gulp html js scss

echo "${RED}Fazendo o deploy"
rm -rf .deploy
mkdir .deploy
cp -R build/* .deploy
cd .deploy
git init
git add --all
git commit -m "Update site via deploy.sh"
git remote add origin git@github.com:abc-dev/2016.git
git fetch origin
git checkout gh-pages
git merge master
git push origin gh-pages
