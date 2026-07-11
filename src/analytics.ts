interface GoatCounterCountOptions {
  path: string
  title?: string
}

interface GoatCounterGlobal {
  count: (options: GoatCounterCountOptions) => void
}

function getGoatCounter(): GoatCounterGlobal | undefined {
  return (window as Window & { goatcounter?: GoatCounterGlobal }).goatcounter
}

/**
 * count.jsは非同期読み込みのため、結果画面表示時点ではまだ
 * window.goatcounterが用意できていないことがある。読み込み完了まで
 * 短い間隔でリトライしてから送信する(最大5秒)。
 */
function withGoatCounter(send: (goatcounter: GoatCounterGlobal) => void, retriesLeft = 20): void {
  const goatcounter = getGoatCounter()
  if (typeof goatcounter?.count === 'function') {
    send(goatcounter)
    return
  }
  if (retriesLeft <= 0) return
  window.setTimeout(() => withGoatCounter(send, retriesLeft - 1), 250)
}

/**
 * 結果画面の表示を計測する(GoatCounter、Cookie・個人情報なし)。
 * /result: 診断完了数のKPI(Lvを問わない合計)
 * /result/lv{n}: Lv別の内訳
 */
export function trackResultView(level: number): void {
  withGoatCounter((goatcounter) => {
    goatcounter.count({ path: '/result', title: '診断完了' })
    goatcounter.count({ path: `/result/lv${level}`, title: `Lv${level} 診断結果` })
  })
}
