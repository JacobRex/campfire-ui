#!/usr/bin/env bash

set -e

# echo "1. Building files";
npm run build

#echo "2. Orgaizing files";
mv dist/css/components/$files dist/styles/
mv dist/js/components/$files dist/components/

rm -r dist/css
rm -r dist/js
rm dist/index.html

#echo "3. Publishing";
npm publish