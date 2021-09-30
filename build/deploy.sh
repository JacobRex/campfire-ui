#!/usr/bin/env bash

set -e

# echo "1. Building files";
npm run build

#echo "2. Orgaizing files";
cp package.json ./dist
cd ./dist
mv css/components/$files styles/
mv js/components/$files components/

rm -r css
rm -r js
rm index.html

#echo "3. Publishing";
npm publish