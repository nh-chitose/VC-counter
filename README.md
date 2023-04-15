# :1234:VC-counter

![GitHub package.json version](https://img.shields.io/github/package-json/v/nh-chitose/VC-counter)
![GitHub package.json dependency version (subfolder of monorepo)](https://img.shields.io/github/package-json/dependency-version/nh-chitose/VC-counter/oceanic.js)
[![CodeQL](https://github.com/nh-chitose/VC-counter/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/nh-chitose/VC-counter/actions/workflows/github-code-scanning/codeql)
[![CI](https://github.com/nh-chitose/VC-counter/actions/workflows/test.yml/badge.svg)](https://github.com/nh-chitose/VC-counter/actions/workflows/test.yml)
![GitHub](https://img.shields.io/github/license/nh-chitose/VC-counter)

自分の見えないチャンネルも含めたサーバ全体のVC接続人数を表示してくれるDiscordボットです。

## 機能

カウンター用のチャンネルの名前を変更してくれることによりそのチャンネルを閲覧可能にした全ての人からサーバ全体のVC接続人数を確認することが出来ます。Discord APIの制約により更新は6分に一度です。

## 必要な権限・準備

☑ 管理者権限(全てのチャンネルを閲覧するため)

* 「VC接続人数:」と名前の付いたボットが名前を変更できるチャンネル
  (VCで一般メンバーは接続不可にしておくことを推奨)

## 推奨環境

* Node.js v16.16.0以降

## 導入

```sh
# クローン
git clone https://github.com/nh-chitose/VC-counter.git
# ディレクトリの移動
cd VC-counter
# 依存関係のインストール
npm i
```

`.env`ファイルの用意

```sh
TOKEN=(Discord Developer Portalで取得したトークン)
```

```sh
# 実行
npm run start
```

## サポート

[サポートサーバ](https://discord.gg/CAP6JJPdaE)にて質問・バグの報告などを受け付けております。

またご自分でホストしなくても、上記サーバーから導入して頂けます。

## Change Log

2022/10/28 Release v1.0.0

2023/04/15 TypeScript + oceanic.jsに変更 v1.1.0
