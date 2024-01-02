import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className={styles.emptyPage}>
      <div className={styles.empty}>
        <h1>404 page :(</h1>
        <h1>Страница не найдена</h1>
        <Link to={"/"}>на главную</Link>
      </div>
    </div>
  );
};

export default NotFound;
