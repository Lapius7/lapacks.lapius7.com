# repomix-auto

Repomix のソースマップ生成を自動化する CLI。プロジェクトに触り始めるとき、全体を読まずに済むようにする。

```
npm i -g @lapius/repomix-auto
repomix-auto [ディレクトリ] [--force] [--check] [--path] [--out <dir>] [--no-auto-exclude]
```

| オプション | 説明 |
|-|-|
| `--check` | 生成せず鮮度だけ確認（fresh=0 / stale=1） |
| `--force` | 鮮度に関係なく再生成 |
| `--path` | 出力パスだけを標準出力に表示（スクリプト向け） |
| `--out <dir>` | 出力先ディレクトリ |
| `--no-auto-exclude` | Top 5 の自動除外をしない |
| `--update` | 最新版に更新（`npm i -g @lapius/repomix-auto@latest`） |
| `-y, --yes` | プロジェクトに見えないディレクトリでも確認せず実行 |

誤爆防止: ホーム・`/` 直下では実行を拒否します。`.git` や `package.json` などが無いディレクトリでは確認します（非対話では `--yes` が必要）。repomix が失敗したら、その回に作った config は消します。

```
```

- 出力先（既定）: `~/.cache/repomix-auto/<名前>-<パスのハッシュ4桁>.md`。`--out <dir>` か `REPOMIX_AUTO_OUT` で固定ディレクトリの `<名前>.md` にできる。既存の `repomix.config.json` に `output.filePath` があればそれを優先
- 鮮度確認: 出力より新しいソース（git 管理下は gitignore を除く）が無ければ再生成しない（`--check` で確認のみ）
- `repomix.config.json` を自動作成し、git 管理下では `.git/info/exclude` に追記
- 初回実行後の Top 5 のうち、i18n・マイグレーション・データ・生成物は自動で除外して `headerText` に理由を記録。判断できないものは一覧表示

必要なもの: Node 18+（repomix は `npx` で実行）
