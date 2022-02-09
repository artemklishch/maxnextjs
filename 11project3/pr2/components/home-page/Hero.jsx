import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/avatar3.jpg"
          alt="Artem imgae"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi I am Artem</h1>
      <p>
        I blog about development - especialy framework Angular or React or Vue
      </p>
    </section>
  );
};

export default Hero;
