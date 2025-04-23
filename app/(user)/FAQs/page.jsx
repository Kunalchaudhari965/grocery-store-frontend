"use client"
import React,{ useState }from 'react'

const page = () => {
    const [questions, setQuestions] = useState([
        {
          id: 1,
          user: "Admin",
          question: "What are your delivery hours?",
          answers: [
            { user: "Admin", text: "We deliver groceries between 8 AM to 10 PM, 7 days a week." }
          ],
        },
        {
          id: 2,
          user: "Admin",
          question: "Is there a minimum order value for delivery?",
          answers: [
            { user: "Admin", text: "Yes, the minimum order value for free delivery is ₹500." }
          ],
        },
      ]);
    
      const [newQuestion, setNewQuestion] = useState('');
      const [answerInputs, setAnswerInputs] = useState({});
    
      const handleAddQuestion = () => {
        if (!newQuestion.trim()) return;
        const newQ = {
          id: Date.now(),
          user: "Guest",
          question: newQuestion,
          answers: [],
        };
        setQuestions([newQ, ...questions]);
        setNewQuestion('');
      };
    
      const handleAddAnswer = (id) => {
        if (!answerInputs[id]?.trim()) return;
        const updatedQuestions = questions.map((q) =>
          q.id === id
            ? {
                ...q,
                answers: [...q.answers, { user: "Guest", text: answerInputs[id] }],
              }
            : q
        );
        setQuestions(updatedQuestions);
        setAnswerInputs({ ...answerInputs, [id]: '' });
      };
    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
              Frequently Asked Questions
            </h1>
    
            {/* Add Question */}
            <div className="mb-6">
              <textarea
                className="w-full border rounded-lg p-3 shadow-sm focus:ring-2 focus:ring-green-300"
                placeholder="Ask your question..."
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
              />
              <button
                onClick={handleAddQuestion}
                className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Submit Question
              </button>
            </div>
    
            {/* List of Q&A */}
            <div className="space-y-8">
              {questions.map((q) => (
                <div key={q.id} className="border-t pt-4">
                  <p className="font-semibold text-gray-800">{q.user} asked:</p>
                  <h3 className="text-lg text-gray-700">{q.question}</h3>
    
                  {/* Answers */}
                  <div className="mt-2 ml-4 space-y-1">
                    {q.answers.map((a, index) => (
                      <div key={index} className="text-gray-600 text-sm">
                        <span className="font-medium text-green-700">{a.user}:</span> {a.text}
                      </div>
                    ))}
                  </div>
    
                  {/* Answer Form */}
                  <textarea
                    className="w-full mt-2 border rounded-lg p-2 text-sm shadow-sm"
                    placeholder="Write your answer..."
                    value={answerInputs[q.id] || ''}
                    onChange={(e) =>
                      setAnswerInputs({ ...answerInputs, [q.id]: e.target.value })
                    }
                  />
                  <button
                    onClick={() => handleAddAnswer(q.id)}
                    className="mt-1 px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                  >
                    Submit Answer
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default page
