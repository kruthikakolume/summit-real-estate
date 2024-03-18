import { Grid } from '@mui/material';
import { SolutionType } from 'types/solution';
import styles from './PillarSolution.module.scss';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
const solutions: SolutionType[] = [
  {
    title: 'Facilitate Efficient Access to Capital',
    icon: <CachedOutlinedIcon htmlColor="#00838f" />,
    content:
      'Depth and breadth of capital pool allows for timely execution along risk profiles and across the capital stack.',
  },
  {
    title: 'Owner Always Maintains Control',
    icon: <KeyOutlinedIcon htmlColor="#00838f" />,
    content:
      'Including all major capital decisions. No forced sales, no meddling LPs. Investors benefit from streamlined reporting and analytical tools.',
  },
  {
    title: 'All With Lower Fees',
    icon: <PriceCheckIcon htmlColor="#00838f" />,
    content:
      'Solve your needs while managing fees. Relative to competitors, we’re up to 75% cheaper - we focus on providing innovative solutions to real problems,  without reinventing the wheel.',
  },
];

const SummitSolution = () => {
  return (
    <section id="solutions" className={styles['summit-solution']}>
      <div className={styles['summit-solution-header']}>
        <h3>The Summit Solution</h3>
      </div>
      <div className={styles['summit-solution-content']}>
        <Grid container rowSpacing={2} columnSpacing={2}>
          {solutions.map((solution, index) => (
            <Grid item xs={12} sm={12} md={4} lg={4} key={index}>
              <div className={styles['summit-solution-content-item']}>
                {solution.icon}
                {/* <h6>LOREM IPSUM</h6> */}
                <h3>{solution.title}</h3>
                <p>{solution.content}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default SummitSolution;
