// components/Formations.jsx
import Link from 'next/link';

export default function Formations() {
  return (
    <section id="formations" className="formations py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Nos formations en ligne</h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
          Développez vos compétences grâce à nos formations gratuites sur les enjeux environnementaux.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Formation 1 */}
          <div className="formation-card border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
            <div className="formation-img h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://www.rse-responsables.com/wp-content/uploads/2024/06/damian-patkowski-T-LfvX-7IVg-unsplash-768x512.jpg')" }}></div>
            <div className="p-6 flex flex-col h-full">
              <h3 className="text-green-700 font-semibold text-lg mb-2">Introduction à la RSE</h3>
              <p className="mb-4 flex-grow">Découvrez les fondamentaux de la Responsabilité Sociétale des Entreprises et son impact environnemental.</p>
              <div className="mt-auto">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <i className="far fa-clock mr-1"></i> 4 heures
                </div>
                <Link href="#" className="btn btn-secondary w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">Commencer</Link> 
              </div>
            </div>
          </div>

          {/* Formation 2 */}
          <div className="formation-card border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
            <div className="formation-img h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://www.scidev.net/afrique-sub-saharienne/wp-content/uploads/sites/2/2020/11/dechets_benin.jpg')" }}></div>
            <div className="p-6 flex flex-col h-full">
              <h3 className="text-green-700 font-semibold text-lg mb-2">Gestion des déchets</h3>
              <p className="mb-4 flex-grow">Apprenez les meilleures pratiques pour réduire, réutiliser et recycler les déchets dans votre organisation.</p>
              <div className="mt-auto">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <i className="far fa-clock mr-1"></i> 6 heures
                </div>
                <Link href="#" className="btn btn-secondary w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">Commencer</Link> 
              </div>
            </div>
          </div>

          {/* Formation 3 */}
          <div className="formation-card border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
            <div className="formation-img h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}></div>
            <div className="p-6 flex flex-col h-full">
              <h3 className="text-green-700 font-semibold text-lg mb-2">Énergies renouvelables</h3>
              <p className="mb-4 flex-grow">Maîtrisez les concepts clés des énergies propres et leur mise en œuvre dans différents contextes.</p>
              <div className="mt-auto">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <i className="far fa-clock mr-1"></i> 8 heures
                </div>
                <Link href="#" className="btn btn-secondary w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">Commencer</Link> 
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link href="#" className="btn bg-green-700 hover:bg-green-800 text-white py-2 px-6 rounded">Voir toutes les formations</Link>
        </div>
      </div>
    </section>
  );
}