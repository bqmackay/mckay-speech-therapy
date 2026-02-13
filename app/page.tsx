import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          McKay Speech Therapy
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Helping children find their voice through compassionate, evidence-based speech therapy
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/contact" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
          <Link 
            href="/services" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition"
          >
            View Services
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3">Personalized Care</h3>
            <p className="text-gray-600">
              Every child is unique. We create customized therapy plans tailored to your child's specific needs.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
            <h3 className="text-xl font-bold mb-3">Family-Centered</h3>
            <p className="text-gray-600">
              We work closely with families to ensure therapy extends beyond sessions into everyday life.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-3">Evidence-Based</h3>
            <p className="text-gray-600">
              Our approach is grounded in the latest research and proven therapeutic techniques.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8">Schedule a consultation to discuss your child's needs</p>
          <Link 
            href="/contact" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
