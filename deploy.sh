npm run build

cd public

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/HearLing/HearLing.github.io master

cd ../
rm -rf public