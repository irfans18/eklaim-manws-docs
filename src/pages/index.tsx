import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import LogoKemkes from '@site/static/img/logo/logo-kemkes-full.svg';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="bg-gradient-to-b from-primary-lightest/20 to-transparent py-16 lg:py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8 flex justify-center">
          <LogoKemkes className="h-24 w-auto md:h-32" />
        </div>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-6xl">
          Manual Web Service E-Klaim
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600 dark:text-gray-300">
          Panduan Teknis Integrasi SIMRS dengan E-Klaim (INACBG) untuk Full Bridging Service.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            className="rounded-lg bg-primary px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-primary-dark hover:text-white hover:no-underline"
            to="/manual-webservice">
            Mulai Membaca
          </Link>
          <Link
            className="rounded-lg border border-gray-300 bg-white px-8 py-3 text-lg font-semibold text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 hover:no-underline dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
            to="https://www.postman.com/pusbikes/e-klaim/overview">
            Koleksi Postman
          </Link>
        </div>
        
        <div className="mt-16 border-t border-gray-200 pt-8 dark:border-gray-700">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
            Diselenggarakan Oleh
          </p>
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-lg font-bold text-gray-800 dark:text-gray-200">
              Pusat Pembiayaan Kesehatan
            </span>
            <span className="text-base text-gray-600 dark:text-gray-400">
              Kementerian Kesehatan Republik Indonesia
            </span>
          </div>
          <div className="mt-8">
            <span className="inline-flex items-center rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
              Digunakan oleh 3000+ Rumah Sakit di Indonesia
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Beranda`}
      description="Manual Web Service E-Klaim untuk Integrasi SIMRS">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
