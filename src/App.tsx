import { useState } from 'react'
import { questions } from './data/questions'
import { getLevelResult, type Answers } from './logic/judge'
import { TopScreen } from './components/TopScreen'
import { QuestionScreen } from './components/QuestionScreen'
import { ResultScreen } from './components/ResultScreen'

type Screen = 'top' | 'question' | 'result'

export default function App() {
  const [screen, setScreen] = useState<Screen>('top')
  const [answers, setAnswers] = useState<Answers>([])

  function handleStart() {
    setAnswers([])
    setScreen('question')
  }

  function handleAnswer(correct: boolean) {
    const nextAnswers = [...answers, correct]
    setAnswers(nextAnswers)
    if (nextAnswers.length === questions.length) {
      setScreen('result')
    }
  }

  function handleRestart() {
    setAnswers([])
    setScreen('top')
  }

  return (
    <main className="app">
      {screen === 'top' && <TopScreen onStart={handleStart} />}

      {screen === 'question' && (
        <QuestionScreen
          question={questions[answers.length]}
          questionNumber={answers.length + 1}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
        />
      )}

      {screen === 'result' && <ResultScreen result={getLevelResult(answers)} onRestart={handleRestart} />}
    </main>
  )
}
