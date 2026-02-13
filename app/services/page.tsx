export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Our Services</h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Comprehensive speech therapy services for children ages 0-18
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Speech Therapy Sessions */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-5xl mb-4">🗣️</div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Speech Therapy Sessions</h2>
            <p className="text-gray-600 mb-6">
              One-on-one therapy sessions tailored to your child's unique needs. We address:
            </p>
            <ul className="space-y-2 mb-6 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Articulation and pronunciation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Language development and comprehension</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Fluency and stuttering</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Voice and resonance disorders</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Social communication skills</span>
              </li>
            </ul>
            <div className="border-t pt-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">30-minute session</p>
                  <p className="text-3xl font-bold text-blue-600">$50</p>
                </div>
                <a 
                  href="/contact" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Book Session
                </a>
              </div>
            </div>
          </div>

          {/* Speech Testing */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-5xl mb-4">📋</div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Comprehensive Testing</h2>
            <p className="text-gray-600 mb-6">
              In-depth evaluation to identify speech and language challenges. Our testing includes:
            </p>
            <ul className="space-y-2 mb-6 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Standardized assessment tools</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Detailed written report</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Personalized recommendations</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Treatment plan development</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Follow-up consultation</span>
              </li>
            </ul>
            <div className="border-t pt-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Full evaluation</p>
                  <p className="text-3xl font-bold text-blue-600">$150</p>
                </div>
                <a 
                  href="/contact" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Schedule Test
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 max-w-4xl mx-auto bg-blue-50 rounded-xl p-8">
          <h3 className="text-xl font-bold mb-4 text-gray-900">What to Expect</h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h4 className="font-semibold mb-2">First Visit</h4>
              <p className="text-sm">
                We'll get to know your child, discuss concerns, and begin building a relationship in a comfortable, supportive environment.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Flexible Scheduling</h4>
              <p className="text-sm">
                We offer flexible appointment times to work with your family's schedule, including after-school sessions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Progress Tracking</h4>
              <p className="text-sm">
                Regular updates on your child's progress with specific milestones and goals to celebrate achievements.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Family Involvement</h4>
              <p className="text-sm">
                Parents receive strategies and activities to support speech development at home between sessions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
