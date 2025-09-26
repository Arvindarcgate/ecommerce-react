import React from "react";
import { Truck, Shield, Zap } from "lucide-react";
import Container from "../../../style/component/ui/Container";
import styles from "./why.module.css";

const Why: React.FC = () => {
  return (
    <div className={styles.why}>
      <Container>
        <h3 className={styles.sectionTitle}>Why Choose Us</h3>
        <p className={styles.sectionSubtitle}>
          Experience the difference with our premium service
        </p>
        <div className={styles.whyFeatures}>
          <div className={styles.feature}>
            <Truck className={styles.icon} />
            <h4>Free Shipping</h4>
            <p>
              Free delivery on orders over $50 with our express shipping network
            </p>
          </div>
          <div className={styles.feature}>
            <Shield className={styles.icon2} />
            <h4>Secure Payment</h4>
            <p>
              Your payment information is protected with bank-level security
            </p>
          </div>
          <div className={styles.feature}>
            <Zap className={styles.icon3} />
            <h4>Fast Delivery</h4>
            <p>Get your orders in 2-3 business days anywhere in the country</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Why;
