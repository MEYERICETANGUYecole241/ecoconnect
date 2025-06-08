// components/Dashboard.jsx
export default function Dashboard() {
  return (
    <section id="dashboard" className="dashboard py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Votre tableau de bord</h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
          Suivez votre progression et accédez à vos contenus personnalisés.
        </p>

        <div className="bg-green-50 p-8 rounded-lg shadow-md max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="stat-card bg-white p-6 rounded-lg shadow text-center">
              <div className="stat-number text-3xl font-bold text-green-700">3</div>
              <div className="text-sm text-gray-600">Formations en cours</div>
            </div>
            <div className="stat-card bg-white p-6 rounded-lg shadow text-center">
              <div className="stat-number text-3xl font-bold text-green-700">12</div>
              <div className="text-sm text-gray-600">Heures de formation</div>
            </div>
            <div className="stat-card bg-white p-6 rounded-lg shadow text-center">
              <div className="stat-number text-3xl font-bold text-green-700">2</div>
              <div className="text-sm text-gray-600">Projets suivis</div>
            </div>
            <div className="stat-card bg-white p-6 rounded-lg shadow text-center">
              <div className="stat-number text-3xl font-bold text-green-700">5</div>
              <div className="text-sm text-gray-600">Badges obtenus</div>
            </div>
          </div>

          <div className="progress-container mb-10">
            <h3 className="font-bold mb-4">Votre progression</h3>

            <div className="progress-item mb-6">
              <div className="flex justify-between text-sm mb-1">
                <span>Introduction à la RSE</span>
                <span>65%</span>
              </div>
              <div className="progress-bar h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="progress-fill h-full bg-green-500" style={{ width: '65%' }}></div>
              </div>
            </div>

            <div className="progress-item mb-6">
              <div className="flex justify-between text-sm mb-1">
                <span>Gestion des déchets</span>
                <span>30%</span>
              </div>
              <div className="progress-bar h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="progress-fill h-full bg-green-500" style={{ width: '30%' }}></div>
              </div>
            </div>

            <div className="progress-item">
              <div className="flex justify-between text-sm mb-1">
                <span>Énergies renouvelables</span>
                <span>10%</span>
              </div>
              <div className="progress-bar h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="progress-fill h-full bg-green-500" style={{ width: '10%' }}></div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="btn bg-green-700 hover:bg-green-800 text-white py-2 px-6 rounded">Accéder à mon espace</button>
          </div>
        </div>
      </div>
    </section>
  );
}
