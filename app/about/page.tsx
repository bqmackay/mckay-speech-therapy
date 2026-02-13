export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Erica Mackay</h1>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Placeholder for photo - you can add an actual image later */}
              <div className="md:col-span-1">
                <div className="bg-blue-100 rounded-lg aspect-square flex items-center justify-center">
                  <span className="text-6xl">👩‍⚕️</span>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Erica Mackay, M.S., CCC-SLP</h2>
                <p className="text-gray-700 mb-4">
                  Erica Mackay is a dedicated speech-language pathologist with a passion for helping children 
                  develop their communication skills. With years of experience working with children ages 0-18, 
                  Erica brings both expertise and compassion to every therapy session.
                </p>
                <p className="text-gray-700 mb-4">
                  She holds a Master's degree in Speech-Language Pathology and is certified by the 
                  American Speech-Language-Hearing Association (ASHA). Erica believes that every child 
                  deserves the opportunity to communicate confidently and effectively.
                </p>
              </div>
            </div>
          </div>

          {/* Approach */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">My Approach</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                I believe that speech therapy should be engaging, personalized, and fun. Every child is unique, 
                and I tailor my therapeutic approach to match each child's interests, learning style, and specific needs.
              </p>
              <p>
                My practice is built on three core principles:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">🎯</span>
                  <div>
                    <strong>Evidence-Based Practice:</strong> Using research-backed methods and techniques 
                    that have been proven effective in treating speech and language disorders.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">❤️</span>
                  <div>
                    <strong>Family-Centered Care:</strong> Working collaboratively with families to ensure 
                    therapy goals align with family priorities and that progress continues at home.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">✨</span>
                  <div>
                    <strong>Play-Based Learning:</strong> Making therapy enjoyable through games, activities, 
                    and creative approaches that keep children motivated and engaged.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Specializations */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Areas of Expertise</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span className="text-gray-700">Articulation & Phonological Disorders</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span className="text-gray-700">Language Development Delays</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span className="text-gray-700">Fluency & Stuttering</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span className="text-gray-700">Social Communication Skills</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span className="text-gray-700">Early Intervention (0-3 years)</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span className="text-gray-700">Autism Spectrum Disorders</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span className="text-gray-700">Voice Disorders</span>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span className="text-gray-700">Feeding & Swallowing Issues</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-600 text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
            <p className="mb-6 text-lg">
              I'd love to learn more about your child and how I can support their communication journey.
            </p>
            <a 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
