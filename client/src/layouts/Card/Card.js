import React from 'react';
import styles from './Card.module.scss';

const Card = ({children}) => {
  return (
    <div className={styles['backdrop']}>
      <div className={styles['card']}>
      { children }
      </div>
    </div>
  )
};

export default Card;