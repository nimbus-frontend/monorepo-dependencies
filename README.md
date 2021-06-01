![Node version][node-img]
![NPM versoin][npm-img]

[![Dependencies][deps-img]][snyk-url]
[![Dev Dependencies][dev-deps-img]][snyk-url]
[![Security Issues][security-img]][snyk-url]

[npm-img]: https://img.shields.io/badge/npm-7.13.0-brightgreen
[node-img]: https://img.shields.io/badge/node-16.2.0-brightgreen
[snyk-url]: https://snyk.io/test/github/nimbus-frontend/monorepo-dependencies
[deps-img]: https://status.david-dm.org/gh/nimbus-frontend/monorepo-dependencies.svg?ref=master
[dev-deps-img]: https://status.david-dm.org/gh/nimbus-frontend/monorepo-dependencies.svg?ref=master&type=dev
[security-img]: https://snyk.io/test/github/nimbus-frontend/monorepo-dependencies/badge.svg

# Monorepo Dependencies 

Internal repo for building artifacts with monorepo dependencies.

Mirror: https://github.com/nimbus-frontend/monorepo-dependencies

## Installation examples:

```shell
# Fully consistent across environments
# Typical first install on dev environment
npm run install-strict
```

```shell
# Cleanup and install latest updates
rm package-lock.json
npm run install-new
```

```shell
# Adding dependencies
npm run install-new @nestjs/core@7.6.17 -E -S
npm run install-new @ngrx/{effects,entity}@12.0.0 -E -S
```

```shell
# Adding dev dependencies:
npm run install-new dotenv@10.0.0 -E -D
npm run install-new @storybook/{addon-actions@6.2.8,addon-links@6.2.7} -E -D
```

```shell
# Smoke build:
npm run nx run-many -- --all --target=lint
npm run nx run-many -- --all --target=test
npm run nx run-many -- --all --target=build
npm run nx run-many -- --all --target=build-storybook
```

## P.S.

For now there are 3 strategies to fresh install dependencies:
1. `npm install`
2. `npm install --force`
3. `npm install --legacy-peer-deps`

Current implementation of `npm run install-fast` based on strategy #3
