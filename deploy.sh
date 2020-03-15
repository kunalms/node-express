cd frontend
#npm run build-prod
git add -A
git commit -m $(npm version $1)
cd ..
pwd
#npm run build-frontend-prod && eb deploy
