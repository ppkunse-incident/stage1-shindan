interface Props {
  onStart: () => void
}

export function TopScreen({ onStart }: Props) {
  return (
    <div className="screen top-screen">
      <h1>あなたの障害対応、今どのレベル?</h1>
      <p className="lead">全10問・所要時間3分の無料セルフチェックです。</p>
      <button className="primary-button" onClick={onStart}>
        診断をはじめる
      </button>
    </div>
  )
}
