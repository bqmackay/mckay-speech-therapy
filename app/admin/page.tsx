'use client';

import { useEffect, useState } from 'react';

interface Submission {
  id: string;
  name: string;
  email: string;
  phone: string;
  childAge: string;
  message: string;
  submittedAt: string;
}

export default function Admin() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/contact')
      .then(res => res.json())
      .then(data => {
        setSubmissions(data.submissions || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Submissions</h1>
        
        {loading ? (
          <div className="text-center py-12">Loading...</div>
        ) : submissions.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
            No submissions yet
          </div>
        ) : (
          <div className="space-y-4">
            {submissions.map((submission) => (
              <div key={submission.id} className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{submission.name}</h3>
                    <p className="text-gray-600">{submission.email}</p>
                    {submission.phone && <p className="text-gray-600">{submission.phone}</p>}
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <p>{new Date(submission.submittedAt).toLocaleDateString()}</p>
                    <p>{new Date(submission.submittedAt).toLocaleTimeString()}</p>
                  </div>
                </div>
                {submission.childAge && (
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Child's Age:</strong> {submission.childAge}
                  </p>
                )}
                <div className="bg-gray-50 rounded p-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Message:</p>
                  <p className="text-gray-700 whitespace-pre-wrap">{submission.message}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
