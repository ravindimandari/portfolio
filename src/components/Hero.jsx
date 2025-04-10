import { useEffect, useRef } from 'react';

const Hero = () => {
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const nameEl = nameRef.current;
    const roleEl = roleRef.current;
    const descEl = descRef.current;
    const btnEl = btnRef.current;

    setTimeout(() => nameEl.classList.add('appear'), 300);
    setTimeout(() => roleEl.classList.add('appear'), 600);
    setTimeout(() => descEl.classList.add('appear'), 900);
    setTimeout(() => btnEl.classList.add('appear'), 1200);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="intro fade-in" ref={nameRef}>Hi, my name is</p>
        <h1 className="title fade-in" ref={roleRef}>Your Name</h1>
        <h2 className="subtitle fade-in" ref={descRef}>Software Engineer & Designer</h2>
        <p className="description fade-in" ref={descRef}>
          I'm a passionate software developer and designer with expertise in creating responsive 
          and user-friendly applications. Currently looking for software engineering internship opportunities.
        </p>
        <div className="hero-buttons fade-in" ref={btnRef}>
          <a href="#projects" className="btn btn-filled">View My Work</a>
          <a href="#contact" className="btn">Contact Me</a>
        </div>
      </div>
      <div className="hero-image">
        <div className="image-container">
          <img src="/api/placeholder/400/400" alt="Hero Image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;