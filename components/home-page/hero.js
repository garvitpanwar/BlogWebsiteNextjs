import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/1.jpg"
          alt="Dagny"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Garvit</h1>
      <p>
        I post about web development - especially frontend frameworks 
        React.
      </p>
    </section>
  );
}

export default Hero;
