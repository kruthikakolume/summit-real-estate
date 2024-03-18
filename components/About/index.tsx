import React from 'react';
import { Grid } from '@mui/material';
import { PersonType } from 'types/person';
import Person from './components/Person';
import styles from './About.module.scss';

const people: PersonType[] = [
  {
    id: 1,
    name: 'Alex Johnson',
    avatar: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png',
    role: 'Co-Founder & CEO',
    summary: 'Pioneering CEO with 15+ years in real estate, driving innovation and growth.',
    description: `With a visionary spirit and a relentless drive for innovation, Johnathan Reed stands at the helm of our company. Boasting over two decades of experience in technology and business management, Johnathan's leadership has been pivotal in setting strategic directions and fostering a culture of excellence. His profound expertise in scaling startups and his passion for sustainable solutions have shaped the company's mission and values. Outside the office, Johnathan is an avid mountain biker and a mentor to young entrepreneurs.`,
  },

  {
    id: 2,
    name: 'Sam Lee',
    avatar: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png',
    role: 'Chief Technology Officer',
    summary: 'Tech visionary leading with advanced solutions in real estate technology. ',

    description: `Sam Lee is at the helm of our technological revolution, integrating cutting-edge digital solutions into the very fabric of our real estate endeavors. With a robust background in software engineering coupled with a profound expertise in data analytics, Sam has been pivotal in developing proprietary platforms that enhance our operational efficiency and market analysis capabilities. His forward-thinking approach to tech in real estate has set new industry standards and has significantly enriched our service offerings.`,
  },

  {
    id: 3,
    name: 'Jordan Rivera',
    avatar: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png',
    role: 'Head of Investor Relations',
    summary: 'Market-savvy head ensuring investors find prime opportunities.',
    description: `Jordan Rivera stands as the vital bridge between our esteemed investors and the vast opportunities within the real estate market. Armed with an uncanny ability to decode market trends and a comprehensive understanding of investment landscapes, Jordan adeptly guides our partners towards lucrative ventures. Her strategic foresight and personalized approach to investor relations have fortified trust and fostered long-term partnerships, underpinning the financial backbone of our projects.`,
  },

  {
    id: 4,
    name: 'Casey Kim',
    avatar: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png',
    role: 'Director of Operations',
    summary: 'Operations director focused on surpassing project goals efficiently.',
    description: `Casey Kim orchestrates our projects with unmatched precision and efficiency, ensuring that each initiative not only meets but exceeds our high standards. With a keen focus on operational excellence and an extensive background in project management, Casey's expertise lies in streamlining processes, optimizing resource allocation, and maintaining stringent quality controls. Under Casey's guidance, our projects consistently stand as paragons of excellence, delivered on time and within budget, while pushing the boundaries of innovation in real estate development.`,
  },
];
const About = () => {
  const [show, setShow] = React.useState(false);

  const toggleShow = () => {
    setShow((value) => !value);
  };

  return (
    <section id="about-us" className={styles.about}>
      <div className={styles['about-header']}>
        <h3>About Us</h3>
        <p>A top-tier team deeply experienced in real estate, startups, and technology.</p>
      </div>
      <div className={styles['about-content']}>
        <Grid container columnSpacing={2} rowSpacing={2}>
          {people.map((person, index) => (
            <Grid item xs={12} sm={12} md={6} lg={6} key={index}>
              <Person person={person} styles={styles} show={show} toggleShow={toggleShow} />
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default About;
