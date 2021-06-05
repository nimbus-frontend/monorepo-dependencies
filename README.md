![Node version][node-img]
![NPM versoin][npm-img]

[![Dependencies][deps-img]][snyk-url]
[![Dev Dependencies][dev-deps-img]][snyk-url]
[![Security Issues][security-img]][snyk-url]

[npm-img]: https://img.shields.io/badge/npm-7.13.0-brightgreen
[node-img]: https://img.shields.io/badge/node-16.3.0-brightgreen
[snyk-url]: https://snyk.io/test/github/nimbus-frontend/monorepo-dependencies
[deps-img]: https://status.david-dm.org/gh/nimbus-frontend/monorepo-dependencies.svg?ref=master
[dev-deps-img]: https://status.david-dm.org/gh/nimbus-frontend/monorepo-dependencies.svg?ref=master&type=dev
[security-img]: https://snyk.io/test/github/nimbus-frontend/monorepo-dependencies/badge.svg

# Monorepo Dependencies 

Internal repo for building artifacts with monorepo dependencies

## Installation examples:

```shell
# Fully consistent across environments
# Typical first install on dev environment
# Slow
npm run install-strict
```

```shell
# Not fully consistent, can update deps on lvl > 2
# Very fast with existing cache
npm run install-fast
```

```shell
# Cleanup and install latest updates
rm package-lock.json
npm run install-new
```

```shell
# Adding dependencies
npm run install-dep @nestjs/core@7.6.17
npm run install-dep @ngrx/{effects,entity}@12.0.0
```

```shell
# Adding dev dependencies:
npm run install-dev dotenv@10.0.0
npm run install-dev @storybook/{addon-actions@6.2.8,addon-links@6.2.7}
```

```shell
# Smoke build:
npm run nx run-many -- --all --target=lint
npm run nx run-many -- --all --target=test
npm run nx run-many -- --all --target=build
npm run nx run-many -- --all --target=build-storybook
```

## Install strategies:

For now there are 3 strategies to fresh install dependencies:
1. `npm install`
2. `npm install --force`
3. `npm install --legacy-peer-deps`

Current implementation of `npm run install-fast` and `npm run install-new` are based on strategy #3


## Core Packages:

| Used | Latest | Next |
|---|---|---|
|![angular-core-curr]|![angular-core-latest]|![angular-core-next]|
|![nest-core-curr]|![nest-core-latest]|![nest-core-next]|
|![ngrx-store-curr]|![ngrx-store-latest]|![ngrx-store-next]|
|![nrwl-tao-curr]|![nrwl-tao-latest]|![nrwl-tao-next]|
|![storybook-curr]|![storybook-latest]|![storybook-next]|
|![typescript-curr]|![typescript-latest]|![typescript-next]|
|![eslint-curr]|![eslint-latest]|![eslint-next]|
|![jest-curr]|![jest-latest]|![jest-next]|
|![cypress-curr]|![cypress-latest]|![cypress-next]|
|![sass-loader-curr]|![sass-loader-latest]|![sass-loader-next]|

[angular-core-curr]: https://img.shields.io/github/package-json/dependency-version/nimbus-frontend/monorepo-dependencies/@angular/core
[angular-core-latest]: https://img.shields.io/npm/v/@angular/core/latest
[angular-core-next]: https://img.shields.io/npm/v/@angular/core/next

[nest-core-curr]: https://img.shields.io/github/package-json/dependency-version/nimbus-frontend/monorepo-dependencies/@nestjs/core
[nest-core-latest]: https://img.shields.io/npm/v/@nestjs/core/latest
[nest-core-next]: https://img.shields.io/npm/v/@nestjs/core/next

[ngrx-store-curr]: https://img.shields.io/github/package-json/dependency-version/nimbus-frontend/monorepo-dependencies/@ngrx/store
[ngrx-store-latest]: https://img.shields.io/npm/v/@ngrx/store/latest
[ngrx-store-next]: https://img.shields.io/npm/v/@ngrx/store/next

[nrwl-tao-curr]: https://img.shields.io/github/package-json/dependency-version/nimbus-frontend/monorepo-dependencies/dev/@nrwl/tao
[nrwl-tao-latest]: https://img.shields.io/npm/v/@nrwl/tao/latest
[nrwl-tao-next]: https://img.shields.io/npm/v/@nrwl/tao/next

[storybook-curr]: https://img.shields.io/github/package-json/dependency-version/nimbus-frontend/monorepo-dependencies/dev/@storybook/angular
[storybook-latest]: https://img.shields.io/npm/v/@storybook/angular/latest
[storybook-next]: https://img.shields.io/npm/v/@storybook/angular/next

[typescript-curr]: https://img.shields.io/github/package-json/dependency-version/nimbus-frontend/monorepo-dependencies/dev/typescript
[typescript-latest]: https://img.shields.io/npm/v/typescript/latest
[typescript-next]: https://img.shields.io/npm/v/typescript/next

[eslint-curr]: https://img.shields.io/github/package-json/dependency-version/nimbus-frontend/monorepo-dependencies/dev/eslint
[eslint-latest]: https://img.shields.io/npm/v/eslint/latest
[eslint-next]: https://img.shields.io/npm/v/eslint/next

[jest-curr]: https://img.shields.io/github/package-json/dependency-version/nimbus-frontend/monorepo-dependencies/dev/jest
[jest-latest]: https://img.shields.io/npm/v/jest/latest
[jest-next]: https://img.shields.io/npm/v/jest/next

[cypress-curr]: https://img.shields.io/github/package-json/dependency-version/nimbus-frontend/monorepo-dependencies/dev/cypress
[cypress-latest]: https://img.shields.io/npm/v/cypress/latest
[cypress-next]: https://img.shields.io/npm/v/cypress/next

[sass-loader-curr]: https://img.shields.io/github/package-json/dependency-version/nimbus-frontend/monorepo-dependencies/dev/sass-loader
[sass-loader-latest]: https://img.shields.io/npm/v/sass-loader/latest
[sass-loader-next]: https://img.shields.io/npm/v/sass-loader/next
