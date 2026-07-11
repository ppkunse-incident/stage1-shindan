export interface Choice {
  key: 'A' | 'B' | 'C' | 'D'
  text: string
  correct: boolean
}

export interface Question {
  id: number
  title: string
  text: string
  choices: Choice[]
}

export const questions: Question[] = [
  {
    id: 1,
    title: '対応Lv1: アラート受信者',
    text: 'アラート通知を受け取った直後、最初に何をしますか？',
    choices: [
      { key: 'A', text: '原因を調べるため、すぐにログを確認する', correct: false },
      { key: 'B', text: '通知の重要度を見て、緊急そうなら担当者へ転送する', correct: false },
      { key: 'C', text: '対応が必要な通知か確認し、記載された時刻・対象・事象をメモする', correct: true },
      { key: 'D', text: '同じ通知がもう一度届くまで様子を見る', correct: false },
    ],
  },
  {
    id: 2,
    title: '対応Lv2: アラート読解者',
    text: '見慣れない機器名が記載されたアラートを受け取りました。最初の確認として適切なのはどれですか？',
    choices: [
      { key: 'A', text: 'エラー文をインターネットで検索し、原因候補を調べる', correct: false },
      {
        key: 'B',
        text: '構成図や運用資料を確認し、対象機器が属するシステム・役割・検知された異常を整理する',
        correct: true,
      },
      { key: 'C', text: '機器名を知っていそうな人へ、そのままアラートを転送する', correct: false },
      { key: 'D', text: '過去に見たことがないため、重要度は低いと判断する', correct: false },
    ],
  },
  {
    id: 3,
    title: '対応Lv3: 影響確認者',
    text: 'アラートを確認したところ、原因はまだ分かりません。次に優先して確認することはどれですか？',
    choices: [
      { key: 'A', text: '原因を特定するため、関連しそうなログをすべて確認する', correct: false },
      {
        key: 'B',
        text: '手順書や運用資料を確認し、異常が続いているか、利用者や業務へ影響が出ているかを確認する',
        correct: true,
      },
      { key: 'C', text: '同じアラートが過去に発生していないかだけを調べる', correct: false },
      { key: 'D', text: '原因が分かるまで、利用者への影響確認は後回しにする', correct: false },
    ],
  },
  {
    id: 4,
    title: '対応Lv4: 事実整理者',
    text: '障害対応中に、複数の確認結果と原因候補が出てきました。記録方法として適切なのはどれですか？',
    choices: [
      { key: 'A', text: '原因候補を中心にまとめ、確認した内容は重要なものだけ記録する', correct: false },
      {
        key: 'B',
        text: '確認した事実、まだ確認していないこと、推測を分け、実施時刻とともに記録する',
        correct: true,
      },
      { key: 'C', text: '対応が終わった後に、覚えている範囲でまとめて記録する', correct: false },
      { key: 'D', text: '自分が分かる内容であれば、他の人が見ても分かる形に整理する必要はない', correct: false },
    ],
  },
  {
    id: 5,
    title: '対応Lv5: 第一報担当者',
    text: 'アラート発生から10分経過しましたが、原因はまだ分かっていません。利用者影響の可能性があります。適切な対応はどれですか？',
    choices: [
      { key: 'A', text: '原因が分かるまで調査を続け、確定後にまとめて報告する', correct: false },
      { key: 'B', text: '「原因調査中です」とだけメールで報告する', correct: false },
      {
        key: 'C',
        text: '影響・現状・確認済み事項・未確認事項・次に行うことを整理し、緊急度に合った手段で第一報する',
        correct: true,
      },
      { key: 'D', text: '誤報の可能性もあるため、利用者から問い合わせが来るまで報告しない', correct: false },
    ],
  },
  {
    id: 6,
    title: '対応Lv6: エスカレーション実行者',
    text: '調査を続けていますが、利用者影響があり、しばらく進展がありません。次の対応として適切なのはどれですか？',
    choices: [
      { key: 'A', text: 'もう少し調べれば分かる可能性があるため、自分だけで調査を続ける', correct: false },
      {
        key: 'B',
        text: '担当者やエスカレーション先を確認し、確認済み・分かったこと・分からないことを整理して相談する',
        correct: true,
      },
      { key: 'C', text: '原因が分からないまま相談すると迷惑になるため、原因候補が絞れるまで待つ', correct: false },
      { key: 'D', text: '状況説明はせず、詳しい人へアラート通知だけを転送する', correct: false },
    ],
  },
  {
    id: 7,
    title: '対応Lv7: 類似事例活用者',
    text: '現在のアラートとよく似た過去事例が見つかりました。次の対応として適切なのはどれですか？',
    choices: [
      { key: 'A', text: '同じアラート名なので、過去事例と同じ対応をそのまま実施する', correct: false },
      { key: 'B', text: '過去事例は参考にせず、最初からすべて調べ直す', correct: false },
      {
        key: 'C',
        text: '対象システム・監視項目・現在状態を比較し、今回にも使える情報と、そのまま使えない情報を分ける',
        correct: true,
      },
      { key: 'D', text: '過去事例に復旧実績があるため、現在の影響確認を省略する', correct: false },
    ],
  },
  {
    id: 8,
    title: '対応Lv8: 初動自走者',
    text: '担当システムで見慣れないアラートが発生しました。初動対応の進め方として適切なのはどれですか？',
    choices: [
      { key: 'A', text: '原因調査を優先し、ログを確認してから影響確認や報告を行う', correct: false },
      {
        key: 'B',
        text: '手順書や運用資料を参照し、対象・事象・現在状態・影響を確認して記録し、第一報と必要な相談まで順番に進める',
        correct: true,
      },
      { key: 'C', text: '詳しい担当者へアラートを転送し、その後の対応を任せる', correct: false },
      {
        key: 'D',
        text: '過去事例と同じアラートであれば、影響確認や第一報を省略して過去の対応を実施する',
        correct: false,
      },
    ],
  },
  {
    id: 9,
    title: '対応Lv9: 初動安定対応者',
    text: '普段とは異なるシステムで、見慣れない監視項目のアラートが発生しました。対応として適切なのはどれですか？',
    choices: [
      { key: 'A', text: '見慣れないアラートなので、詳しい担当者へすぐ任せる', correct: false },
      { key: 'B', text: '普段のシステムとは異なるため、初動の確認順序もその場で考え直す', correct: false },
      {
        key: 'C',
        text: '対象や監視項目に合わせて参照資料を変えながら、状態確認・影響確認・記録・第一報・相談の順序は崩さず進める',
        correct: true,
      },
      { key: 'D', text: '過去の対応経験がないため、原因調査から始めて状況を把握する', correct: false },
    ],
  },
  {
    id: 10,
    title: '対応Lv10: 初動習熟者',
    text: '初動対応が完了しました。次回の対応をより良くするために行うこととして、最も適切なのはどれですか？',
    choices: [
      { key: 'A', text: '復旧したため、今回の対応は完了として記録を閉じる', correct: false },
      { key: 'B', text: '原因と復旧方法だけを残し、初動で迷った点は個人の経験として覚えておく', correct: false },
      {
        key: 'C',
        text: '確認漏れ・判断に迷った点・不足していた資料や連絡先を振り返り、手順書やチェックリストなどへ改善を反映する',
        correct: true,
      },
      { key: 'D', text: '次回も同じ担当者が対応すればよいため、資料の更新は行わない', correct: false },
    ],
  },
]
