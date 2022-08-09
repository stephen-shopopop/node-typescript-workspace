[![Minimal node version](https://img.shields.io/static/v1?label=node&message=%3E=16.15&logo=node.js&color)](https://nodejs.org/about/releases/)
[![Minimal npm version](https://img.shields.io/static/v1?label=npm&message=%3E=8.5.5&logo=npm&color)](https://github.com/npm/cli/releases)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/stephen-shopopop/node-ts/graphs/commit-activity)
[![Linux](https://svgshare.com/i/Zhy.svg)](https://svgshare.com/i/Zhy.svg)
[![macOS](https://svgshare.com/i/ZjP.svg)](https://svgshare.com/i/ZjP.svg)
[![Visual Studio Code](https://img.shields.io/badge/--007ACC?logo=visual%20studio%20code&logoColor=ffffff)](https://code.visualstudio.com/)

# NODE typescript template workspace

## Description

Template nodejs typescript with ts-standard

## Installation nodejs via nvm (node version manager)

- [macos/linux](https://github.com/nvm-sh/nvm) or use Makefile command: ```make nvm```
- [windows](https://github.com/coreybutler/nvm-windows)

## Contributing

Add package in workspace:

```shell
npm init --scope=@stephen-shopopop -y -w ./packages/hello
```

Publish all package (optionnal):

```shell
npm publish --workspaces --access public
```

1. npm run start -  Run all packages.
2. npm run dev - Run all packages with ts-node
3. npm run test -  Run tests.
4. npm run build - Build each packages
5. npm run build:extra  - Build each package in dist isolate
6. npm run lint - Run lint
7. npm run lint:fix - Run lint autofix
8. npm run typecheck - Run typecheck
9. npm run release - Tag release
10. npm run prerelease - Tag pre release
11. npm run fix - Tag fix 

## Production

```bash
npm i --production
```

## Docs

### Summary

### Package maintenance

A modern cli tool that keeps your deps fresh

```bash
npx taze
```
