// WAICにおける、WCAG 2.0関連文書の訳出ガイドライン（案）
// https://github.com/waic/translation_guidelines/blob/master/WAIC-wcag20-trans-guide.md

/*
副詞および連体詞は原則として、漢字とします。
例：余り　必ず　極めて　更に　少し　既に　全て　例えば　常に　特に　再び　全く　最も　専ら　僅かに

ただし、次のような副詞は原則としてかなとします。
例：かなり　ふと　やはり　よほど
*/
const fukushiRentaishi = [
  {
    message: "副詞は漢字で表記します。あまり → 余り",
    expected: "余り",
    tokens: [
      {
        surface_form: "あまり",
        pos: "副詞",
      },
    ],
  },
  {
    message: "副詞は漢字で表記します。かならず → 必ず",
    expected: "必ず",
    tokens: [
      {
        surface_form: "かならず",
        pos: "副詞",
      },
    ],
  },
  {
    message: "副詞は漢字で表記します。きわめて → 極めて",
    expected: "極めて",
    tokens: [
      {
        surface_form: "きわめて",
        pos: "副詞",
      },
    ],
  },
  {
    message: "副詞は漢字で表記します。さらに → 更に",
    expected: "更に",
    tokens: [
      {
        surface_form: "さらに",
        pos: "副詞",
      },
    ],
  },
  {
    message: "副詞は漢字で表記します。すこし → 少し",
    expected: "少し",
    tokens: [
      {
        surface_form: "すこし",
        pos: "副詞",
      },
    ],
  },
  {
    message: "副詞は漢字で表記します。すでに → 既に",
    expected: "既に",
    tokens: [
      {
        surface_form: "すでに",
        pos: "副詞",
      },
    ],
  },
  {
    message: "副詞は漢字で表記します。すべて → 全て",
    expected: "全て",
    tokens: [
      {
        surface_form: "すべて",
        pos: "副詞",
      },
    ],
  },
  {
    message: "副詞は漢字で表記します。たとえば → 例えば",
    expected: "例えば",
    tokens: [
      {
        surface_form: "たとえば",
        pos: "副詞",
      },
    ],
  },
  {
    message: "副詞は漢字で表記します。つねに → 常に",
    expected: "常に",
    tokens: [
      {
        surface_form: "つねに",
        pos: "副詞",
      },
    ],
  },
  {
    message: "副詞は漢字で表記します。とくに → 特に",
    expected: "特に",
    tokens: [
      {
        surface_form: "とくに",
        pos: "副詞",
      },
    ],
  },
  {
    message: "副詞は漢字で表記します。ふたたび → 再び",
    expected: "再び",
    tokens: [
      {
        surface_form: "ふたたび",
        pos: "副詞",
      },
    ],
  },
  {
    message: "副詞は漢字で表記します。まったく → 全く",
    expected: "全く",
    tokens: [
      {
        surface_form: "まったく",
        pos: "副詞",
      },
    ],
  },
  {
    message: "副詞は漢字で表記します。もっとも → 最も",
    expected: "最も",
    tokens: [
      {
        surface_form: "もっとも",
        pos: "副詞",
      },
    ],
  },
  {
    message: "副詞は漢字で表記します。もっぱら → 専ら",
    expected: "専ら",
    tokens: [
      {
        surface_form: "もっぱら",
        pos: "副詞",
      },
    ],
  },
  {
    message: "副詞は漢字で表記します。わずかに → 僅かに",
    expected: "僅かに",
    tokens: [
      {
        surface_form: "わずかに",
        pos: "副詞",
      },
    ],
  },

  // 例外
  {
    message: "「$1」は副詞ですが、かなで表記します。",
    expected: "かなり",
    tokens: [
      {
        surface_form: "可成り",
        pos: "副詞",
        _capture: "$1",
      },
    ],
  },
  {
    message: "「$1」は副詞ですが、かなで表記します。",
    expected: "やはり",
    tokens: [
      {
        surface_form: "矢張り",
        pos: "副詞",
        _capture: "$1",
      },
    ],
  },
  {
    message: "「$1」は副詞ですが、かなで表記します。",
    expected: "よほど",
    tokens: [
      {
        surface_form: "世程",
        pos: "副詞",
        _capture: "$1",
      },
    ],
  },
]

