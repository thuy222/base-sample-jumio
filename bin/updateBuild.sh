#!/bin/sh

CURRENT_VERSION=$(node -p "require('./package.json').build")
NEW_VERSION=$((CURRENT_VERSION+1))
sed -i '' "s/\"build\": \"${CURRENT_VERSION}\"/\"build\": \"${NEW_VERSION}\"/" ./package.json