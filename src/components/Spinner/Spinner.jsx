import styles from "./Spinner.module.css";

export default function Spinner() {
  return (
    <div className={styles.spinnerCont} aria-label="Loading data">
      <div className={styles.loader}></div>
    </div>
  );
}
