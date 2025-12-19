'use client'
import { useState, FormEvent } from 'react'

type Complaint = {
  id: number
  text: string
  user: string
  timestamp: string
  likes: number
  comments: unknown[]
}

type ComplaintFormProps = {
  complaints: Complaint[]
  setComplaints: React.Dispatch<React.SetStateAction<Complaint[]>>
}

export default function ComplaintForm({ complaints, setComplaints }: ComplaintFormProps) {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!text.trim()) return

    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))

    setComplaints((prev) => [
      {
        id: Date.now(),
        text,
        user: 'Anonymous User',
        timestamp: new Date().toLocaleString(),
        likes: 0,
        comments: []
      },
      ...prev
    ])

    setText('')
    setLoading(false)
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your complaint…"
          className="w-full p-4 border rounded-xl"
        />
        <button
          type="submit"
          disabled={loading || !text.trim()}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          {loading ? 'Posting…' : 'Post complaint'}
        </button>
      </form>
    </div>
  )
}
