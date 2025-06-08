// components/Emploi.jsx
import Link from 'next/link';

export default function Emploi() {
  return (
    <section id="emploi" className="emploi py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Offres d&apos;emploi</h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
          Trouvez des opportunités professionnelles dans le domaine de l&apos;environnement et du développement durable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Offre 1 */}
          <div className="offre-card border rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
            <h3 className="text-green-700 font-semibold text-lg mb-2">Chargé de mission RSE</h3>
            <div className="offre-entreprise font-medium mb-1">EcoSolutions SARL</div>
            <div className="offre-location flex items-center text-sm text-gray-500 mb-2">
              <i className="fas fa-map-marker-alt mr-1"></i> Lyon, France
            </div>
            <span className="offre-type inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mb-2">CDI</span>
            <p className="mb-4 text-sm text-gray-600">Nous recherchons un chargé de mission pour piloter notre démarche RSE et mettre en place notre stratégie développement durable.</p>
            <Link href="#" className="btn bg-green-700 hover:bg-green-800 text-white w-full py-2 px-4 rounded">Postuler</Link>
          </div>

          {/* Offre 2 */}
          <div className="offre-card border rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
            <h3 className="text-green-700 font-semibold text-lg mb-2">Ingénieur énergies renouvelables</h3>
            <div className="offre-entreprise font-medium mb-1">GreenPower Inc.</div>
            <div className="offre-location flex items-center text-sm text-gray-500 mb-2">
              <i className="fas fa-map-marker-alt mr-1"></i> Dakar, Sénégal
            </div>
            <span className="offre-type inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mb-2">CDD</span>
            <p className="mb-4 text-sm text-gray-600">Pour un projet d&apos;électrification rurale, nous recherchons un ingénieur spécialisé en solutions solaires décentralisées.</p>
            <Link href="#" className="btn bg-green-700 hover:bg-green-800 text-white w-full py-2 px-4 rounded">Postuler</Link>
          </div>

          {/* Offre 3 */}
          <div className="offre-card border rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
            <h3 className="text-green-700 font-semibold text-lg mb-2">Consultant en économie circulaire</h3>
            <div className="offre-entreprise font-medium mb-1">Circular Consulting</div>
            <div className="offre-location flex items-center text-sm text-gray-500 mb-2">
              <i className="fas fa-map-marker-alt mr-1"></i> Télétravail
            </div>
            <span className="offre-type inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mb-2">Freelance</span>
            <p className="mb-4 text-sm text-gray-600">Nous cherchons un consultant pour accompagner nos clients dans leur transition vers l&apos;économie circulaire.</p>
            <Link href="#" className="btn bg-green-700 hover:bg-green-800 text-white w-full py-2 px-4 rounded">Postuler</Link>
          </div>
        </div>

        <div className="text-center mt-10 space-x-4">
          <Link href="#" className="btn bg-green-700 hover:bg-green-800 text-white py-2 px-6 rounded">Voir toutes les offres</Link>
          <Link href="#" className="btn border border-green-700 text-green-700 hover:bg-green-50 py-2 px-6 rounded">Déposer une offre</Link>
        </div>
      </div>
    </section>
  );
}