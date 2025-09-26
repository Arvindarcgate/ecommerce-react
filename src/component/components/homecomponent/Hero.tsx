// src/components/Hero.tsx
import React from "react";
import { ArrowRight } from "lucide-react";
import Container from "../../../style/component/ui/Container"; // adjust path if needed
import styles from "./hero.module.css"; // create a CSS module for hero

const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      <div id="herocontent">
        <Container>
          <h1>Discover Amazing Products</h1>
          <p>
            Shop the latest trends with unbeatable prices and fast delivery.
            Your <br />
            perfect purchase is just a click away.
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.heroPrimary}>
              Shop Now <ArrowRight />
            </button>
            <button className={styles.heroSecondary}>Browse Products</button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
