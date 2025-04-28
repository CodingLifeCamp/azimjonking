// import styles
import "./Header.css";
import styles from "./Header.module.css";

// import react-router-dom
import { Link } from "react-router-dom";
// import react icons
import { FaCrown } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";

const Header = () => {
  return (
    <header className={`container ${styles.header}`}>
      <Link to="/">
        <FaCrown className={styles.logoIcon} />
        <span>Azimjon King</span>
      </Link>

      <nav>
        <ul>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </nav>

      <button className={styles.btn}>
        <span>Resume</span>
        <FiDownload className={styles.downloadIcon} />
      </button>
    </header>
  );
};

export default Header;
