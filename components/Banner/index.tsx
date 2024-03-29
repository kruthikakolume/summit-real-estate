import { handleMoveToId } from 'utils';
import styles from './Banner.module.scss';
interface Props {
  imgSrc: string;
}

const Banner: React.FC<Props> = ({ imgSrc }) => {
  return (
    <section
      className={`${styles.banner} padding-wrapper complete`}
      style={{ backgroundImage: `url(${imgSrc})` }}>
      <div className={styles['banner-content']}>
        <h1>Premier Platform for Institutional Commercial Real Estate</h1>
        <p className={`${styles['large']} large`}>
          Efficient operations, no redundant fees, reduced expense impact, powered by community. Optimizing
          your real estate investments.
        </p>
        <div className={styles['button-container']}>
          <button className="ui-button-2 primary" onClick={() => handleMoveToId()}>
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
