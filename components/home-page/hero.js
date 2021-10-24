import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/georgiagives.png'
          alt='Georgia Gives'
          width={300}
          height={300}
        />
      </div>
      <h1>Donate via Georgia Gives</h1>
      <p>
        Neighborhood Works, Inc. is under construction. Please be patient with us while we update our site.
      </p>
    </section>
  );
}

export default Hero;
