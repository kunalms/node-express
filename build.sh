function readJson() {
  UNAMESTR=$(uname)
  if [[ "$UNAMESTR" == 'Linux' ]]; then
    SED_EXTENDED='-r'
  elif [[ "$UNAMESTR" == 'Darwin' ]]; then
    SED_EXTENDED='-E'
  fi

  VALUE=$(grep -m 1 "\"${2}\"" ${1} | sed ${SED_EXTENDED} 's/^ *//;s/.*: *"//;s/",?//')

  if [ ! "$VALUE" ]; then
    echo "Error: Cannot find \"${2}\" in ${1}" >&2
    exit 1
  else
    echo $VALUE
  fi
}

cd frontend
#npm run build-prod
cd .. || exit 1
VERSION=$(readJson package.json version) || exit 1
echo "committing latest changes in $1 build $VERSION"
git add . -A
git commit -m "created $1 build - app version_ $VERSION"
git push origin

npm version $1
