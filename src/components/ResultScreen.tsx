import { useEffect } from 'react'
import type { LevelResult } from '../data/results'
import { DISCLAIMER } from '../data/results'
import { NOTE_URL, X_FOLLOW_URL } from '../config'
import { trackResultView } from '../analytics'

interface Props {
  result: LevelResult
  onRestart: () => void
}

export function ResultScreen({ result, onRestart }: Props) {
  useEffect(() => {
    trackResultView(result.level)
  }, [result.level])

  const siteUrl = `${window.location.origin}${window.location.pathname}`
  const shareText = `私は Lv${result.level} ${result.name} でした`
  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(siteUrl)}`

  return (
    <div className="screen result-screen">
      <p className="result-level-label">Lv{result.level}</p>
      <h2 className="result-level-name">{result.name}</h2>
      <p className="result-intro">{result.intro}</p>

      <section className="result-section">
        <h3>現在できていること</h3>
        <p>{result.canDoNow}</p>
      </section>

      <section className="result-section">
        <h3>次に身につけたいこと</h3>
        <p>{result.nextToLearn}</p>
      </section>

      <section className="result-section">
        <h3>おすすめの次の行動</h3>
        <p>{result.nextAction}</p>
      </section>

      <p className="result-next-level">次のLv: {result.nextLevel}</p>

      <p className="disclaimer">{DISCLAIMER}</p>

      <div className="action-list">
        <a className="share-button" href={shareUrl} target="_blank" rel="noopener noreferrer">
          結果をXでシェア
        </a>
        <a className="note-link" href={NOTE_URL} target="_blank" rel="noopener noreferrer">
          詳しい解説はnoteへ
        </a>
        <a className="follow-button" href={X_FOLLOW_URL} target="_blank" rel="noopener noreferrer">
          Xでフォローする
        </a>
      </div>

      <button className="secondary-button" onClick={onRestart}>
        もう一度診断する
      </button>
    </div>
  )
}
