cd Desktop/MyProjects/pmpass/
git checkout master
git checkout -B deployment
git pull
git rm -r .
cp -r build/. .
rm -rf node_modules
git add .
git commit -m "Deploying latest build"
git push origin deployment
git checkout master
