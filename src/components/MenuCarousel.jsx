import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { menuItems } from "../helpers/data";
import { CartIcon } from "../../public/assets/menu/CartIcon";
import { ShareIcon } from "../../public/assets/menu/ShareIcon";

// Utility function to chunk array into subarrays of a specified size
const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const CustomPrevArrow = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="carousel-arrow carousel-arrow-prev"
  >
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40Z"
        fill="white"
      />
      <path
        d="M20 39.5C9.23045 39.5 0.5 30.7696 0.5 20C0.5 9.23045 9.23045 0.5 20 0.5C30.7696 0.5 39.5 9.23045 39.5 20C39.5 30.7696 30.7696 39.5 20 39.5Z"
        stroke="#EAECED"
        strokeMiterlimit="10"
      />
      <path
        d="M12.5086 20.173L17.5086 15.486C17.5729 15.4271 17.6569 15.3945 17.7441 15.3945C17.8312 15.3945 17.9152 15.4271 17.9796 15.486C18.0102 15.5141 18.0346 15.5482 18.0513 15.5863C18.0681 15.6243 18.0767 15.6654 18.0767 15.707C18.0767 15.7485 18.0681 15.7896 18.0513 15.8277C18.0346 15.8657 18.0102 15.8999 17.9796 15.928L13.5486 20.082H28.0756C28.1181 20.0796 28.1607 20.0859 28.2007 20.1005C28.2407 20.1151 28.2773 20.1377 28.3082 20.167C28.3392 20.1962 28.3638 20.2315 28.3807 20.2706C28.3976 20.3097 28.4062 20.3519 28.4062 20.3945C28.4062 20.4371 28.3976 20.4792 28.3807 20.5183C28.3638 20.5574 28.3392 20.5927 28.3082 20.622C28.2773 20.6512 28.2407 20.6738 28.2007 20.6885C28.1607 20.7031 28.1181 20.7094 28.0756 20.707H13.5466L17.9776 24.861C18.0082 24.8891 18.0326 24.9232 18.0493 24.9613C18.0661 24.9993 18.0747 25.0404 18.0747 25.082C18.0747 25.1235 18.0661 25.1646 18.0493 25.2027C18.0326 25.2407 18.0082 25.2749 17.9776 25.303C17.9132 25.3618 17.8292 25.3944 17.7421 25.3944C17.6549 25.3944 17.5709 25.3618 17.5066 25.303L12.5066 20.615C12.4761 20.5867 12.4518 20.5525 12.4352 20.5143C12.4187 20.4762 12.4103 20.4351 12.4104 20.3935C12.4106 20.352 12.4194 20.3109 12.4363 20.2729C12.4532 20.235 12.4778 20.2009 12.5086 20.173V20.173Z"
        stroke="#FEB918"
        strokeMiterlimit="10"
      />
    </svg>
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="carousel-arrow carousel-arrow-next"
  >
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40Z"
        fill="white"
      />
      <path
        d="M20 39.5C9.23045 39.5 0.5 30.7696 0.5 20C0.5 9.23045 9.23045 0.5 20 0.5C30.7696 0.5 39.5 9.23045 39.5 20C39.5 30.7696 30.7696 39.5 20 39.5Z"
        stroke="#EAECED"
        strokeMiterlimit="10"
      />
      <path
        d="M27.4914 20.173L22.4914 15.486C22.4271 15.4271 22.3431 15.3945 22.2559 15.3945C22.1688 15.3945 22.0848 15.4271 22.0204 15.486C21.9898 15.5141 21.9654 15.5482 21.9487 15.5863C21.9319 15.6243 21.9233 15.6654 21.9233 15.707C21.9233 15.7485 21.9319 15.7896 21.9487 15.8277C21.9654 15.8657 21.9898 15.8999 22.0204 15.928L26.4514 20.082H11.9244C11.8819 20.0796 11.8393 20.0859 11.7993 20.1005C11.7593 20.1151 11.7227 20.1377 11.6918 20.167C11.6608 20.1962 11.6362 20.2315 11.6193 20.2706C11.6024 20.3097 11.5938 20.3519 11.5938 20.3945C11.5938 20.4371 11.6024 20.4792 11.6193 20.5183C11.6362 20.5574 11.6608 20.5927 11.6918 20.622C11.7227 20.6512 11.7593 20.6738 11.7993 20.6885C11.8393 20.7031 11.8819 20.7094 11.9244 20.707H26.4534L22.0224 24.861C21.9918 24.8891 21.9674 24.9232 21.9507 24.9613C21.9339 24.9993 21.9253 25.0404 21.9253 25.082C21.9253 25.1235 21.9339 25.1646 21.9507 25.2027C21.9674 25.2407 21.9918 25.2749 22.0224 25.303C22.0868 25.3618 22.1708 25.3944 22.2579 25.3944C22.3451 25.3944 22.4291 25.3618 22.4934 25.303L27.4934 20.615C27.5239 20.5867 27.5482 20.5525 27.5648 20.5143C27.5813 20.4762 27.5897 20.4351 27.5896 20.3935C27.5894 20.352 27.5806 20.3109 27.5637 20.2729C27.5468 20.235 27.5222 20.2009 27.4914 20.173V20.173Z"
        stroke="#FEB918"
        strokeMiterlimit="10"
      />
    </svg>
  </button>
);

const MenuCarousel = () => {
  const getItemsPerSlide = () => {
    if (window.innerWidth <= 600) {
      return 1;
    } else if (window.innerWidth <= 1000) {
      return 4;
    } else {
      return 8;
    }
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chunkedItems = chunkArray(menuItems, itemsPerSlide);

  const handlePaginationClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carousel-container">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        selectedItem={currentSlide}
        onChange={(index) => setCurrentSlide(index)}
        renderIndicator={() => null} // Disable default indicators
      >
        {chunkedItems.map((chunk, chunkIndex) => (
          <div key={chunkIndex} className="container items-container">
            {chunk.map((item) => (
              <a href="/">
                <div key={item.id} className="item">
                  <img src={item.image} alt={item.title} className="item-img" />
                  <div className="item-rating">
                    {"★".repeat(item.rating)}
                    {"☆".repeat(5 - item.rating)}
                  </div>

                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-desc">{item.description}</p>
                  <div className="item-info">
                    <p className="item-price">${item.price.toFixed(2)}</p>
                    <div className="item-group">
                      <button>
                        <CartIcon />
                      </button>
                      <button>
                        <ShareIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        ))}
      </Carousel>
      <div className="custom-arrows-container">
        <CustomPrevArrow
          onClick={() => handlePaginationClick(currentSlide - 1)}
        />
        <div className="custom-pagination">
          {chunkedItems.map((_, index) => (
            <span
              key={index}
              className={`pagination-bullet ${
                index === currentSlide ? "selected" : ""
              }`}
              onClick={() => handlePaginationClick(index)}
            >
              {index + 1}
            </span>
          ))}
        </div>
        <CustomNextArrow
          onClick={() => handlePaginationClick(currentSlide + 1)}
        />
      </div>
    </div>
  );
};

export default MenuCarousel;
