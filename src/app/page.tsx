// pages/index.js
import Head from 'next/head';
import Header from '@/app/component/Header';
import Hero from '@/app/component/ Hero';
import Formations from '@/app/component/Formations';
import Projets from '@/app/component/Projets';
import Forum from '@/app/component/Forum';
import Emploi from '@/app/component/ Emploi';
import Dashboard from '@/app/component/Dashboard';
import Footer from '@/app/component/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>EcoConnect - Plateforme communautaire pour les acteurs de l'environnement</title>
        <meta name="description" content="Plateforme communautaire pour les acteurs de l'environnement" />
      </Head>

      <Header />
      <Hero />
      <Formations />
      <Projets />
      <Forum />
      <Emploi />
      <Dashboard />
      <Footer />
    </>
  );
}