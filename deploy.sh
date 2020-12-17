npm run build

cd public

git init
git add -A
git commit -m 'deploy'

git push -f https://gitee.com/chocolate1999/chocolate1999.gitee.io.git master

cd ../
rm -rf public