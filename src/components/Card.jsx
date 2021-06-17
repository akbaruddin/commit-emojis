import React from 'react';
import styles from './Card.module.css';
const Card = (props) => {
  const { emoji, name, code, entity, description } = props;
  return (
    <div className={styles.Card}>
      <div className={styles.Emo}>{emoji}</div>
      <div className="card-details">
        <div className={styles.Para}>
          <span className={styles.Title}>Name</span>
          <span className={styles.Code}>{name}</span>
        </div>
        <div className={styles.Para}>
          <span className={styles.Title}>Code</span>
          <span className={styles.Code}>{code}</span>
        </div>
        <div className={styles.Para}>
          <span className={styles.Title}>Entity</span>
          <span className={styles.Code}>{entity}</span>
        </div>
        <div className="card-para">
          <span className={styles.Title}>Description</span>
          <span className={styles.Code}>{description}</span>
        </div>
      </div>
    </div>
  )
}

export default Card;