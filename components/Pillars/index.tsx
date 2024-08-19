import { Grid } from '@mui/material';
import { useRouter } from 'next/router';
import SummitCard from './components/PillarCard';
import styles from './Pillar.module.scss';

interface iSummitCards {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  path?: string;
}

const summitCardsContent: iSummitCards[] = [
  {
    image: '/landingpage/institution-quality.png',
    title: 'Institutional Quality',
    subtitle: 'Due Diligence in Investment and Operations, Deal Sourcing',
    description:
      "Thorough examination of sponsors' teams, methodologies, systems, and historical performance, along with in-depth asset-specific information, to streamline the investment due diligence process.",
  },
  {
    image: '/landingpage/data-first.png',
    title: 'Data-First',
    subtitle: 'Standardized Reporting & Customizable Analytics',
    description:
      'Utilizing diverse data sources and current insights from property management and accounting systems to underpin a methodical approach to investing.',
  },
  {
    image: '/landingpage/network-driven.png',
    title: 'Network-Driven',
    subtitle: 'Discovery, Diligence, & Monitoring',
    description:
      'Fostering trust and enabling deals through a network of informed investors: engage in conversations about fresh and current investments, and track esteemed sponsors and investors.',
  },
  {
    image: '/landingpage/capital-structure.png',
    title: 'Capital Structure Solutions',
    subtitle: 'From Acquisition to Recapitalization',
    description:
      'A platform designed to match investor capital with different investment durations, addressing the liquidity requirements of both investors and sponsors.',
    path: '/sponsor',
  },
];

const Summits = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/sponsor');
  };

  return (
    <section className={styles.summits}>
      <h3>Our Foundation</h3>
      <div className={styles['summits-content']}>
        <Grid container>
          {summitCardsContent.map(({ title, subtitle, description, image, path }, index) => {
            const isLast = index === summitCardsContent.length - 1;
            return (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <div
                  onClick={isLast ? handleNavigate : undefined}
                  style={{ cursor: isLast ? 'pointer' : 'default', width: '100%' }}>
                  <SummitCard
                    title={title}
                    subtitle={subtitle}
                    description={description}
                    imageSrc={image}
                    styles={styles}
                  />
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </section>
  );
};

export default Summits;
