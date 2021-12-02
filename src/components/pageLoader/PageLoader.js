import React from "react";
import styles from "./pageLoader.module.css";
const PageLoader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}>
        {/* <img src="/assets/images/loading.gif" alt="" /> */}
        <img src="/assets/images/spinner2.gif" alt="" />
        {/* <img src="/assets/images/magnify.gif" alt="" /> */}
      </div>
    </div>
  );
};

export default PageLoader;
