import ContentItem from "./ContentItem";
import styles from "../styles/ThreeColumn.module.css";

const ThreeColumn = ({ srcs, BoldTexts, NormalTexts, ButtonLabels }) => {
  const Ranges = [0, 1, 2];

  return (
    <div className={styles.container}>
      <ContentItem
        img
        src={srcs[0]}
        BoldText={BoldTexts[0]}
        NormalText={NormalTexts[0]}
        ButtonLabel={ButtonLabels[0]}
      />
      <ContentItem
        img
        src={srcs[1]}
        BoldText={BoldTexts[1]}
        NormalText={NormalTexts[1]}
        ButtonLabel={ButtonLabels[1]}
      />
      <ContentItem
        img
        src={srcs[2]}
        BoldText={BoldTexts[2]}
        NormalText={NormalTexts[2]}
        ButtonLabel={ButtonLabels[2]}
      />
    </div>
  );
};

export default ThreeColumn;
