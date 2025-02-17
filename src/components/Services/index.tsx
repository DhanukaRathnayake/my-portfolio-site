// Libraries
import React, { useState, FunctionComponent } from "react";
import {
  HeroText,
  Highlight,
} from "../../components/Common/TextGenerateEffects/HeroText";
import { GiCheckMark } from "react-icons/gi";

// Styles
import styles from "./index.module.css";

// Data
import { ServicesList } from "../../data/services";
import { useRouter } from "next/router";
import { TypeService } from "@/types/service";
import Image from "next/image";

// Define the type for a service
interface Props {
  services: TypeService[] | [];
}

const Services: FunctionComponent<Props> = ({ services }) => {
  const router = useRouter();

  const handleServiceView = (service: TypeService) => {
    router.push(`/services/${service.slug}`);
  };

  return (
    <div className={styles.servicesContainer}>
      {/* Title and Subtitle */}
      <div className={styles.servicesHeader}>
        <h2 className={styles.servicesTitle}>
          <HeroText>
            My Service <Highlight>Packages</Highlight>
          </HeroText>
        </h2>
        <p className={styles.servicesSubtitle}>
          Choose the perfect plan tailored to your needs
        </p>
      </div>

      {/* Service Packages Grid */}
      <div className={styles.servicePackagesGrid}>
        {services.map((service: TypeService, index: number) => (
          <div key={index} className={`${styles.serviceCard} primary-card`}>
            <div className={styles.serviceCardContent}>
              <div className={styles.imageContainer}>
                <Image
                  src={service.coverImageUrl}
                  alt="thumbnail"
                  layout="fill"
                  objectFit="cover"
                  className={styles.cardImage}
                />
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.excerpt}</p>

              {/* Call-to-Action Button */}
              <button
                className={`${styles.ctaButton} primary-button`}
                onClick={() => handleServiceView(service)}
              >
                More Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
