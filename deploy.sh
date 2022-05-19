#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:isabdch/cryptocurrency-viewer.git main:gh-pages

cd -