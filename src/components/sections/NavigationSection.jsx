import React from "react";
import classNames from "classnames";

import Navigation from "../modules/Navigation";

import styles from "./NavigationSection.module.scss";

const NavigationSection = () => (
  <div className={classNames("container", styles.container)}>
    <div className="row">
      <div className={classNames("col-12", styles.buttons)}>
        <Navigation />
      </div>
    </div>
  </div>
);

export default NavigationSection;
