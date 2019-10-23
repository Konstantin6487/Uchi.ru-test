setup: install-deps

start:
	npm start

install-deps:
	npm ci

build:
	rm -rf dist
	npm run build

lint:
	npx eslint .

test:
	npm test

.PHONY: test