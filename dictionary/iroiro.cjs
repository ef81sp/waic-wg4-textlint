/*
次のような語句を、（）の中に示した例のように用いるときは、かなで書きます。
もの（正しいものと認める。） → むずい
わけ（賛成するわけにはいかない。） → むずい
～てあげる（図書を貸してあげる。）
～ていく（負担が増えていく。） → textlint-rule-ja-hiragana-hojodoushi
～ていただく（報告していただく。） → textlint-rule-ja-hiragana-hojodoushi
～ておく（通知しておく。）
～てください（問題点を話してください。） → textlint-rule-ja-hiragana-hojodoushi
～てくる（寒くなってくる。） → textlint-rule-ja-hiragana-hojodoushi
～てしまう（書いてしまう。）
～てみる（見てみる。）
～てよい（連絡してよい。）
～にすぎない（調査だけにすぎない。）
～について（これについて考慮する。）
*/

// ある（その点に問題がある。）
const aru = [
  {
    message: "動詞の「$1」はかなで表記します。",
    expected: "ある", // 終止・連体
    tokens: [
      {
        surface_form: "有る",
        pos: "動詞",
        _capture: "$1",
      },
    ],
  },
  {
    message: "動詞の「$1」はかなで表記します。",
    expected: "あり", // 連用
    tokens: [
      {
        surface_form: "有り",
        pos: "動詞",
        _capture: "$1",
      },
    ],
  },
  {
    message: "動詞の「$1」はかなで表記します。",
    expected: "あれ", // 仮定・命令
    tokens: [
      {
        surface_form: "有れ",
        pos: "動詞",
        _capture: "$1",
      },
    ],
  },
]

// いる（ここに関係者がいる。）
const iru = [
  {
    message: "動詞の「$1」はかなで表記します。",
    expected: "い", // 未然・連用
    tokens: [
      {
        surface_form: "居",
        pos: "動詞",
        _capture: "$1",
      },
    ],
  },
  {
    message: "動詞の「$1」はかなで表記します。",
    expected: "いる", // 終止・連体
    tokens: [
      {
        surface_form: "居る",
        pos: "動詞",
        _capture: "$1",
      },
    ],
  },
  {
    message: "動詞の「$1」はかなで表記します。",
    expected: "いれ", // 仮定
    tokens: [
      {
        surface_form: "居れ",
        pos: "動詞",
        _capture: "$1",
      },
    ],
  },
  {
    message: "動詞の「$1」はかなで表記します。",
    expected: "いろ", // 命令
    tokens: [
      {
        surface_form: "居ろ",
        pos: "動詞",
        _capture: "$1",
      },
    ],
  },
]

// こと（許可しないことがある。）
const koto = [
  {
    message: "非自立名詞の「$1」はかなで表記します。",
    expected: "こと",
    tokens: [
      {
        surface_form: "事",
        pos: "名詞",
        pos_detail_1: "非自立",
        pos_detail_2: "一般",
        pos_detail_3: "*",
        conjugated_type: "*",
        conjugated_form: "*",
        basic_form: "事",
        reading: "コト",
        pronunciation: "コト",
        _capture: "$1",
      },
    ],
  },
]

// できる（だれでも利用ができる。）
const dekiru = [
  {
    message: "動詞の「$1」はかなで表記します。",
    expected: "でき",
    tokens: [
      {
        surface_form: "出来", // 未然・連用
        pos: "動詞",
        _capture: "$1",
      },
    ],
  },
  {
    message: "動詞の「$1」はかなで表記します。",
    expected: "できる",
    tokens: [
      {
        surface_form: "出来る", // 終止・連体
        pos: "動詞",
        _capture: "$1",
      },
    ],
  },
  {
    message: "動詞の「$1」はかなで表記します。",
    expected: "できれ", // 仮定
    tokens: [
      {
        surface_form: "出来れ",
        pos: "動詞",
        _capture: "$1",
      },
    ],
  },
  {
    message: "動詞の「$1」はかなで表記します。",
    expected: "できろ", // 命令
    tokens: [
      {
        surface_form: "出来ろ",
        pos: "動詞",
        _capture: "$1",
      },
    ],
  },
]

// とおり（次のとおりである。）
const toori = [
  {
    // 非自立名詞だが、形態素解析では「通り」が一般名詞として解析されてしまう
    // 「次の通りを右に曲がります」とかも引っかかるが、翻訳文では出てこないだろうから許容。
    message: "名詞の「$1」はかなで表記します。",
    expected: "とおり",
    tokens: [
      {
        surface_form: "通り",
        pos: "名詞",
        pos_detail_1: "一般",
        pos_detail_2: "*",
        pos_detail_3: "*",
        conjugated_type: "*",
        conjugated_form: "*",
        basic_form: "通り",
        reading: "トオリ",
        pronunciation: "トーリ",
        _capture: "$1",
      },
    ],
  },
]

