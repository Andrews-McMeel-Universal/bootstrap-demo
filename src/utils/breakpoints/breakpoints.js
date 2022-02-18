import getScssInt from "../../utils/getScssInt";
import styles from "./_breakpoints.module.scss";

const xs = {
  minWidth: 0,
  maxWidth: getScssInt(styles.var_breakpointSM) - 1,
};

const sm = {
  minWidth: getScssInt(styles.var_breakpointSM),
  maxWidth: getScssInt(styles.var_breakpointMD) - 1,
};

const md = {
  minWidth: getScssInt(styles.var_breakpointMD),
  maxWidth: getScssInt(styles.var_breakpointLG) - 1,
};

const lg = {
  minWidth: getScssInt(styles.var_breakpointLG),
  maxWidth: getScssInt(styles.var_breakpointXL) - 1,
};

const xl = {
  minWidth: getScssInt(styles.var_breakpointXL),
  maxWidth: getScssInt(styles.var_breakpointXXL) - 1,
};

const xxl = {
  minWidth: getScssInt(styles.var_breakpointXXL),
  maxWidth: 1000000000,
};

const phone = {
  minWidth: xs.minWidth,
  maxWidth: sm.maxWidth,
};

const tablet = {
  minWidth: md.minWidth,
  maxWidth: md.maxWidth,
};

const mobile = {
  minWidth: phone.minWidth,
  maxWidth: tablet.maxWidth,
};

const desktop = {
  minWidth: lg.minWidth,
  maxWidth: xxl.maxWidth,
};

const breakpoints = {
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  phone,
  tablet,
  mobile,
  desktop,
};

export default breakpoints;
