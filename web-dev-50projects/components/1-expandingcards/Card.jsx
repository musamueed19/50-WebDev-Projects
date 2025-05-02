import { useState } from 'react'

// import styles from module.css
import styles from "../../app/1-expandingcards/style.module.css";

const Card = ({ url, title, isActive, onClick }) => {
  
  // active card state
  // const [active, setActive] = useState();


  return (
    <div
      className={`${styles.panel} ${isActive && styles.active}`}
      style={{
        backgroundImage: `url(${url})`,
      }}
      onMouseOver={onClick}
    >
      <h3>{title}</h3>
    </div>
  );
}

export default Card