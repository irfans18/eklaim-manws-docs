import type {ReactNode} from 'react';
import Heading from '@theme/Heading';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Mudah Diintegrasikan',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Manual Web Service ini dirancang agar mudah dipahami dan diimplementasikan
        oleh tim IT Rumah Sakit untuk proses bridging yang lancar.
      </>
    ),
  },
  {
    title: 'Dokumentasi Lengkap',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Mencakup penjelasan detail tentang setiap endpoint, parameter, dan
        contoh request/response untuk meminimalkan kesalahan integrasi.
      </>
    ),
  },
  {
    title: 'Standar Nasional',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Sesuai dengan standar interoperabilitas data kesehatan yang ditetapkan
        oleh Kementerian Kesehatan Republik Indonesia.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className="w-full px-4 md:w-1/3">
      <div className="mb-4 text-center">
        <Svg className="h-48 w-full md:h-56" role="img" />
      </div>
      <div className="px-4 text-center">
        <Heading as="h3" className="mb-2 text-xl font-bold">{title}</Heading>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className="flex w-full items-center justify-center py-16">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-y-8 md:gap-y-0">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
