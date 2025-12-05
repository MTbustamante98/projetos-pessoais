import React from "react";
import styles from "./Modal.module.css";
import { Link } from "react-router-dom";

const ModalLink = ({ to, label }) => {
  return (
    <Link to={to}>
      <div className={`${styles.boxModal} font-p-modal-xl`}>{label}</div>
    </Link>
  );
};

export default ModalLink;
