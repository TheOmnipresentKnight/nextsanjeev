import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaGit, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <a
          href="https://www.facebook.com/YourPage"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <i className="fab fa-facebook-square"></i> */}
          <FaFacebook />
        </a>
        <a
          href="https://twitter.com/YourPage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/YourPage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/YourPage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>{" "}
        <a
          href="https://www.github.com/in/YourPage"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      <div className={styles.contactInfo}>
        <p>Email: example@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 1234 Street Name, City, Country</p>
      </div>
      <div className={styles.copyright}>
        <p>&copy; 2023 Sanjeev Gunasekaran Pvt. Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
