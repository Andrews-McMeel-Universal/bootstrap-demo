import React from "react";
import classNames from "classnames";

import AdUnit from "../modules/AdUnit";

import styles from "./SidebarTemplate.module.scss";

const SidebarTemplate = ({ children, fluid }) => (
  <div className={classNames(fluid ? "container-fluid" : "container")}>
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>
      <aside className={styles.side}>
        <AdUnit />
      </aside>
    </div>
  </div>
);

export default SidebarTemplate;
