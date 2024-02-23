cd
cd Desktop/MyProjects/pmpass/
git checkout master
git checkout -B deployment
git rm -r .
rsync -av --exclude=node_modules/ build/ .
git add .
git commit -m "Deploying latest build"
git push origin deployment
git checkout master
