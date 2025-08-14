import { defineComponent as ce, mergeModels as K, shallowRef as R, useModel as pe, watch as w, nextTick as H, reactive as fe, computed as k, onMounted as me, resolveDirective as he, openBlock as m, createElementBlock as h, normalizeClass as v, withDirectives as z, withKeys as x, createElementVNode as D, unref as U, createCommentVNode as S, toDisplayString as P, renderSlot as F, withModifiers as ye, vModelText as ge, Fragment as be, renderList as ve, vModelDynamic as Ce } from "vue";
import { parsePhoneNumberFromString as j } from "libphonenumber-js";
const we = [
  [
    "Afghanistan (‫افغانستان‬‎)",
    "af",
    "93"
  ],
  [
    "Albania (Shqipëri)",
    "al",
    "355"
  ],
  [
    "Algeria (‫الجزائر‬‎)",
    "dz",
    "213"
  ],
  [
    "American Samoa",
    "as",
    "1",
    5,
    ["684"]
  ],
  [
    "Andorra",
    "ad",
    "376"
  ],
  [
    "Angola",
    "ao",
    "244"
  ],
  [
    "Anguilla",
    "ai",
    "1",
    6,
    ["264"]
  ],
  [
    "Antigua and Barbuda",
    "ag",
    "1",
    7,
    ["268"]
  ],
  [
    "Argentina",
    "ar",
    "54"
  ],
  [
    "Armenia (Հայաստան)",
    "am",
    "374"
  ],
  [
    "Aruba",
    "aw",
    "297"
  ],
  [
    "Ascension Island",
    "ac",
    "247"
  ],
  [
    "Australia",
    "au",
    "61",
    0
  ],
  [
    "Austria (Österreich)",
    "at",
    "43"
  ],
  [
    "Azerbaijan (Azərbaycan)",
    "az",
    "994"
  ],
  [
    "Bahamas",
    "bs",
    "1",
    8,
    ["242"]
  ],
  [
    "Bahrain (‫البحرين‬‎)",
    "bh",
    "973"
  ],
  [
    "Bangladesh (বাংলাদেশ)",
    "bd",
    "880"
  ],
  [
    "Barbados",
    "bb",
    "1",
    9,
    ["246"]
  ],
  [
    "Belarus (Беларусь)",
    "by",
    "375"
  ],
  [
    "Belgium (België)",
    "be",
    "32"
  ],
  [
    "Belize",
    "bz",
    "501"
  ],
  [
    "Benin (Bénin)",
    "bj",
    "229"
  ],
  [
    "Bermuda",
    "bm",
    "1",
    10,
    ["441"]
  ],
  [
    "Bhutan (འབྲུག)",
    "bt",
    "975"
  ],
  [
    "Bolivia",
    "bo",
    "591"
  ],
  [
    "Bosnia and Herzegovina (Босна и Херцеговина)",
    "ba",
    "387"
  ],
  [
    "Botswana",
    "bw",
    "267"
  ],
  [
    "Brazil (Brasil)",
    "br",
    "55"
  ],
  [
    "British Indian Ocean Territory",
    "io",
    "246"
  ],
  [
    "British Virgin Islands",
    "vg",
    "1",
    11,
    ["284"]
  ],
  [
    "Brunei",
    "bn",
    "673"
  ],
  [
    "Bulgaria (България)",
    "bg",
    "359"
  ],
  [
    "Burkina Faso",
    "bf",
    "226"
  ],
  [
    "Burundi (Uburundi)",
    "bi",
    "257"
  ],
  [
    "Cambodia (កម្ពុជា)",
    "kh",
    "855"
  ],
  [
    "Cameroon (Cameroun)",
    "cm",
    "237"
  ],
  [
    "Canada",
    "ca",
    "1",
    1,
    ["204", "226", "236", "249", "250", "263", "289", "306", "343", "354", "365", "367", "368", "382", "387", "403", "416", "418", "428", "431", "437", "438", "450", "584", "468", "474", "506", "514", "519", "548", "579", "581", "584", "587", "604", "613", "639", "647", "672", "683", "705", "709", "742", "753", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]
  ],
  [
    "Cape Verde (Kabu Verdi)",
    "cv",
    "238"
  ],
  [
    "Caribbean Netherlands",
    "bq",
    "599",
    1,
    ["3", "4", "7"]
  ],
  [
    "Cayman Islands",
    "ky",
    "1",
    12,
    ["345"]
  ],
  [
    "Central African Republic (République centrafricaine)",
    "cf",
    "236"
  ],
  [
    "Chad (Tchad)",
    "td",
    "235"
  ],
  [
    "Chile",
    "cl",
    "56"
  ],
  [
    "China (中国)",
    "cn",
    "86"
  ],
  [
    "Christmas Island",
    "cx",
    "61",
    2,
    ["89164"]
  ],
  [
    "Cocos (Keeling) Islands",
    "cc",
    "61",
    1,
    ["89162"]
  ],
  [
    "Colombia",
    "co",
    "57"
  ],
  [
    "Comoros (‫جزر القمر‬‎)",
    "km",
    "269"
  ],
  [
    "Congo (DRC) (République démocratique du Congo)",
    "cd",
    "243"
  ],
  [
    "Congo (Republic) (Congo-Brazzaville)",
    "cg",
    "242"
  ],
  [
    "Cook Islands",
    "ck",
    "682"
  ],
  [
    "Costa Rica",
    "cr",
    "506"
  ],
  [
    "Côte d’Ivoire",
    "ci",
    "225"
  ],
  [
    "Croatia (Hrvatska)",
    "hr",
    "385"
  ],
  [
    "Cuba",
    "cu",
    "53"
  ],
  [
    "Curaçao",
    "cw",
    "599",
    0
  ],
  [
    "Cyprus (Κύπρος)",
    "cy",
    "357"
  ],
  [
    "Czech Republic (Česká republika)",
    "cz",
    "420"
  ],
  [
    "Denmark (Danmark)",
    "dk",
    "45"
  ],
  [
    "Djibouti",
    "dj",
    "253"
  ],
  [
    "Dominica",
    "dm",
    "1",
    13,
    ["767"]
  ],
  [
    "Dominican Republic (República Dominicana)",
    "do",
    "1",
    2,
    ["809", "829", "849"]
  ],
  [
    "Ecuador",
    "ec",
    "593"
  ],
  [
    "Egypt (‫مصر‬‎)",
    "eg",
    "20"
  ],
  [
    "El Salvador",
    "sv",
    "503"
  ],
  [
    "Equatorial Guinea (Guinea Ecuatorial)",
    "gq",
    "240"
  ],
  [
    "Eritrea",
    "er",
    "291"
  ],
  [
    "Estonia (Eesti)",
    "ee",
    "372"
  ],
  [
    "Eswatini",
    "sz",
    "268"
  ],
  [
    "Ethiopia",
    "et",
    "251"
  ],
  [
    "Falkland Islands (Islas Malvinas)",
    "fk",
    "500"
  ],
  [
    "Faroe Islands (Føroyar)",
    "fo",
    "298"
  ],
  [
    "Fiji",
    "fj",
    "679"
  ],
  [
    "Finland (Suomi)",
    "fi",
    "358",
    0
  ],
  [
    "France",
    "fr",
    "33"
  ],
  [
    "French Guiana (Guyane française)",
    "gf",
    "594"
  ],
  [
    "French Polynesia (Polynésie française)",
    "pf",
    "689"
  ],
  [
    "Gabon",
    "ga",
    "241"
  ],
  [
    "Gambia",
    "gm",
    "220"
  ],
  [
    "Georgia (საქართველო)",
    "ge",
    "995"
  ],
  [
    "Germany (Deutschland)",
    "de",
    "49"
  ],
  [
    "Ghana (Gaana)",
    "gh",
    "233"
  ],
  [
    "Gibraltar",
    "gi",
    "350"
  ],
  [
    "Greece (Ελλάδα)",
    "gr",
    "30"
  ],
  [
    "Greenland (Kalaallit Nunaat)",
    "gl",
    "299"
  ],
  [
    "Grenada",
    "gd",
    "1",
    14,
    ["473"]
  ],
  [
    "Guadeloupe",
    "gp",
    "590",
    0
  ],
  [
    "Guam",
    "gu",
    "1",
    15,
    ["671"]
  ],
  [
    "Guatemala",
    "gt",
    "502"
  ],
  [
    "Guernsey",
    "gg",
    "44",
    1,
    ["1481", "7781", "7839", "7911"]
  ],
  [
    "Guinea (Guinée)",
    "gn",
    "224"
  ],
  [
    "Guinea-Bissau (Guiné Bissau)",
    "gw",
    "245"
  ],
  [
    "Guyana",
    "gy",
    "592"
  ],
  [
    "Haiti",
    "ht",
    "509"
  ],
  [
    "Honduras",
    "hn",
    "504"
  ],
  [
    "Hong Kong (香港)",
    "hk",
    "852"
  ],
  [
    "Hungary (Magyarország)",
    "hu",
    "36"
  ],
  [
    "Iceland (Ísland)",
    "is",
    "354"
  ],
  [
    "India (भारत)",
    "in",
    "91"
  ],
  [
    "Indonesia",
    "id",
    "62"
  ],
  [
    "Iran (‫ایران‬‎)",
    "ir",
    "98"
  ],
  [
    "Iraq (‫العراق‬‎)",
    "iq",
    "964"
  ],
  [
    "Ireland",
    "ie",
    "353"
  ],
  [
    "Isle of Man",
    "im",
    "44",
    2,
    ["1624", "74576", "7524", "7924", "7624"]
  ],
  [
    "Israel (‫ישראל‬‎)",
    "il",
    "972"
  ],
  [
    "Italy (Italia)",
    "it",
    "39",
    0
  ],
  [
    "Jamaica",
    "jm",
    "1",
    4,
    ["876", "658"]
  ],
  [
    "Japan (日本)",
    "jp",
    "81"
  ],
  [
    "Jersey",
    "je",
    "44",
    3,
    ["1534", "7509", "7700", "7797", "7829", "7937"]
  ],
  [
    "Jordan (‫الأردن‬‎)",
    "jo",
    "962"
  ],
  [
    "Kazakhstan (Казахстан)",
    "kz",
    "7",
    1,
    ["33", "7"]
  ],
  [
    "Kenya",
    "ke",
    "254"
  ],
  [
    "Kiribati",
    "ki",
    "686"
  ],
  [
    "Kosovo",
    "xk",
    "383"
  ],
  [
    "Kuwait (‫الكويت‬‎)",
    "kw",
    "965"
  ],
  [
    "Kyrgyzstan (Кыргызстан)",
    "kg",
    "996"
  ],
  [
    "Laos (ລາວ)",
    "la",
    "856"
  ],
  [
    "Latvia (Latvija)",
    "lv",
    "371"
  ],
  [
    "Lebanon (‫لبنان‬‎)",
    "lb",
    "961"
  ],
  [
    "Lesotho",
    "ls",
    "266"
  ],
  [
    "Liberia",
    "lr",
    "231"
  ],
  [
    "Libya (‫ليبيا‬‎)",
    "ly",
    "218"
  ],
  [
    "Liechtenstein",
    "li",
    "423"
  ],
  [
    "Lithuania (Lietuva)",
    "lt",
    "370"
  ],
  [
    "Luxembourg",
    "lu",
    "352"
  ],
  [
    "Macau (澳門)",
    "mo",
    "853"
  ],
  [
    "Madagascar (Madagasikara)",
    "mg",
    "261"
  ],
  [
    "Malawi",
    "mw",
    "265"
  ],
  [
    "Malaysia",
    "my",
    "60"
  ],
  [
    "Maldives",
    "mv",
    "960"
  ],
  [
    "Mali",
    "ml",
    "223"
  ],
  [
    "Malta",
    "mt",
    "356"
  ],
  [
    "Marshall Islands",
    "mh",
    "692"
  ],
  [
    "Martinique",
    "mq",
    "596"
  ],
  [
    "Mauritania (‫موريتانيا‬‎)",
    "mr",
    "222"
  ],
  [
    "Mauritius (Moris)",
    "mu",
    "230"
  ],
  [
    "Mayotte",
    "yt",
    "262",
    1,
    ["269", "639"]
  ],
  [
    "Mexico (México)",
    "mx",
    "52"
  ],
  [
    "Micronesia",
    "fm",
    "691"
  ],
  [
    "Moldova (Republica Moldova)",
    "md",
    "373"
  ],
  [
    "Monaco",
    "mc",
    "377"
  ],
  [
    "Mongolia (Монгол)",
    "mn",
    "976"
  ],
  [
    "Montenegro (Crna Gora)",
    "me",
    "382"
  ],
  [
    "Montserrat",
    "ms",
    "1",
    16,
    ["664"]
  ],
  [
    "Morocco (‫المغرب‬‎)",
    "ma",
    "212",
    0
  ],
  [
    "Mozambique (Moçambique)",
    "mz",
    "258"
  ],
  [
    "Myanmar (Burma) (မြန်မာ)",
    "mm",
    "95"
  ],
  [
    "Namibia (Namibië)",
    "na",
    "264"
  ],
  [
    "Nauru",
    "nr",
    "674"
  ],
  [
    "Nepal (नेपाल)",
    "np",
    "977"
  ],
  [
    "Netherlands (Nederland)",
    "nl",
    "31"
  ],
  [
    "New Caledonia (Nouvelle-Calédonie)",
    "nc",
    "687"
  ],
  [
    "New Zealand",
    "nz",
    "64"
  ],
  [
    "Nicaragua",
    "ni",
    "505"
  ],
  [
    "Niger (Nijar)",
    "ne",
    "227"
  ],
  [
    "Nigeria",
    "ng",
    "234"
  ],
  [
    "Niue",
    "nu",
    "683"
  ],
  [
    "Norfolk Island",
    "nf",
    "672"
  ],
  [
    "North Korea (조선 민주주의 인민 공화국)",
    "kp",
    "850"
  ],
  [
    "North Macedonia (Северна Македонија)",
    "mk",
    "389"
  ],
  [
    "Northern Mariana Islands",
    "mp",
    "1",
    17,
    ["670"]
  ],
  [
    "Norway (Norge)",
    "no",
    "47",
    0
  ],
  [
    "Oman (‫عُمان‬‎)",
    "om",
    "968"
  ],
  [
    "Pakistan (‫پاکستان‬‎)",
    "pk",
    "92"
  ],
  [
    "Palau",
    "pw",
    "680"
  ],
  [
    "Palestine (‫فلسطين‬‎)",
    "ps",
    "970"
  ],
  [
    "Panama (Panamá)",
    "pa",
    "507"
  ],
  [
    "Papua New Guinea",
    "pg",
    "675"
  ],
  [
    "Paraguay",
    "py",
    "595"
  ],
  [
    "Peru (Perú)",
    "pe",
    "51"
  ],
  [
    "Philippines",
    "ph",
    "63"
  ],
  [
    "Poland (Polska)",
    "pl",
    "48"
  ],
  [
    "Portugal",
    "pt",
    "351"
  ],
  [
    "Puerto Rico",
    "pr",
    "1",
    3,
    ["787", "939"]
  ],
  [
    "Qatar (‫قطر‬‎)",
    "qa",
    "974"
  ],
  [
    "Réunion (La Réunion)",
    "re",
    "262",
    0
  ],
  [
    "Romania (România)",
    "ro",
    "40"
  ],
  [
    "Russia (Россия)",
    "ru",
    "7",
    0
  ],
  [
    "Rwanda",
    "rw",
    "250"
  ],
  [
    "Saint Barthélemy",
    "bl",
    "590",
    1
  ],
  [
    "Saint Helena",
    "sh",
    "290"
  ],
  [
    "Saint Kitts and Nevis",
    "kn",
    "1",
    18,
    ["869"]
  ],
  [
    "Saint Lucia",
    "lc",
    "1",
    19,
    ["758"]
  ],
  [
    "Saint Martin (Saint-Martin (partie française))",
    "mf",
    "590",
    2
  ],
  [
    "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)",
    "pm",
    "508"
  ],
  [
    "Saint Vincent and the Grenadines",
    "vc",
    "1",
    20,
    ["784"]
  ],
  [
    "Samoa",
    "ws",
    "685"
  ],
  [
    "San Marino",
    "sm",
    "378"
  ],
  [
    "São Tomé and Príncipe (São Tomé e Príncipe)",
    "st",
    "239"
  ],
  [
    "Saudi Arabia (‫المملكة العربية السعودية‬‎)",
    "sa",
    "966"
  ],
  [
    "Senegal (Sénégal)",
    "sn",
    "221"
  ],
  [
    "Serbia (Србија)",
    "rs",
    "381"
  ],
  [
    "Seychelles",
    "sc",
    "248"
  ],
  [
    "Sierra Leone",
    "sl",
    "232"
  ],
  [
    "Singapore",
    "sg",
    "65"
  ],
  [
    "Sint Maarten",
    "sx",
    "1",
    21,
    ["721"]
  ],
  [
    "Slovakia (Slovensko)",
    "sk",
    "421"
  ],
  [
    "Slovenia (Slovenija)",
    "si",
    "386"
  ],
  [
    "Solomon Islands",
    "sb",
    "677"
  ],
  [
    "Somalia (Soomaaliya)",
    "so",
    "252"
  ],
  [
    "South Africa",
    "za",
    "27"
  ],
  [
    "South Korea (대한민국)",
    "kr",
    "82"
  ],
  [
    "South Sudan (‫جنوب السودان‬‎)",
    "ss",
    "211"
  ],
  [
    "Spain (España)",
    "es",
    "34"
  ],
  [
    "Sri Lanka (ශ්‍රී ලංකාව)",
    "lk",
    "94"
  ],
  [
    "Sudan (‫السودان‬‎)",
    "sd",
    "249"
  ],
  [
    "Suriname",
    "sr",
    "597"
  ],
  [
    "Svalbard and Jan Mayen",
    "sj",
    "47",
    1,
    ["79"]
  ],
  [
    "Sweden (Sverige)",
    "se",
    "46"
  ],
  [
    "Switzerland (Schweiz)",
    "ch",
    "41"
  ],
  [
    "Syria (‫سوريا‬‎)",
    "sy",
    "963"
  ],
  [
    "Taiwan (台灣)",
    "tw",
    "886"
  ],
  [
    "Tajikistan",
    "tj",
    "992"
  ],
  [
    "Tanzania",
    "tz",
    "255"
  ],
  [
    "Thailand (ไทย)",
    "th",
    "66"
  ],
  [
    "Timor-Leste",
    "tl",
    "670"
  ],
  [
    "Togo",
    "tg",
    "228"
  ],
  [
    "Tokelau",
    "tk",
    "690"
  ],
  [
    "Tonga",
    "to",
    "676"
  ],
  [
    "Trinidad and Tobago",
    "tt",
    "1",
    22,
    ["868"]
  ],
  [
    "Tunisia (‫تونس‬‎)",
    "tn",
    "216"
  ],
  [
    "Turkey (Türkiye)",
    "tr",
    "90"
  ],
  [
    "Turkmenistan",
    "tm",
    "993"
  ],
  [
    "Turks and Caicos Islands",
    "tc",
    "1",
    23,
    ["649"]
  ],
  [
    "Tuvalu",
    "tv",
    "688"
  ],
  [
    "U.S. Virgin Islands",
    "vi",
    "1",
    24,
    ["340"]
  ],
  [
    "Uganda",
    "ug",
    "256"
  ],
  [
    "Ukraine (Україна)",
    "ua",
    "380"
  ],
  [
    "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)",
    "ae",
    "971"
  ],
  [
    "United Kingdom",
    "gb",
    "44",
    0
  ],
  [
    "United States",
    "us",
    "1",
    0
  ],
  [
    "Uruguay",
    "uy",
    "598"
  ],
  [
    "Uzbekistan (Oʻzbekiston)",
    "uz",
    "998"
  ],
  [
    "Vanuatu",
    "vu",
    "678"
  ],
  [
    "Vatican City (Città del Vaticano)",
    "va",
    "39",
    1,
    ["06698"]
  ],
  [
    "Venezuela",
    "ve",
    "58"
  ],
  [
    "Vietnam (Việt Nam)",
    "vn",
    "84"
  ],
  [
    "Wallis and Futuna (Wallis-et-Futuna)",
    "wf",
    "681"
  ],
  [
    "Western Sahara (‫الصحراء الغربية‬‎)",
    "eh",
    "212",
    1,
    ["5288", "5289"]
  ],
  [
    "Yemen (‫اليمن‬‎)",
    "ye",
    "967"
  ],
  [
    "Zambia",
    "zm",
    "260"
  ],
  [
    "Zimbabwe",
    "zw",
    "263"
  ],
  [
    "Åland Islands",
    "ax",
    "358",
    1,
    ["18"]
  ]
], Oe = we.map(([t, r, u, l = 0, s = null]) => ({
  name: t,
  iso2: r.toUpperCase(),
  dialCode: u,
  priority: l,
  areaCodes: s
}));
function Se() {
  return fetch("https://ip2c.org/s").then((t) => t.text()).then((t) => {
    const r = (t || "").toString();
    if (!r || r[0] !== "1")
      throw new Error("unable to fetch the country");
    return r.substr(2, 2);
  });
}
function ke(t, r) {
  if (t.setSelectionRange)
    t.focus(), t.setSelectionRange(r, r);
  else if ("createTextRange" in t && typeof t.createTextRange == "function") {
    const u = t.createTextRange();
    u.collapse(!0), u.moveEnd("character", r), u.moveStart("character", r), u.select();
  }
}
const xe = [
  {
    name: "allCountries",
    type: Array,
    default: Oe,
    description: "All countries that are used in <code>libphonenumber-js</code>, can be overridden by this prop",
    inDemo: !1
  },
  {
    name: "autoFormat",
    type: Boolean,
    default: !0,
    description: "Auto update the input to the formatted phone number when it's valid",
    inDemo: !0
  },
  {
    name: "customValidate",
    type: [Boolean, RegExp],
    default: !1,
    description: "Custom validation RegExp for input",
    inDemo: !1
  },
  {
    name: "defaultCountry",
    default: "",
    type: [String, Number],
    description: "Default country (by iso2 or dialCode), will override the country fetched from IP address of user",
    inDemo: !1
  },
  {
    name: "disabled",
    default: !1,
    type: Boolean,
    description: "Disable <code>vue-tel-input</code>, including the input & flag dropdown",
    inDemo: !1
  },
  {
    name: "autoDefaultCountry",
    default: !0,
    type: Boolean,
    description: "To fetch default country based on IP address of user",
    inDemo: !1
  },
  {
    name: "dropdownOptions",
    type: Object,
    description: "Options for dropdown, see below",
    inDemo: !1
  },
  {
    name: "dropdownOptions.disabled",
    default: !1,
    type: Boolean,
    description: "Disable dropdown",
    inDemo: !1
  },
  {
    name: "dropdownOptions.showDialCodeInList",
    default: !0,
    type: Boolean,
    description: "Show dial code in the dropdown list",
    inDemo: !0
  },
  {
    name: "dropdownOptions.showDialCodeInSelection",
    default: !1,
    type: Boolean,
    description: "Show dial code in the dropdown selection",
    inDemo: !0
  },
  {
    name: "dropdownOptions.showFlags",
    default: !0,
    type: Boolean,
    description: "Show flags in the dropdown selection and list",
    inDemo: !0
  },
  {
    name: "dropdownOptions.showSearchBox",
    default: !1,
    type: Boolean,
    description: "Show country search box",
    inDemo: !0
  },
  {
    name: "dropdownOptions.searchBoxPlaceholder",
    default: "",
    type: String,
    description: "Placeholder for the search box",
    inDemo: !1
  },
  {
    name: "dropdownOptions.tabindex",
    default: 0,
    type: Number,
    description: "Native dropdown <code>tabindex</code> attribute",
    inDemo: !1
  },
  {
    name: "ignoredCountries",
    default: [],
    type: Array,
    description: "List of countries will NOT be shown on the dropdown",
    inDemo: !1
  },
  {
    name: "inputOptions",
    type: Object,
    description: "Options for input, see below",
    inDemo: !1
  },
  {
    name: "inputOptions.autocomplete",
    type: String,
    default: "on",
    description: "Native input <code>autocomplete</code> attribute",
    inDemo: !1
  },
  {
    name: "inputOptions.autofocus",
    type: Boolean,
    default: !1,
    description: "Native input <code>autofocus</code> attribute",
    inDemo: !1
  },
  // {
  //   name: 'inputOptions.dynamicPlaceholder',
  //   default: false,
  //   type: Boolean,
  //   description: 'Placeholder as a sample phone number in the current country',
  //   inDemo: false,
  // },
  {
    name: "inputOptions.aria-describedby",
    default: "",
    type: String,
    description: "Native input <code>aria-describedby</code> attribute",
    inDemo: !1
  },
  {
    name: "inputOptions.id",
    default: "",
    type: String,
    description: "Native input <code>id</code> attribute",
    inDemo: !1
  },
  {
    name: "inputOptions.maxlength",
    default: 25,
    type: Number,
    description: "Native input <code>maxlength</code> attribute",
    inDemo: !1
  },
  {
    name: "inputOptions.name",
    default: "telephone",
    type: String,
    description: "Native input <code>name</code> attribute",
    inDemo: !1
  },
  {
    name: "inputOptions.showDialCode",
    default: !1,
    type: Boolean,
    description: "Show dial code in input",
    inDemo: !1
  },
  {
    name: "inputOptions.placeholder",
    default: "Enter a phone number",
    type: String,
    description: "Placeholder for the input",
    inDemo: !1
  },
  {
    name: "inputOptions.readonly",
    default: !1,
    type: Boolean,
    description: "Native input <code>readonly</code> attribute",
    inDemo: !1
  },
  {
    name: "inputOptions.required",
    default: !1,
    type: Boolean,
    description: "Native input <code>required</code> attribute",
    inDemo: !1
  },
  {
    name: "inputOptions.tabindex",
    default: 0,
    type: Number,
    description: "Native input <code>tabindex</code> attribute",
    inDemo: !1
  },
  {
    name: "inputOptions.type",
    default: "tel",
    type: String,
    description: "Native input <code>type</code> attribute",
    inDemo: !1
  },
  {
    name: "inputOptions.styleClasses",
    default: "",
    type: [String, Array, Object],
    description: "Custom classes for the <code>input</code>",
    inDemo: !1
  },
  {
    name: "invalidMsg",
    default: "",
    type: String,
    description: "",
    inDemo: !1
  },
  {
    name: "mode",
    default: "auto",
    type: String,
    description: "Allowed values: <code>'auto'</code> (Default set by phone),  <code>'international'</code> (Format number with the dial code i.e. + 61), <code>'national'</code> (Format number without dial code i.e. 0321232)",
    inDemo: !0,
    options: ["auto", "national", "international"]
  },
  {
    name: "onlyCountries",
    default: [],
    type: Array,
    description: "List of countries will be shown on the dropdown",
    inDemo: !1
  },
  {
    name: "preferredCountries",
    default: [],
    type: Array,
    description: "Preferred countries list, will be on top of the dropdown",
    inDemo: !1
  },
  {
    name: "styleClasses",
    default: "",
    type: [String, Array, Object],
    description: "Custom classes for the wrapper",
    inDemo: !1
  },
  {
    name: "validCharactersOnly",
    default: !1,
    type: Boolean,
    description: "Only allow valid characters in a phone number (will also verify in <code>mounted</code>, so phone number with invalid characters will be shown as an empty string)",
    inDemo: !1
  }
], $ = [...xe].reduce((t, r) => {
  if (r.name.includes(".")) {
    const [u, l] = r.name.split(".");
    t[u] ? Object.assign(t[u], { [l]: r.default }) : Object.assign(t, { [u]: { [l]: r.default } });
  } else
    Object.assign(t, { [r.name]: r.default });
  return t;
}, {}), V = {
  options: { ...$ }
};
function p(t) {
  const r = V.options[t];
  return typeof r > "u" ? V.options[t] : r;
}
function I(t) {
  return t == null ? void 0 : t.toLowerCase();
}
function B(t) {
  return t == null ? void 0 : t.toUpperCase();
}
const De = {
  beforeMount(t, r, u) {
    if (typeof r.value != "function") {
      const l = u.context.name;
      let s = `[Vue-click-outside:] provided expression ${r.expression} is not a function, but has to be`;
      l && (s += `Found in component ${l}`), console.warn(s);
    }
    t.clickOutsideEvent = function(l) {
      const s = l.composedPath ? l.composedPath() : l.path;
      t === l.target || t.contains(l.target) || s.includes(t) || r.value(l, t);
    }, document.body.addEventListener("click", t.clickOutsideEvent);
  },
  unmounted(t) {
    document.body.removeEventListener("click", t.clickOutsideEvent);
  }
}, Ie = ["aria-expanded", "tabindex"], Be = { class: "vti__selection" }, Me = {
  key: 1,
  class: "vti__country-code"
}, Te = { class: "vti__dropdown-arrow" }, Ne = {
  key: 0,
  class: "vti__search_box_container"
}, Pe = ["placeholder"], Ee = ["onClick", "onMousemove", "aria-selected"], Ae = { key: 1 }, Re = ["type", "autocomplete", "autofocus", "disabled", "id", "maxlength", "name", "placeholder", "readonly", "required", "tabindex", "value", "aria-describedby"], ze = /* @__PURE__ */ ce({
  name: "VueTelInput",
  directives: {
    clickOutside: De
  },
  __name: "vue-tel-input",
  props: /* @__PURE__ */ K({
    allCountries: {
      type: Array,
      default: () => p("allCountries")
    },
    autoFormat: {
      type: Boolean,
      default: () => p("autoFormat")
    },
    customValidate: {
      type: [Boolean, RegExp],
      default: () => p("customValidate")
    },
    defaultCountry: {
      // Default country code, ie: 'AU'
      // Will override the current country of user
      type: [String, Number],
      default: () => p("defaultCountry")
    },
    disabled: {
      type: Boolean,
      default: () => p("disabled")
    },
    autoDefaultCountry: {
      type: Boolean,
      default: () => p("autoDefaultCountry")
    },
    dropdownOptions: {
      type: Object,
      default: () => p("dropdownOptions")
    },
    ignoredCountries: {
      type: Array,
      default: () => p("ignoredCountries")
    },
    inputOptions: {
      type: Object,
      default: () => p("inputOptions")
    },
    invalidMsg: {
      type: String,
      default: () => p("invalidMsg")
    },
    mode: {
      type: String,
      default: () => p("mode")
    },
    onlyCountries: {
      type: Array,
      default: () => p("onlyCountries")
    },
    preferredCountries: {
      type: Array,
      default: () => p("preferredCountries")
    },
    validCharactersOnly: {
      type: Boolean,
      default: () => p("validCharactersOnly")
    },
    styleClasses: {
      type: [String, Array, Object],
      default: () => p("styleClasses")
    }
  }, {
    modelValue: { type: String },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ K([
    "blur",
    "close",
    "country-changed",
    "enter",
    "focus",
    "on-input",
    "open",
    "space",
    "validate"
  ], ["update:modelValue"]),
  setup(t, { expose: r, emit: u }) {
    const l = R(), s = R(), g = R(), f = u, a = t, O = pe(t, "modelValue");
    w(O, (e, o) => {
      ee() ? n.phone = e ?? "" : H(() => {
        n.phone = o ?? "", L();
      });
    });
    const n = fe({
      phone: "",
      activeCountryCode: void 0,
      open: !1,
      finishMounted: !1,
      selectedIndex: null,
      typeToFindInput: "",
      typeToFindTimer: void 0,
      dropdownOpenDirection: "below",
      parsedPlaceholder: a.inputOptions.placeholder,
      searchQuery: ""
    });
    w(() => n.open, (e) => {
      e ? (ue(), f("open")) : f("close");
    });
    const M = k(() => a.onlyCountries.length ? a.allCountries.filter(({ iso2: e }) => a.onlyCountries.some((o) => B(o) === e)) : a.ignoredCountries.length ? a.allCountries.filter(
      ({ iso2: e }) => !a.ignoredCountries.includes(B(e)) && !a.ignoredCountries.includes(I(e))
    ) : a.allCountries), E = k(() => T(n.activeCountryCode));
    w(E, (e, o) => {
      if (!e && (o != null && o.iso2)) {
        n.activeCountryCode = o.iso2;
        return;
      }
      e != null && e.iso2 && f("country-changed", e);
    });
    const _ = k(() => {
      var o;
      const e = I(a.mode);
      return e === "auto" ? (o = n.phone) != null && o.startsWith("+") ? "international" : "national" : ["national", "international", "e.164", "rfc3966", "idd"].includes(e) ? e : (console.error('Invalid value of prop "mode"'), "international");
    }), b = k(() => {
      const o = [...J(a.preferredCountries).map((c) => ({ ...c, preferred: !0 })), ...M.value];
      if (!a.dropdownOptions.showSearchBox)
        return o;
      const i = n.searchQuery.toLowerCase().replace(/[~`!@#$%^&*()+={}\[\];:\'\"<>.,\/\\\?-_]/g, "");
      return o.filter(
        (c) => new RegExp(i, "i").test(c.name) || new RegExp(i, "i").test(c.iso2) || new RegExp(i, "i").test(c.dialCode)
      );
    }), y = k(() => {
      var d;
      const e = n.phone.startsWith("+") ? j(n.phone) : j(n.phone, n.activeCountryCode), o = {
        country: e == null ? void 0 : e.country,
        countryCode: e == null ? void 0 : e.country,
        formatted: n.phone,
        valid: e == null ? void 0 : e.isValid(),
        possible: (d = e == null ? void 0 : e.isPossible) == null ? void 0 : d.call(e),
        nationalNumber: e == null ? void 0 : e.nationalNumber
      };
      return o.valid && (o.formatted = e == null ? void 0 : e.format(B(_.value))), e != null && e.country && (a.ignoredCountries.length || a.onlyCountries.length) && !T(e.country) && (o.valid = !1, o.possible = !1, e.country = null), e ? {
        ...o,
        ...e
      } : o;
    });
    w(() => y.value.countryCode, (e) => {
      e && (n.activeCountryCode = e);
    }), w(() => y.value.valid, () => {
      f("validate", y.value);
    }), w(() => y.value.formatted, (e) => {
      !a.autoFormat || a.customValidate || (N(e), H(() => {
        e && !O.value && (n.phone = e);
      }));
    }), w(() => a.inputOptions.placeholder, Q), me(() => {
      O.value && (n.phone = O.value.trim()), X(), W().then(() => {
        var e;
        !n.phone && ((e = a.inputOptions) != null && e.showDialCode) && n.activeCountryCode && (n.phone = `+${n.activeCountryCode}`), f("validate", y.value);
      }).catch(console.error).then(() => {
        n.finishMounted = !0;
      });
    });
    function Q() {
      n.parsedPlaceholder = a.inputOptions.placeholder;
    }
    function W() {
      return new Promise((e) => {
        var d;
        if (((d = n.phone) == null ? void 0 : d[0]) === "+") {
          e();
          return;
        }
        if (a.defaultCountry) {
          if (typeof a.defaultCountry == "string") {
            C(a.defaultCountry), e();
            return;
          }
          if (typeof a.defaultCountry == "number") {
            const i = Z(a.defaultCountry);
            if (i) {
              C(i.iso2), e();
              return;
            }
          }
        }
        const o = a.preferredCountries[0] || M.value[0];
        a.autoDefaultCountry ? Se().then((i) => {
          C(i || n.activeCountryCode);
        }).catch((i) => {
          console.warn(i), C(o);
        }).then(() => {
          e();
        }) : (C(o), e());
      });
    }
    function J(e = []) {
      return e.map(T).filter(Boolean);
    }
    function T(e = "") {
      return M.value.find((o) => o.iso2 === B(e));
    }
    function Z(e) {
      return M.value.find((o) => Number(o.dialCode) === e);
    }
    function Y(e, o) {
      const d = n.selectedIndex === e, i = e === a.preferredCountries.length - 1, c = a.preferredCountries.some((A) => B(A) === o);
      return {
        highlighted: d,
        "last-preferred": i,
        preferred: c
      };
    }
    function C(e) {
      var d, i, c;
      let o = e;
      if (typeof o == "string" && (o = T(o)), !!o) {
        if (((d = n.phone) == null ? void 0 : d[0]) === "+" && o.iso2 && y.value.nationalNumber) {
          n.activeCountryCode = o.iso2, n.phone = ((i = j(
            y.value.nationalNumber,
            o.iso2
          )) == null ? void 0 : i.formatInternational()) ?? "";
          return;
        }
        if ((c = a.inputOptions) != null && c.showDialCode && o) {
          n.phone = `+${o.dialCode}`, n.activeCountryCode = o.iso2;
          return;
        }
        n.activeCountryCode = o.iso2, N(n.phone);
      }
    }
    function X() {
      const e = n.phone;
      if (a.validCharactersOnly) {
        const o = n.phone.match(/[()\-+0-9\s]*/g);
        n.phone = o.join("");
      }
      if (a.customValidate && a.customValidate instanceof RegExp) {
        const o = n.phone.match(a.customValidate);
        n.phone = o.join("");
      }
      e !== n.phone && N(n.phone);
    }
    function ee() {
      return a.validCharactersOnly && !/^[()\-+0-9\s]*$/.test(n.phone) ? !1 : a.customValidate ? ne() : !0;
    }
    function ne() {
      return a.customValidate instanceof RegExp ? a.customValidate.test(n.phone) : !1;
    }
    function L() {
      var e;
      (e = g.value) == null || e.setCustomValidity(y.value.valid ? "" : a.invalidMsg), N(n.phone);
    }
    function N(e) {
      O.value = e, f("on-input", e, y.value, g.value);
    }
    function te(e) {
      f("blur", e);
    }
    function oe(e) {
      ke(g.value, n.phone.length), f("focus", e);
    }
    function ae(e) {
      f("enter", e);
    }
    function ie(e) {
      f("space", e);
    }
    function re() {
      var e;
      (e = g.value) == null || e.focus();
    }
    function se() {
      var e;
      (e = g.value) == null || e.blur();
    }
    function G() {
      a.disabled || a.dropdownOptions.disabled || (n.searchQuery = "", n.open = !n.open);
    }
    function le() {
      n.open = !1;
    }
    function de(e) {
      if (e.keyCode === 40) {
        e.preventDefault(), n.open = !0, n.selectedIndex === null ? n.selectedIndex = 0 : n.selectedIndex = Math.min(b.value.length - 1, n.selectedIndex + 1);
        const o = s.value.children[n.selectedIndex];
        o.focus(), o.offsetTop + o.clientHeight > s.value.scrollTop + s.value.clientHeight && (s.value.scrollTop = o.offsetTop - s.value.clientHeight + o.clientHeight);
      } else if (e.keyCode === 38) {
        e.preventDefault(), n.open = !0, n.selectedIndex === null ? n.selectedIndex = b.value.length - 1 : n.selectedIndex = Math.max(0, n.selectedIndex - 1);
        const o = s.value.children[n.selectedIndex];
        o.focus(), o.offsetTop < s.value.scrollTop && (s.value.scrollTop = o.offsetTop);
      } else if (e.keyCode === 13)
        n.selectedIndex !== null && C(b.value[n.selectedIndex]), n.open = !n.open;
      else if (n.open) {
        n.typeToFindInput += e.key, clearTimeout(n.typeToFindTimer), n.typeToFindTimer = setTimeout(() => {
          n.typeToFindInput = "";
        }, 700);
        const o = b.value.slice(a.preferredCountries.length).findIndex((d) => I(d.name).startsWith(n.typeToFindInput));
        if (o >= 0) {
          n.selectedIndex = a.preferredCountries.length + o;
          const d = s.value.children[n.selectedIndex], i = d.offsetTop < s.value.scrollTop, c = d.offsetTop + d.clientHeight > s.value.scrollTop + s.value.clientHeight;
          (i || c) && (s.value.scrollTop = d.offsetTop - s.value.clientHeight / 2);
        }
      }
    }
    function q() {
      n.selectedIndex = b.value.map((e) => e.iso2).indexOf(n.activeCountryCode), n.open = !1;
    }
    function ue() {
      window.innerHeight - l.value.getBoundingClientRect().bottom > 200 ? n.dropdownOpenDirection = "below" : n.dropdownOpenDirection = "above";
    }
    return r({
      focus: re,
      blur: se
    }), (e, o) => {
      const d = he("click-outside");
      return m(), h(
        "div",
        {
          ref_key: "refRoot",
          ref: l,
          class: v(["vue-tel-input", t.styleClasses, { disabled: t.disabled }])
        },
        [
          z((m(), h("div", {
            "aria-label": "Country Code Selector",
            "aria-haspopup": "listbox",
            "aria-expanded": n.open,
            role: "button",
            class: v(["vti__dropdown", { open: n.open, disabled: t.dropdownOptions.disabled }]),
            tabindex: t.dropdownOptions.tabindex,
            onKeydown: [
              de,
              x(G, ["space"]),
              x(q, ["esc"]),
              x(q, ["tab"])
            ],
            onClick: G
          }, [
            D("span", Be, [
              t.dropdownOptions.showFlags ? (m(), h(
                "span",
                {
                  key: 0,
                  class: v(["vti__flag", U(I)(n.activeCountryCode)])
                },
                null,
                2
                /* CLASS */
              )) : S("v-if", !0),
              t.dropdownOptions.showDialCodeInSelection ? (m(), h(
                "span",
                Me,
                " +" + P(E.value && E.value.dialCode),
                1
                /* TEXT */
              )) : S("v-if", !0),
              F(e.$slots, "arrow-icon", {
                open: n.open
              }, () => [
                D(
                  "span",
                  Te,
                  P(n.open ? "▲" : "▼"),
                  1
                  /* TEXT */
                )
              ])
            ]),
            n.open ? (m(), h(
              "ul",
              {
                key: 0,
                ref_key: "refList",
                ref: s,
                class: v(["vti__dropdown-list", n.dropdownOpenDirection]),
                role: "listbox"
              },
              [
                t.dropdownOptions.showSearchBox ? (m(), h("div", Ne, [
                  F(e.$slots, "search-icon"),
                  z(D("input", {
                    class: v(["vti__input", "vti__search_box"]),
                    "aria-label": "Search by country name or country code",
                    placeholder: t.dropdownOptions.searchBoxPlaceholder || (b.value.length ? b.value[0].name : ""),
                    type: "text",
                    "onUpdate:modelValue": o[0] || (o[0] = (i) => n.searchQuery = i),
                    onClick: o[1] || (o[1] = ye(() => {
                    }, ["stop"]))
                  }, null, 8, Pe), [
                    [ge, n.searchQuery]
                  ])
                ])) : S("v-if", !0),
                (m(!0), h(
                  be,
                  null,
                  ve(b.value, (i, c) => (m(), h("li", {
                    role: "option",
                    class: v(["vti__dropdown-item", Y(c, i.iso2)]),
                    key: i.iso2 + (i.preferred ? "-preferred" : ""),
                    tabindex: "-1",
                    onClick: (A) => C(i),
                    onMousemove: (A) => n.selectedIndex = c,
                    "aria-selected": n.activeCountryCode === i.iso2 && !i.preferred
                  }, [
                    t.dropdownOptions.showFlags ? (m(), h(
                      "span",
                      {
                        key: 0,
                        class: v(["vti__flag", U(I)(i.iso2)])
                      },
                      null,
                      2
                      /* CLASS */
                    )) : S("v-if", !0),
                    D(
                      "strong",
                      null,
                      P(i.name),
                      1
                      /* TEXT */
                    ),
                    t.dropdownOptions.showDialCodeInList ? (m(), h(
                      "span",
                      Ae,
                      " +" + P(i.dialCode),
                      1
                      /* TEXT */
                    )) : S("v-if", !0)
                  ], 42, Ee))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ],
              2
              /* CLASS */
            )) : S("v-if", !0)
          ], 42, Ie)), [
            [d, le]
          ]),
          z(D("input", {
            "onUpdate:modelValue": o[2] || (o[2] = (i) => n.phone = i),
            ref_key: "refInput",
            ref: g,
            type: t.inputOptions.type,
            autocomplete: t.inputOptions.autocomplete,
            autofocus: t.inputOptions.autofocus,
            class: v(["vti__input", "vti__phone", t.inputOptions.styleClasses]),
            disabled: t.disabled,
            id: t.inputOptions.id,
            maxlength: t.inputOptions.maxlength,
            name: t.inputOptions.name,
            placeholder: n.parsedPlaceholder,
            readonly: t.inputOptions.readonly,
            required: t.inputOptions.required,
            tabindex: t.inputOptions.tabindex,
            value: O.value,
            "aria-describedby": t.inputOptions["aria-describedby"],
            onBlur: te,
            onFocus: oe,
            onInput: L,
            onKeyup: [
              x(ae, ["enter"]),
              x(ie, ["space"])
            ]
          }, null, 42, Re), [
            [Ce, n.phone]
          ]),
          F(e.$slots, "icon-right")
        ],
        2
        /* CLASS */
      );
    };
  }
}), Fe = (t, r) => {
  const u = t.__vccOpts || t;
  for (const [l, s] of r)
    u[l] = s;
  return u;
}, je = /* @__PURE__ */ Fe(ze, [["__file", "/home/mikob/scratchspace/vue-tel-input/src/components/vue-tel-input.vue"]]), Ge = {
  install(t, r = {}) {
    const {
      dropdownOptions: u,
      inputOptions: l,
      ...s
    } = r, {
      dropdownOptions: g,
      inputOptions: f,
      ...a
    } = $;
    V.options = {
      inputOptions: {
        ...f,
        ...l
      },
      dropdownOptions: {
        ...g,
        ...u
      },
      ...a,
      ...s
    }, t.component("vue-tel-input", je);
  }
};
export {
  je as VueTelInput,
  Ge as default
};
