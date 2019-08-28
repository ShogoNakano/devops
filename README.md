# セットアップ

## github

1. 自分自身のリポジトリを作成
2. masterブランチにソースファイルをアップロード


## Travis CI

1. travis-ci.org にアクセス
2. githubアカウントでログイン
3. プロジェクトのSettings画面に遷移し、Environment Variablesで環境変数を登録
　　環境変数名：GITHUB_TOKEN
　　バリュー：個人githubで生成した Personal access token (scopeは"repo"のみ)
　　(https://github.com/settings/tokens)


## 全体を通しての手順

1. githubにログインし、自分自身のリポジトリを作成(空でOK)
2. travis-ci.org にアクセス
3. githubアカウントでログイン
4. プロジェクトのSettings画面に遷移し、Environment Variablesで環境変数を登録
　　環境変数名：GITHUB_TOKEN
　　バリュー：個人githubで生成した Personal access token (scopeは"repo"のみ)
　　(https://github.com/settings/tokens)
5. githubのリポジトリに対してファイルのアップロードを実施
　　今回のワークショップでは、全部で4ファイルアップロードする
　　・index.html
　　・lib.js
　　・package.json
　　・.travis.yml -> このファイルが無いと travis CI側かアクティブなリポジトリとして認識されないので注意