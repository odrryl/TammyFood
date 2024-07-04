import MenuCarousel from "../components/MenuCarousel";
import React from "react";
import useIntersectionObserver from "../components/useIntersectionObserver";
function Menu() {
  const [containerRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <section
      className="menu"
      id="menu"
      ref={containerRef}
      className={`section ${isVisible ? "visible" : ""}`}
    >
      <div className="container menu__container">
        <h2 className="title">Our Delicious Dish</h2>
        <p className="desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry
        </p>
        <MenuCarousel />
      </div>
    </section>
  );
}

export default Menu;
