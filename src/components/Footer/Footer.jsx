import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerCont}>
        <div className={styles.footerSection}>
          <h4>Customer Service</h4>
          <p>Open: 08.00 - 16.00</p>
          <p>E-Mail: fake@mail.clo</p>
        </div>
        <div className={styles.footerSection}>
          <h4>About us</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam soluta odit inventore alias incidunt nihil, rerum obcaecati laudantium repellat doloremque excepturi minus suscipit minima ullam!</p>
        </div>
        <div className={styles.footerSection}>
          <h4>Follow us</h4>
          <p className={styles.link}>Facebook</p>
          <p className={styles.link}>Snapchat</p>
          <p className={styles.link}>X</p>
          <p className={styles.link}>Instagram</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Awesome Store. All rights reserved.</p>
        <p>Made for learning purposes</p>
      </div>
    </footer>
  );
}
