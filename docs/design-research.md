# GameBar デザイン調査メモ

## v4（2026-10-31）：ゲーム会社の公式サイトを参考に作り直し

ユーザーから「もっとAI臭くなった」と言われた。手描き風のSVG、黒板、ポラロイド、裏返るコースターといった「作り込んだ演出」が、かえってAIっぽく見えていた。そこで実在のゲーム会社の公式サイトを参考に作り直した。

### 調べたサイト
2026-10-31に Playwright（1280×800、ja-JP）で表示し、スクリーンショットとナビの文言を確認した。スクリーンショットは他社の著作物なので公開リポジトリには入れず、/workspace/refs にだけ置いている。
- 表示できた：nintendo.co.jp, sie.com/jp, capcom.co.jp, jp.square-enix.com, bandainamcoent.co.jp, atlus.co.jp, gamefreak.co.jp, fromsoftware.jp, cdprojekt.com, valvesoftware.com, ubisoft.com
- ボット対策で表示できなかった：sega.jp（セキュリティ検証の画面）、cygames.co.jp（Access Denied）、rockstargames.com（中身が取れず）、riotgames.com（タイムアウト）

### 共通していたこと
1. **上部に固定のグローバルナビ。** 左にロゴ、右に短い項目が並ぶ（例：ATLUS「Top / News / Titles / Pick Up」、GAME FREAK「VISION / WORKS / MESSAGE / COMPANY / TOPICS / RECRUIT」、SIE「ニュースルーム / 採用情報 / 会社情報」）。スマホではハンバーガーメニュー（FromSoftware、GAME FREAK）。
2. **大きなキービジュアル。** 実際のゲーム画像やキーアートを画面幅いっぱいに出し、カルーセルで切り替える（任天堂、アトラス、FromSoftware、カプコン）。装飾のイラストは使っていない。
3. **日付つきのニュース一覧。** 日付、カテゴリのラベル、1行の見出し（アトラス「News」、GAME FREAK「TOPICS」）。
4. **タイトル一覧はグリッド。** 16:9のサムネイル、ジャンル、タイトル名（スクウェア・エニックス、バンダイナムコ）。
5. **文字は控えめ。** ゴシック体（ヒラギノ角ゴ／游ゴシック／Noto系）、英語の大見出しに日本語の小見出しを添える、字間を広めにとる。
6. **会社情報・ポリシーはフッターに。** 会社概要、プライバシーポリシー、サイトポリシー（FromSoftware、Valve、GAME FREAK）。
7. **装飾はほとんどない。** マスコットの落書き、絵文字、傾いたカード、手書きフォントはどのサイトにもなかった。主役はゲーム画像そのもの。

### 取り入れたこと
- 固定ヘッダー（ロゴ／ニュース／ゲーム／会社情報／X）。スマホではハンバーガーメニュー。
- 実際のゲーム画像（各ゲームのリポジトリ public/ にあるキーアート・背景）を使ったKVカルーセル。6秒ごとに切り替わり、ドットで操作でき、動きを減らす設定のときは自動で切り替わらない。画像には「ゲーム内画像」と表示する。岐路の十年の画像には、ゲーム内の表記に合わせて「AI再現イメージ」と付ける。
- NEWS（journal.json の実際の日付のみ）、GAMES のグリッド（games.json）、ABOUT、会社情報の表、フッター。
- 配色は黒に近いグレーと、アクセントにアンバーを1色だけ。「バー」らしさは名前と暗い配色で控えめに残すだけにした。
- 削除したもの：手描きのカウンター画、黒板、ポラロイド、コースター、Klee One／Yomogi。

## 過去版の記録
- v2：明るい紙の色、手書き風のフォント。「シンプルすぎる」と言われた。
- v3：手描き風SVGの情景を追加。「もっとAI臭くなった」と言われた。
- 参考にした文献（AIっぽく見えるデザインの兆候）：https://claude.com/blog/improving-frontend-design-through-skills / https://illos.dev/guides/vibe-coded-websites / https://github.com/hankimis/ai-design-tells
