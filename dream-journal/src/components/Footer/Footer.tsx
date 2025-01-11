import MingcuteAddLine from "../../icons/MingcuteAddLine.tsx";

import Button from "../Button/Button.tsx";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Button className={styles.button} shape="circle" sameWidthHeight>
        <MingcuteAddLine />
      </Button>
    </footer>
  );
}

export default Footer;
