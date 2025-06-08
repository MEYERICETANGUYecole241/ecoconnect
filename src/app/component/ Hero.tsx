// components/Hero.jsx

export default function Hero() {
  return (
    <section id="accueil" className="hero bg-cover bg-center h-screen flex items-center justify-center text-white relative" style={{ backgroundImage: "url('https://lanouvelletribune.info/wp-content/uploads/2023/11/centrale-solaire.webp')" }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="container text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Connectez-vous pour un avenir durable</h1>
        <p className="max-w-xl mx-auto mb-6 text-lg">
          La plateforme communautaire qui rassemble tous les acteurs engagés dans la protection de l&apos;environnement.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#formations" className="btn bg-green-700 hover:bg-green-900 text-white px-6 py-3 rounded">Découvrir les formations</a>
          <a href="#projets" className="btn border border-green-700 text-white px-6 py-3 rounded">Voir les projets</a>
        </div>
      </div>
    </section>
  );
}