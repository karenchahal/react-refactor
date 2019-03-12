import React from "react";

import css from "./Toggle.module.css";

const Toggle = props => {
  const { position } = props;
  return (
    <div
      className={`${css.container} ${position ? css.active : ""}`}
      onClick={props.onClick}
    >
      <div className={css.switch} />
    </div>
  );
};

export default Toggle;
