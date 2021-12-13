import React from "react";
import styles from "./CSSModule.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const CSSMoudle = () => {
  return (
    <div className={cx("wrapper", "inverted")}>
      하이 저는 <span className="something">CSSModule!</span>
      <div className="wrapper">하이용</div>
    </div>
  );
};
export default CSSMoudle;
