interface GoatCounterCountOptions {
  path: string
  title?: string
}

interface GoatCounterGlobal {
  count: (options: GoatCounterCountOptions) => void
}

/** 結果画面の表示をLv別にカウントする(GoatCounter、Cookie・個人情報なし)。 */
export function trackResultView(level: number): void {
  const goatcounter = (window as Window & { goatcounter?: GoatCounterGlobal }).goatcounter
  goatcounter?.count({
    path: `/result/lv${level}`,
    title: `Lv${level} 診断結果`,
  })
}
