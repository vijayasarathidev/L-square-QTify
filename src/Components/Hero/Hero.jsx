import React from "react";
import Headphones from "../../Assets/headphone.png";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1> Over thousands podcast episodes</h1>
      </div>
      <div>
        <img src={Headphones} alt="Headphones" weigth={212} />
      </div>
    </div>
  );
}

export default Hero;
