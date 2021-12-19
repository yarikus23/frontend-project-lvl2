# Makefile

install: # install dependences
	npm install
	npm ci

gendiff: # execute file bin/gendiff.js
	node bin/gendiff.js

lint: # execute eslint
	npx eslint .