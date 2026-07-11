import { levelResults, type LevelResult } from '../data/results'

/** Q1〜Q10の正誤。true=正答。 */
export type Answers = boolean[] // length 10, index 0 = Q1 ... index 9 = Q10

function allCorrect(answers: Answers, fromQ: number, toQ: number): boolean {
  for (let q = fromQ; q <= toQ; q++) {
    if (!answers[q - 1]) return false
  }
  return true
}

/**
 * 高Lv優先(Lv10→Lv9→…→Lv0)で判定する。
 * Lv8以上はQ1〜Q6全問正解必須、Q7はLv9以上で必須。
 */
export function judgeLevel(answers: Answers): number {
  const q1to6 = allCorrect(answers, 1, 6)

  if (q1to6 && allCorrect(answers, 7, 10)) return 10
  if (q1to6 && allCorrect(answers, 7, 9)) return 9
  if (q1to6 && answers[7]) return 8 // Q8 = index 7
  if (allCorrect(answers, 1, 7)) return 7
  if (q1to6) return 6
  if (allCorrect(answers, 1, 5)) return 5
  if (allCorrect(answers, 1, 4)) return 4
  if (allCorrect(answers, 1, 3)) return 3
  if (allCorrect(answers, 1, 2)) return 2
  if (answers[0]) return 1
  return 0
}

export function getLevelResult(answers: Answers): LevelResult {
  const level = judgeLevel(answers)
  return levelResults[level]
}
