# fixmyjs

リントルールに基づいて、非破壊的な方法でJavaScriptを自動的に修正します。

## デモ

[fixmyjs.com](http://fixmyjs.com) で実際に試すことができます。

## 機能

`fixmyjs` は、リンターによって検出される一般的な多くの問題を自動的に修正できます。

**スタイルと一貫性**
- `if`、`for`、`while`文に不足している波括弧（ブレース）を追加します。
- 可能な場合、ブラケット記法をドット記法に変換します（例: `obj["prop"]` → `obj.prop`）。
- 一貫したキャメルケース/スネークケースを強制します（`snake_case` から `camelCase`、またはその逆）。
- `new Array()` を `[]` に、`new Object()` を `{}` に変換します。
- コンストラクタ呼び出しに不足している括弧を追加します（例: `new Person` → `new Person()`）。
- 複数の宣言を持つ単一の `var` 文を、個別の文に分割します。

**エラー防止とベストプラクティス**
- `==` と `!=` を厳密等価演算子 `===` と `!==` に置き換えます。
- `NaN` の比較（例: `x == NaN`）を `isNaN()` 関数を使用するように書き換えます。
- `parseInt()` の呼び出しに `radix`（基数）パラメータを追加します。
- 結果が使用されていない場合、`new MyObject();` を `MyObject();` に変換し、`new` による副作用を防ぎます。
- 変数に対する安全でない `delete` を `undefined` への代入に置き換えます。
- `new String()` のような無効なコンストラクタ呼び出しを `String()` に修正します。
- `debugger` 文を削除します。
- `++` と `--` を禁止し、代わりに `+= 1` と `-= 1` を使用するようにします。

## インストール

コマンドラインツールとして使用するには、グローバルにインストールします。
```sh
npm install -g fixmyjs
```

## 使い方

### コマンドライン

1つ以上のファイル（またはディレクトリ）を直接（インプレースで）修正します。
```sh
fixmyjs your_file.js path/to/directory/
```

ファイルを変更せずに提案される変更の差分を確認するには、ドライランを実行します。
```sh
fixmyjs --dry-run your_file.js
```

**共通オプション:**
- `--dry-run`, `-r`: ファイルに書き込まずに変更の差分を表示します。
- `--legacy`, `-l`: デフォルトのASTベースの修正ツールの代わりに、レガシーなJSHintベースの修正ツールを使用します。
- `--config`, `-c`: カスタムの `.jshintrc` 設定ファイルへのパスを指定します。
- `--patch`, `-p`: 標準出力（stdout）にパッチファイルを出力します。

`fixmyjs` は自動的に `.jshintrc` および `.jshintignore` ファイルを検出して使用します。

### プログラマティックAPI

```js
import fixmyjs from "https://code4fukui.github.io/fixmyjs/lib/index.js";

// 一般的な問題を含むソースコード
const src = `
var s='abc'
if (s == NaN) alert()
var obj = new Object();
delete s;
`;

// 設定オプション
const options = {
  curly: true,      // if/while/forに波括弧を追加
  quotmark: "double" // ダブルクォートを強制
};

const fixed = fixmyjs.fix(src, options);

console.log(fixed);
/*
出力:
var s = "abc";
if (isNaN(s)) {
  alert();
}
var obj = {};
s = undefined;
*/
```

## インテグレーション

- [Atomプラグイン](https://github.com/sindresorhus/atom-fixmyjs)
- [Bracketsプラグイン](https://github.com/fyockm/brackets-fixmyjs)
- [Gulpプラグイン](https://github.com/kirjs/gulp-fixmyjs)
- [Gruntプラグイン](https://github.com/jonschlinkert/grunt-fixmyjs)
- [Sublimeプラグイン](https://github.com/addyosmani/sublime-fixmyjs)

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
