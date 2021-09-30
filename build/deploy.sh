#!/usr/bin/env bash

set -e

# echo "1. Building files";
npm run build
cp package.json ./dist
cd ./dist

#echo "2. Orgaizing files";
mv css/components/$files styles/
mv js/components/$files components/

rm -r css
rm -r js
rm index.html

#echo "3. Publishing";
npm publish

#echo "4. Cleaning up";
rm package.json
cd ../