import styles from "./Components.module.scss";

const MovingIcons = () => {
  const iconUrl =
    "https://skillicons.dev/icons?i=js,ts,html,css,scss,express,react,nodejs,nestjs,mysql,mongodb,linux,git,graphql,firebase";

  return (
    <div className={styles.iconContainer}>
      <div className={styles.movingIcons}>
        <img src={iconUrl} alt="My Skills" className={styles.icon} />
        <img src={iconUrl} alt="My Skills" className={styles.icon} />
      </div>
    </div>
  );
};

export default MovingIcons;
