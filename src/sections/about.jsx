import Delivery from "/assets/about/delivery.png";
import useIntersectionObserver from "../components/useIntersectionObserver";

function About() {
  const [containerRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="about"
      ref={containerRef}
      className={`section about ${isVisible ? "visible" : ""}`}
    >
      <div className="container about__container">
        <img src={Delivery} alt="Delivery" className="about__img" />

        <div className="about__info">
          <p className="tag about__tag">Our Target</p>
          <h2 className="about__title">
            We Earn Your Trust and are Diligent in Your Case
          </h2>
          <p className="about__desc">
            When an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting,{" "}
          </p>

          <p className="about__desc">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>

          <a href="/" className="btn about__btn">
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
