import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo";
import Button from "../Button/Button";
import Search from "../Search/Search";

function Navbar() {
  return (
    <div className={styles.Navbar}>
      <Logo />
      <Search placeholder="Search an album of your choice" />
      <Button>Give Feedback</Button>
    </div>
  );
}

export default Navbar;
