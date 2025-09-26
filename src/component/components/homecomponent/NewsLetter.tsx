// src/components/Newsletter.tsx
import React from "react";
import Container from "../../../style/component/ui/Container";
import styles from "./newsletter.module.css"; // adjust path

const Newsletter: React.FC = () => {
  return (
    <div className={styles.newsletter}>
      <Container>
        <h3>Stay Updated</h3>
        <p>
          Subscribe to our newsletter and be the first to know about new
          products, exclusive deals, and special offers.
        </p>
        <div className={styles.form}>
          <input
            className={styles.newsmail}
            type="email"
            placeholder="Enter your email"
          />
          <button className={styles.newsbutton}>Subscribe</button>
        </div>
      </Container>
    </div>
  );
};

export default Newsletter;
