import { CONFIG } from './config'

export const WORDS = [
  'zazho',
  'tèrva',
  'kyeng',
  'kojyù',
  'yèrni',
  'kotya',
  'yozhi',
  'durze',
  'tyèng',
  'hokùn',
  'zhàch',
  'kòrme',
  'irper',
  'haukò',
  'zìrng',
  'yaung',
  'hizup',
  'sheng',
  'yarmè',
  'pyeng',
  'dòrji',
  'yàrng',
  'tizùk',
  'zaung',
  'tàlep',
  'hòpep',
  'tiyek',
  'zarye',
  'terve',
  'tyeng',
  'lìrke',
  'ngòzè',
  'yirma',
  'vyēng',
  'pèrti',
  'ching',
  'zheng',
  'pòrle',
  'maung',
  'nèzek',
  'lhèng',
  'kityi',
  'aurng',
  'hèngè',
  'zhòhà',
  'hipon',
  'turya',
  'yaung',
  'kòcte',
  'nizor',
  'yetya',
  'jezhu',
  'liyar',
  'zhàun',
  'japtì',
  'tonyì',
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
