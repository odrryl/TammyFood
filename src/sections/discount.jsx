import Phone from "/assets/discount/phone.png";
import { GoogleStore } from "../../public/assets/discount/GoogleStore";
import { AppStore } from "../../public/assets/discount/AppStore";
import useIntersectionObserver from "../components/useIntersectionObserver";

function Discount() {
  const [containerRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      className={`section discount ${isVisible ? "visible" : ""}`}
      ref={containerRef}
    >
      <div className="container discount__container">
        <div className="discount__info">
          <h2 className="title">To Get 15% Discount Download The App</h2>
          <p className="desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s.
          </p>

          <div className="discount__group">
            <a href="/">
              <GoogleStore />
            </a>
            <a href="/">
              <AppStore />
            </a>
          </div>
        </div>
        <img src={Phone} alt="" className="discount__img" />
      </div>
    </section>
  );
}

export default Discount;
