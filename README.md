# Monorepo Supported By Rush and PNPM

> keywords: Monorepo/Rush/PNPM/React/CRA/Vite

## Features

- Structures
  - apps: Web Apps
  - features: 不需要发布的包，只需要在这个Monorepo中重复使用
  - packages: 需要发布的包
  - tools: 所有项目的通用工具
- Examples
  - create-react-app
  - vite-react-app
  - tsc package
  - feature package
- commitlint/eslint/prettier/lint-staged
- commit-msg and pre-commit hooks

## Quick Start

```shell
npm i @microsoft/rush pnpm -g

git clone git@github.com:worldzhao/rush-monorepo-example.git

cd rush-monorepo-example

rush update

# 首先建立我们应用程序的依赖关系
rush build -T @rush-monorepo/cra-app

cd apps/cra-app

# start app
rushx start # or npm start
```

More 👉 [应用级 Monorepo 优化方案](https://github.com/worldzhao/blog/issues/9)
