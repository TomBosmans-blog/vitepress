#!/usr/bin/env sh

touch blog/articles/index.md
node scripts/generate.js
node_modules/.bin/vitepress build blog
