'use client'

import { useState } from "react";

// import styles from module.css
import styles from "./style.module.css";

// import data
import { expandingCards } from "@/constants";
import Card from "@/components/1-expandingcards/Card";

const ExpandingCards = () => {
  // track active index
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.container}>
      {expandingCards.map((panel, index) => (
        <Card
          key={index}
          url={panel.url}
          title={panel.title}
          isActive={activeIndex === index}
          onClick={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
};

export default ExpandingCards;
