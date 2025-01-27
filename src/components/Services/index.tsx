// Libraries
import React, { useState, FunctionComponent } from "react";

// Styles
import styles from "./index.module.css";

// Data
import { ServicesList } from "../../data/services";
import { useRouter } from "next/router";

// Define the type for a service
interface Service {
  title: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
}

const Services: FunctionComponent = () => {
  const router = useRouter();

  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    // Scroll to the contact form section
    // If not on the home page, navigate to the home page and scroll to the Contact Me section
    router.push("/#contact-section").then(() => {
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  };

  return (
    <div className={styles.servicesContainer}>
      {/* Title and Subtitle */}
      <div className={styles.servicesHeader}>
        <h2 className={styles.servicesTitle}>My Service Packages</h2>
        <p className={styles.servicesSubtitle}>
          Choose the perfect plan tailored to your needs
        </p>
      </div>

      {/* Service Packages Grid */}
      <div className={styles.servicePackagesGrid}>
        {ServicesList.map((service: Service, index: number) => (
          <div key={index} className={`${styles.serviceCard} primary-card`}>
            <div className={styles.serviceCardContent}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>

              {/* Features List */}
              <ul className={styles.serviceFeatures}>
                {service.features.map((feature, i) => (
                  <li key={i} className={styles.featureItem}>
                    <span className={styles.featureIcon}>✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price and Duration */}
              <div className={styles.servicePrice}>
                <span className={styles.price}>{service.price}</span>
                <span className={styles.duration}>/{service.duration}</span>
              </div>

              {/* Call-to-Action Button */}
              <button
                className={`${styles.ctaButton} primary-button`}
                onClick={() => handleServiceClick(service)}
              >
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
