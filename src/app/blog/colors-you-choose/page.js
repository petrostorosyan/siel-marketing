import styles from "./article.module.scss";
import ArticleContent from "./articleContent/articleContent";

export default async function Page({ params: { id } }) {
  return (
    <div className={styles.articleContainer}>
      <div className={styles.headerBackground}></div>
      <div className={styles.contentBlock}>
        <div className={styles.contentBody}></div>
        <div className={styles.article}><ArticleContent /></div>
        <div className={styles.centerBackground}></div>
      </div>
    </div>
  );
}
