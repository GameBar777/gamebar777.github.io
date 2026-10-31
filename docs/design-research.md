# GameBar デザイン調査メモ（2026-10-31）

ユーザーからのフィードバック「いかにもAIで作りました感」を受けて調べた。

## 「AIっぽい」と感じられる理由
- モデルは何も指定されないと、学習データで一番よく見るデザインに寄っていく（distributional convergence）。たとえば紫系のグラデーション、Inter/システムフォント、同じ形のカードが3つ並ぶ、全部同じ角丸と淡い影、左右対称のヒーロー、何にでも当てはまる見出し。
  - Anthropic「Improving frontend design through Skills」 https://claude.com/blog/improving-frontend-design-through-skills
  - prg.sh「Why Your AI Keeps Building the Same Purple Gradient Website」 https://prg.sh/ramblings/Why-Your-AI-Keeps-Building-the-Same-Purple-Gradient-Website
  - illos.dev「Why vibe-coded websites look the same」 https://illos.dev/guides/vibe-coded-websites
  - IOV Studio「The Tells」（27個の"AIっぽさ"の兆候の分類）https://labs.iovstudio.kr/papers/ai-design-tells.pdf / https://github.com/hankimis/ai-design-tells
- 一つの要素だけで決まるわけではない。デフォルトの選択が「まとめて」出てきて、誰かが決めた形跡が見えないときにAIっぽく見える（ai-design-tells の craft-credit の考え方）。
- 旧GameBarで当てはまっていたもの：暗い放射グラデーション、ネオンの発光、同じ形のカード、中央寄せのヒーロー、どこにでもありそうなキャッチコピー。

## 人の手で作ったと感じられるサイトの特徴（観察）
- itch.io の個人ゲーム開発者のページ：作者が一人称で書く、作った日付や更新の記録が正直に残っている、レイアウトが少し崩れている、手描きの素材。
- 日本の個人サイト・ZINE：日記や更新履歴、管理人のひとこと、紙のような質感、手書き風フォント、少しの冗談。
- 喫茶店やバーの手書きメニュー：黒板の「本日のおすすめ」、ちょっと傾いた紙、チョークのかすれ、店主のコメント。

## 採用した方針
- 明るく温かい紙の色（生成り・クラフト紙）に、焦げ茶と赤の差し色。ネオンと発光は使わない。
- フォント（いずれも SIL Open Font License 1.1 で商用利用可）：Klee One（見出し・手書き感）、Zen Maru Gothic（本文）、Yomogi（チョーク文字）。
  - https://github.com/google/fonts/blob/main/ofl/kleeone/OFL.txt
  - https://github.com/google/fonts/blob/main/ofl/zenmarugothic/OFL.txt
  - https://github.com/google/fonts/blob/main/ofl/yomogi/OFL.txt
- SVGの落書き（グラス、矢印、波線）は自前で手打ちしたパス。AI画像は使っていない。
- カードの傾き・余白・テープの位置を1枚ずつ変える。
- 文章は店主（マスター）の一人称。具体的に書き、少しだけユーモアを入れる。誇張・架空のレビュー・プレイ数は載せない。
- 日誌（更新履歴）は実際の日付だけを書く。

## v3（2026-10-31）
- 「シンプルすぎる」との声を受け、手描き風SVGのカウンター情景、ポラロイド風サムネ、裏返るコースター（店主のひとこと）、黒板、ショップカード風フッターを追加。AI画像は不使用（SVG/CSSのみ）。アニメーションは prefers-reduced-motion で停止。
