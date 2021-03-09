import Button from "./Button";
import styles from "../styles/ContentItem.module.css";

const ContentItem = ({ img, BoldText, NormalText, ButtonLabel, src }) => {
  return (
    <div className={styles.container}>
      {img && <img className={styles.Img} src={src} />}

      <span className={styles.BoldText}>{BoldText}</span>

      <span className={styles.NormalText}>{NormalText}</span>

      <Button>{ButtonLabel}</Button>
    </div>
  );
};

export default ContentItem;
