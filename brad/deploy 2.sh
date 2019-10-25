#!/usr/bin/env sh

#abort on errors
set -e

#build
yarn build

#navigate into build output directory
cd dist

#deploying to a custom domain
echo 'www.iambradblackburn.com' > CNAME

git init
git add -a
git commit -m 'deploy'

#when deploying to https://<USERNAME>/github.io
#git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

#when deploying to a repository
git push -f git@github.com:iambradblackburn/iambradblackburn.git master:gh-pages

cd -