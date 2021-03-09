import ContentItem from "./ContentItem";
import styles from "../styles/TwoColumn.module.css";

const TwoColumn = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.FirstColumn}>
        <ContentItem
          BoldText={props.BoldText}
          NormalText={props.NormalText}
          ButtonLabel={props.ButtonLabel}
        />
      </div>

      <div className={styles.SecondColumn}>
        <img src={props.src} className={styles.Img} />
      </div>
    </div>
  );
};

export default TwoColumn;
