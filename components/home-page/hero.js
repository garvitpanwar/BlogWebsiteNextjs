import Image from "next/image";

import classes from "./hero.module.css";
import MainNavigation from "../layout/main-navigation";

function Hero() {
  return (
    <section className={{}}>
      <div className={{}}>
        <MainNavigation />
        <Image
          src="/images/bg3.jpg"
          alt="Dagny"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <h1 style={{ position: "absolute", top: 400, right: 40, width: "30%" }}>
        <div style={{ fontSize: 40 }}>Craft Your Digital Presence:</div> Explore
        Innovative Techniques and Cutting-Edge Trends in Web Development!
      </h1>
      {/* <h1>Hi, I'm Garvit</h1>
      <p>
        I post about web development - especially frontend frameworks React.
      </p> */}
    </section>
  );
}

export default Hero;
