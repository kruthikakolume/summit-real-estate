import React from 'react';

interface Props {
  imageSrc: string;
  title: string;
  subtitle: string;
  description: string;
  styles: any;
}

const SummitCard: React.FC<Props> = ({ imageSrc, title, subtitle, description, styles }) => {
  return (
    <div className={styles['summit-card']}>
      <div className={styles['summit-card-content']}>
        <img className={styles['summit-card-image']} src={imageSrc} alt={title} />
        <div className={styles['summit-card-text']}>
          <h4>{title}</h4>
          <p className="large">{subtitle}</p>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SummitCard;
