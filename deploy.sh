cd Desktop/MyProjects/pmpass/
git checkout master
git checkout -B deployment
git rm -r .
cp -r build/* . --exclude=node_modules
git add .
git commit -m "Deploying latest build"
git push origin deployment
git checkout master
