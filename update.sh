#!/usr/bin/env bash

pushd 01-simple-js-node
  npm i @furi-server/furi@latest
popd

folders=(
"02-simple-js"
"03-simple-ts"
"04-basic-listen"
"05-statis-routes"
"06-middlewares"
"07-routers"
"08-functions"
"09-class-handler"
"10-router-array"
"11-router-array"
"12-prefixed-router-array"
)

for folder in "${folders[@]}"; do
    pushd $folder
    deno outdated --update
    popd
done
