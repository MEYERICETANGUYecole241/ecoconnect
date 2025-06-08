// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div>
            <h3 className="font-bold text-lg mb-4">EcoConnect</h3>
            <p>Plateforme communautaire pour tous les acteurs engagés dans l’environnement.</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#">Accueil</a></li>
              <li><a href="#">Formations</a></li>
              <li><a href="#">Projets</a></li>
              <li><a href="#">Forum</a></li>
              <li><a href="#">Emploi</a></li>
            </ul>
          </div>
          {/* Ajouter les autres colonnes */}
        </div>
        <div className="text-center mt-6 text-sm text-gray-400">
          &copy; 2023 EcoConnect. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}