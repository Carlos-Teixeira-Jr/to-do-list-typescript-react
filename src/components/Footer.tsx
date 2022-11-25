import styles from "./Footer.module.css";

interface Props{

}

const Footer = (props: Props) => {
  return (
      <footer className={styles.footer}>
        <p>
          <span>React + TS</span> @ 2022
        </p>
      </footer>
  )
}

export default Footer;