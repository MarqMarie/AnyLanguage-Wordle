import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'à',
  'ā',
  'b',
  'd',
  'e',
  'è',
  'ē',
  'g',
  'h',
  'i',
  'ì',
  'ī',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'ò',
  'ō',
  'p',
  'r',
  's',
  't',
  'u',
  'ù',
  'ū',
  'v',
  'y',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
