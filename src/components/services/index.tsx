// Libraries
import React, { FunctionComponent } from "react";

// Styles
import styles from "./index.module.css";

// Data
import services from "../../data/services.json";

// Define the type for a service
interface Service {
  title: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
}

// Define the type for the services data
interface ServicesData {
  items: Service[];
}

const Services: FunctionComponent = () => {
  const servicesData: ServicesData | null = services;

  return (
    <div className={styles.servicesContainer}>
      {/* Title and Subtitle */}
      <div className={styles.servicesHeader}>
        <h2 className={styles.servicesTitle}>My Service Packages</h2>
        <p className={styles.servicesSubtitle}>
          Choose the perfect plan for your needs
        </p>
      </div>

      {/* Service Packages Grid */}
      <div className={styles.servicePackagesGrid}>
        {servicesData.items.map((service: Service, index: number) => (
          <div key={index} className={`${styles.serviceCard} primary-card`}>
            <div className={styles.serviceCardContent}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
              <div className={styles.servicePrice}>
                <span className={styles.price}>{service.price}</span>
                <span className={styles.duration}>/{service.duration}</span>
              </div>
              <ul className={styles.serviceFeatures}>
                {service.features.map((feature, i) => (
                  <li key={i} className={styles.featureItem}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