/*
接続詞は、かなとします。
例：おって　かつ　したがって　ただし　また　ゆえに　もしくは

ただし、次の接続詞は、漢字とします。

例：及び　並びに　又は

（「若しくは／もしくは」の表記は、JIS Z 8301 及び常用漢字表では漢字で表記しますが、読みやすさのためWAICでは「もしくは」とひらがなで表記しています。）
*/
const setsuzokushi = [
  {
    message: "接続詞はかなで表記します。追って → おって",
    expected: "おって",
    tokens: [
      {
        surface_form: "追って",
        pos: "接続詞",
      },
    ],
  },
  {
    message: "接続詞はかなで表記します。且つ → かつ",
    expected: "かつ",
    tokens: [
      {
        surface_form: "且つ",
        pos: "接続詞",
      },
    ],
  },
  {
    message: "接続詞はかなで表記します。従って → したがって",
    expected: "したがって",
    tokens: [
      {
        surface_form: "従って",
        pos: "接続詞",
      },
    ],
  },
  {
    message: "接続詞はかなで表記します。但し → ただし",
    expected: "ただし",
    tokens: [
      {
        surface_form: "但し",
        pos: "接続詞",
      },
    ],
  },
  {
    message: "接続詞はかなで表記します。又 → また",
    expected: "また",
    tokens: [
      {
        surface_form: "又",
        pos: "接続詞",
      },
    ],
  },
  {
    message: "接続詞はかなで表記します。故に → ゆえに",
    expected: "ゆえに",
    tokens: [
      {
        surface_form: "故に",
        pos: "接続詞",
      },
    ],
  },
  {
    message: "接続詞はかなで表記します。若しくは → もしくは",
    expected: "もしくは",
    tokens: [
      {
        surface_form: "若しくは",
        pos: "接続詞",
      },
    ],
  },

  // 例外
  {
    message: "「$1」は接続詞ですが、漢字で表記します。",
    expected: "及び",
    tokens: [
      {
        surface_form: "および",
        pos: "接続詞",
        _capture: "$1",
      },
    ],
  },
  {
    message: "「$1」は接続詞ですが、漢字で表記します。",
    expected: "並びに",
    tokens: [
      {
        surface_form: "ならびに",
        pos: "接続詞",
        _capture: "$1",
      },
    ],
  },
  {
    message: "「$1」は接続詞ですが、漢字で表記します。",
    expected: "又は",
    tokens: [
      {
        surface_form: "または",
        pos: "接続詞",
        _capture: "$1",
      },
    ],
  },
]

/* 
「進め方」「考え方」など、「〜〜し方」は漢字で統一
用語集由来
https://docs.google.com/spreadsheets/d/1V8wX-pxAO-zuYwTSvTSuZ_FtnV47su6Tyy2vM5GEOLw/edit?gid=0#gid=0&range=5:5
*/
const shikata = [
  {
    message: "「$1$2」の「方」は漢字で表記します。(手動で修正してください)",
    extensions: {
      offset: 1, // 置換をスタートするtokenの添字
    },
    tokens: [
      {
        pos: "名詞",
        pos_detail_1: "一般",
        _capture: "$1",
      },
      {
        surface_form: "かた",
        pos: "名詞",
        pos_detail_1: "接尾",
        pos_detail_2: "一般",
        pos_detail_3: "*",
        conjugated_type: "*",
        conjugated_form: "*",
        basic_form: "かた",
        reading: "カタ",
        pronunciation: "カタ",
        _capture: "$2",
      },
    ],
  },
]

/* 
デフ → ろう
用語集由来
*/
const deaf = [
  {
    message: "デフ → ろう",
    expected: "ろう",
    tokens: [
      {
        surface_form: "デフ",
        pos: "名詞",
        _capture: "$1",
      },
    ],
  },
]

/*
AT → 支援技術
用語集由来
*/
const at = [
  {
    message: "AT → 支援技術",
    expected: "支援技術",
    tokens: [
      {
        surface_form: "AT",
        pos: "名詞",
        _capture: "$1",
      },
    ],
  },
]

const iroiro = require("./iroiro.cjs")

module.exports = [].concat(
  fukushiRentaishi,
  setsuzokushi,
  iroiro,
  shikata,
  deaf,
  at
)
