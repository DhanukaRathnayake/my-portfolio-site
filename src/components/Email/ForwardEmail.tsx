import {
  Html,
  Head,
  Body,
  Section,
  Text,
  Button,
} from "@react-email/components";
import { Info } from "@/data/info";

export function ForwardEmailTemplate({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  return (
    <Html>
      <Head />
      <Body style={styles.body}>
        <Section style={styles.container}>
          <div style={styles.header}>
            <img src={Info.logo} alt="Logo" style={styles.logo} />
          </div>
          <div style={styles.content}>
            <Text style={styles.heading}>New Contact Notification</Text>
            <Text style={styles.paragraph}>
              Hello {Info.firstName} {Info.lastName},
            </Text>
            <Text style={styles.paragraph}>
              You have received a new contact request from your portfolio
              website.
            </Text>
            <Text style={styles.paragraph}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={styles.paragraph}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={styles.paragraph}>
              <strong>Message:</strong>
            </Text>
            <Text style={styles.paragraph}>{message}</Text>
            <Button href={`mailto:${email}`} style={styles.button}>
              Reply to This Email
            </Button>
            <Text style={styles.footer}>
              © {new Date().getFullYear()} {Info.firstName} {Info.lastName}.
              All rights reserved.
            </Text>
          </div>
        </Section>
      </Body>
    </Html>
  );
}

const styles = {
  body: {
    margin: "0",
    padding: "0",
    fontFamily: "'Poppins', Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    color: "#333",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "50vh", // Full height to center properly
  },
  container: {
    maxWidth: "600px",
    margin: "20px",
    backgroundColor: "#ffffff",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    textAlign: "center" as const,
    overflow: "hidden",
  },
  header: {
    padding: "20px",
    backgroundColor: "#660099",
    textAlign: "center" as const,
    overflow: "hidden",
    width: "100%",
  },
  logo: {
    width: "120px",
    marginBottom: "10px",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center" as const,
    marginTop: "5px",
  },
  content: {
    padding: "20px",
  },
  paragraph: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#555",
    textAlign: "left" as const,
  },
  button: {
    display: "inline-block",
    margin: "20px 0",
    padding: "12px 24px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#660099",
    borderRadius: "5px",
    textDecoration: "none",
    textAlign: "center" as const,
  },
  footer: {
    textAlign: "center" as const,
    fontSize: "14px",
    color: "#777",
  },
};
