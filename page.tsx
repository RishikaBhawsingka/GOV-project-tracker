// app/page.tsx

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow p-8 space-y-6">
        <header className="space-y-2 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Kolkata Project Tracker
          </h1>
          <p className="text-gray-600 text-sm">
            Basic overview of civic projects with a complaint dashboard for citizens.
          </p>
        </header>

        <section className="space-y-3 text-sm">
          <h2 className="text-lg font-semibold text-gray-800">
            Sample Projects
          </h2>
          <ul className="space-y-2">
            <li className="border rounded-lg p-3">
              <p className="font-medium">Road Repair – Salt Lake Sector V</p>
              <p className="text-gray-600">
                Status: Ongoing · Contractor: ABC Infra Pvt Ltd · Budget: ₹1.2 Cr
              </p>
            </li>
            <li className="border rounded-lg p-3">
              <p className="font-medium">Drainage Upgrade – Behala</p>
              <p className="text-gray-600">
                Status: Planned · Contractor: Kolkata Civic Works · Budget: ₹80 Lakh
              </p>
            </li>
            <li className="border rounded-lg p-3">
              <p className="font-medium">Street Lights – New Town</p>
              <p className="text-gray-600">
                Status: Completed · Contractor: BrightCity Lighting · Budget: ₹50 Lakh
              </p>
            </li>
          </ul>
        </section>

        <div className="text-center">
          <a
            href="/dashboard"
            className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Go to Complaint Dashboard
          </a>
        </div>
      </div>
    </main>
  )
}



