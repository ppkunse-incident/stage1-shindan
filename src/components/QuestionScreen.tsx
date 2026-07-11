import { useMemo } from 'react'
import type { Question } from '../data/questions'
import { shuffle } from '../logic/shuffle'

interface Props {
  question: Question
  questionNumber: number
  totalQuestions: number
  onAnswer: (correct: boolean) => void
}

export function QuestionScreen({ question, questionNumber, totalQuestions, onAnswer }: Props) {
  const shuffledChoices = useMemo(() => shuffle(question.choices), [question.id])
  const progressPercent = Math.round((questionNumber / totalQuestions) * 100)

  return (
    <div className="screen question-screen">
      <div className="progress-bar" role="progressbar" aria-valuenow={questionNumber} aria-valuemin={0} aria-valuemax={totalQuestions}>
        <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }} />
      </div>
      <p className="progress-label">
        {questionNumber} / {totalQuestions}
      </p>
      <h2 className="question-text">{question.text}</h2>
      <div className="choice-list">
        {shuffledChoices.map((choice) => (
          <button key={choice.key} className="choice-button" onClick={() => onAnswer(choice.correct)}>
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  )
}
