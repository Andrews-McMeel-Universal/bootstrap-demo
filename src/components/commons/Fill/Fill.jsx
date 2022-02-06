import React, { useRef, useLayoutEffect, useState } from "react";
import classNames from "classnames";

import styles from "./Fill.module.scss";

const Fill = ({ dark }) => {
  const ref = useRef();
  const [width, setWidth] = useState("");

  useLayoutEffect(() => {
    if (ref.current) {
      setWidth(`w: ${ref.current.offsetWidth}`);

      window.addEventListener("resize", () => {
        setWidth(`w: ${ref.current.offsetWidth}`);
      });
    }
  }, [ref]);

  return (
    <div
      ref={ref}
      className={classNames(styles.fill, dark && styles.fill__dark)}
    >
      <span>{width}</span>
    </div>
  );
};

export default Fill;
