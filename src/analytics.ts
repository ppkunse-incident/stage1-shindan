interface GoatCounterCountOptions {
  path: string
  title?: string
}

interface GoatCounterGlobal {
  count: (options: GoatCounterCountOptions) => void
}

/**
 * 結果画面の表示を計測する(GoatCounter、Cookie・個人情報なし)。
 * /result: 診断完了数のKPI(Lvを問わない合計)
 * /result/lv{n}: Lv別の内訳
 */
export function trackResultView(level: number): void {
  const goatcounter = (window as Window & { goatcounter?: GoatCounterGlobal }).goatcounter
  if (!goatcounter) return
  goatcounter.count({ path: '/result', title: '診断完了' })
  goatcounter.count({ path: `/result/lv${level}`, title: `Lv${level} 診断結果` })
}
