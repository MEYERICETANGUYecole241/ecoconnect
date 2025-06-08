// components/Forum.jsx
import Link from 'next/link';

export default function Forum() {
  return (
    <section id="forum" className="forum py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Forum communautaire</h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
          Échangez avec d'autres membres, posez vos questions et partagez vos expériences.
        </p>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg">Derniers sujets</h3>
            <Link href="#" className="btn bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded">Nouveau sujet</Link>
          </div>

          <div className="space-y-6">
            {/* Sujet 1 */}
            <div className="topic border-b pb-4">
              <div className="flex justify-between items-start">
                <h4 className="font-medium text-green-700">Comment impliquer les employés dans notre démarche RSE ?</h4>
                <div className="text-sm text-gray-500">
                  <span className="mr-2"><i className="far fa-comment mr-1"></i> 12</span>
                  <span><i className="far fa-eye mr-1"></i> 145</span>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-600">Nous avons lancé une politique RSE dans notre entreprise mais avons du mal à impliquer les employés. Des retours d'expérience ?</p>
            </div>

            {/* Sujet 2 */}
            <div className="topic border-b pb-4">
              <div className="flex justify-between items-start">
                <h4 className="font-medium text-green-700">Recherche partenaires pour projet de reforestation</h4>
                <div className="text-sm text-gray-500">
                  <span className="mr-2"><i className="far fa-comment mr-1"></i> 8</span>
                  <span><i className="far fa-eye mr-1"></i> 98</span>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-600">Notre association cherche des partenaires techniques et financiers pour un projet de reforestation en Afrique de l'Ouest.</p>
            </div>

            {/* Sujet 3 */}
            <div className="topic border-b pb-4">
              <div className="flex justify-between items-start">
                <h4 className="font-medium text-green-700">Retour d'expérience : transition énergétique dans une PME</h4>
                <div className="text-sm text-gray-500">
                  <span className="mr-2"><i className="far fa-comment mr-1"></i> 15</span>
                  <span><i className="far fa-eye mr-1"></i> 210</span>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-600">Je partage notre expérience de transition vers les énergies renouvelables dans notre PME manufacturière.</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="#" className="btn bg-green-700 hover:bg-green-800 text-white py-2 px-6 rounded">Accéder au forum</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
