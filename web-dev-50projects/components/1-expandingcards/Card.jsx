import React from 'react'

// import styles from module.css
import styles from "../../app/1-expandingcards/style.module.css";

const Card = ({url, title}) => {
  return (
    <div
      className={styles.panel}
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <h3>{title}</h3>
    </div>
  );
}

export default Card