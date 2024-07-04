import Salad from "/assets/home/salad.png";
import { PlayIcon } from "../../public/assets/home/PlayIcon";
import useIntersectionObserver from "../components/useIntersectionObserver";

function Home() {
  const [containerRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <section
      className="home"
      ref={containerRef}
      className={`section ${isVisible ? "visible" : ""}`}
    >
      <div className="home__container">
        <div className="home__info">
          <p className="tag home__tag">Fast Delivery</p>
          <h1 className="home__title">
            Discover Your Favourite Food and <span>Test Forever</span>
          </h1>
          <p className="home__desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s.
          </p>

          <div className="home__group">
            <a href="/" className="btn home__btn">
              Get Started
            </a>
            <a className="home__play-btn" href="/">
              <PlayIcon />
              <p className="home__play-btn-desc">More Information</p>
            </a>
          </div>
        </div>

        <img src={Salad} alt="Salad" className="home__img" />
      </div>
    </section>
  );
}

export default Home;
