### 目的
- nodeのclusterの効果調査

### 使い方
- largeFile.txtという名前で大きなファイル作る
- コマンド例
```
dd if=/dev/zero of=largeFile.txt bs=16m count=100
```
- クラスタリング無し、有りのサーバーのいずれかを起動する
```bash
# クラスタリング無し
yarn run simple

# クラスタリング有り
yarn run cluster
```
- サーバーにGETリクエストを送り、その時間を計測する
```
\time node request.js
```

### 結果例
```bash
# クラスタリング無し
> \time node request.js
Done!!

Done!!

Done!!

        3.88 real         0.08 user         0.02 sys

# クラスタリング有り
> \time node request.js
Done!!

Done!!

Done!!

        1.85 real         0.08 user         0.02 sys
```