// とき（事故のときは連絡する。）
const toki = [
  {
    message: "非自立名詞の「$1」はかなで表記します。",
    expected: "とき",
    tokens: [
      {
        surface_form: "時",
        pos: "名詞",
        pos_detail_1: "非自立",
        pos_detail_2: "副詞可能",
        pos_detail_3: "*",
        conjugated_type: "*",
        conjugated_form: "*",
        basic_form: "時",
        reading: "トキ",
        pronunciation: "トキ",
        _capture: "$1",
      },
    ],
  },
]

// ところ（現在のところ差し支えない。） 非自立名詞
const tokoro = [
  {
    message: "非自立名詞の「$1」はかなで表記します。",
    expected: "ところ",
    tokens: [
      {
        surface_form: "所",
        pos: "名詞",
        pos_detail_1: "非自立",
        pos_detail_2: "副詞可能",
        pos_detail_3: "*",
        conjugated_type: "*",
        conjugated_form: "*",
        basic_form: "所",
        reading: "トコロ",
        pronunciation: "トコロ",
        _capture: "$1",
      },
    ],
  },
]

// とも（説明するとともに意見を聞く。）
// 「同時」はひらがな。「一緒」は漢字。
// const tomo = [
//   {
//     message: "同時を表す「$1」はかなで表記します。",
//     expected: "とともに",
//     tokens: [
//       {
//         surface_form: "と共に",
//         pos: "助詞",
//         pos_detail_1: "格助詞",
//         pos_detail_2: "連語",
//         pos_detail_3: "*",
//         conjugated_type: "*",
//         conjugated_form: "*",
//         basic_form: "と共に",
//         reading: "トトモニ",
//         pronunciation: "トトモニ",
//         _capture: "$1",
//       },
//     ],
//   },
// ]

// ない（欠点がない。）
const nai = [
  {
    message: "形容詞の「$1」はかなで表記します。",
    expected: "ない",
    tokens: [
      {
        surface_form: "無い", // 連用・終止・連体
        pos: "形容詞",
        _capture: "$1",
      },
    ],
  },
  {
    message: "形容詞の「$1」はかなで表記します。",
    expected: "なけれ",
    tokens: [
      {
        surface_form: "無けれ", // 仮定
        pos: "形容詞",
        _capture: "$1",
      },
    ],
  },
]

// なる（合計すると１万円になる。）
// const naru = [

// ]

// ほか（そのほか～，特別の場合を除くほか～）
// const hoka = [
//   {
//     message: "「$1」はひらがなで表記します。",
//     expected: "ほか",
//     tokens: [
//       {
//         surface_form: "他",
//         pos: "名詞",
//         pos_detail_1: "一般",
//         pos_detail_2: "*",
//         pos_detail_3: "*",
//         conjugated_type: "*",
//         conjugated_form: "*",
//         basic_form: "他",
//         reading: "ホカ",
//         pronunciation: "ホカ",
//         _capture: "$1",
//       },
//     ],
//   },
// ]

// ゆえ（一部の反対のゆえにはかどらない。）
const yue = [
  {
    message: "「$1」はひらがなで表記します。",
    expected: "ゆえに",
    tokens: [
      {
        surface_form: "故に",
        pos: "接続詞",
        pos_detail_1: "*",
        pos_detail_2: "*",
        pos_detail_3: "*",
        conjugated_type: "*",
        conjugated_form: "*",
        basic_form: "故に",
        reading: "ユエニ",
        pronunciation: "ユエニ",
      },
    ],
  },
]

// ～かもしれない（間違いかもしれない。）
const kamoshirenai = [
  {
    message: "「かもしれない」はかなで表記します。",
    expected: "かもしれ",
    tokens: [
      {
        surface_form: "かも",
        pos: "助詞",
        pos_detail_1: "副助詞",
        pos_detail_2: "*",
        pos_detail_3: "*",
        conjugated_type: "*",
        conjugated_form: "*",
        basic_form: "かも",
        reading: "カモ",
        pronunciation: "カモ",
      },
      {
        surface_form: "知れ",
        pos: "動詞",
        pos_detail_1: "自立",
        pos_detail_2: "*",
        pos_detail_3: "*",
        conjugated_type: "一段",
        conjugated_form: "未然形",
        basic_form: "知れる",
        reading: "シレ",
        pronunciation: "シレ",
      },
    ],
  },
]

const iroiro = [].concat(
  aru,
  iru,
  koto,
  dekiru,
  toori,
  toki,
  tokoro,
  nai,
  yue,
  kamoshirenai
)

module.exports = iroiro
