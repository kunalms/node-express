function readJson {
  UNAMESTR=`uname`
  if [[ "$UNAMESTR" == 'Linux' ]]; then
    SED_EXTENDED='-r'
  elif [[ "$UNAMESTR" == 'Darwin' ]]; then
    SED_EXTENDED='-E'
  fi;

  VALUE=`grep -m 1 "\"${2}\"" ${1} | sed ${SED_EXTENDED} 's/^ *//;s/.*: *"//;s/",?//'`

  if [ ! "$VALUE" ]; then
    echo "Error: Cannot find \"${2}\" in ${1}" >&2;
    exit 1;
  else
    echo $VALUE ;
  fi;
}

cd frontend
npm run build-prod
git add -A
VERSION=`readJson package.json version` || exit 1;
git commit -m "created build - $VERSION"

npm version $1
cd ..
npm version $1
git add -A
VERSION=`readJson package.json version` || exit 1;
git commit -m "created build version - $VERSION"
