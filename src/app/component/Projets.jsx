// components/Projets.jsx
import Link from 'next/link';

export default function Projets() {
  return (
    <section id="projets" className="projets py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Projets récents</h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
          Découvrez les initiatives environnementales en cours et participez à leur réalisation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Projet 1 */}
          <div className="project-card border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
            <div className="project-img h-56 bg-cover bg-center" style={{ backgroundImage: "url('https://www.radiofrance.fr/s3/cruiser-production-eu3/2024/01/99de2365-7e31-43b1-9ce4-1407e28a2839/640x340_sc_foret1153908151.jpg')" }}></div>
            <div className="p-6">
              <h3 className="text-green-700 font-semibold text-lg mb-2">Reforestation urbaine</h3>
              <p className="mb-4">Plantation d'arbres dans les zones urbaines pour améliorer la qualité de l'air.</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span><i className="fas fa-map-marker-alt mr-1"></i> Paris, France</span>
                <span><i className="fas fa-users mr-1"></i> 5 partenaires</span>
              </div>
            </div>
          </div>

          {/* Projet 2 */}
          <div className="project-card border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
            <div className="project-img h-56 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}></div>
            <div className="p-6">
              <h3 className="text-green-700 font-semibold text-lg mb-2">Énergie renouvelable</h3>
              <p className="mb-4">Développement de solutions solaires pour les communautés rurales.</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span><i className="fas fa-map-marker-alt mr-1"></i> Dakar, Sénégal</span>
                <span><i className="fas fa-users mr-1"></i> 3 partenaires</span>
              </div>
            </div>
          </div>

          {/* Projet 3 */}
          <div className="project-card border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
            <div className="project-img h-56 bg-cover bg-center" style={{ backgroundImage: "url('https://gabon-rse.com/wp-content/uploads/2024/03/Recyclage-ou-Reduction-du-Plastiques.png')" }}></div>
            <div className="p-6">
              <h3 className="text-green-700 font-semibold text-lg mb-2">Recyclage plastique</h3>
              <p className="mb-4">Création d'une unité de transformation des déchets plastiques en matériaux de construction.</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span><i className="fas fa-map-marker-alt mr-1"></i> Abidjan, Côte d'Ivoire</span>
                <span><i className="fas fa-users mr-1"></i> 8 partenaires</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10 space-x-4">
          <Link href="#" className="btn bg-green-700 hover:bg-green-800 text-white py-2 px-6 rounded">Voir tous les projets</Link> 
          <Link href="#" className="btn border border-green-700 text-green-700 hover:bg-green-50 py-2 px-6 rounded">Proposer un projet</Link>
        </div>
      </div>
    </section>
  );
}
