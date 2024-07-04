import { OrderIcon } from "../../public/assets/service/OrderIcon";
import { DeliveryIcon } from "../../public/assets/service/DeliveryIcon";
import { PaymentIcon } from "../../public/assets/service/PaymentIcon";
import { UpIcon } from "../../public/assets/service/UpIcon";
import { DownIcon } from "../../public/assets/service/DownIcon";
import PropTypes from "prop-types";
import useIntersectionObserver from "../components/useIntersectionObserver";

function Service() {
  const [containerRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const Step = ({ icon, title, desc, className }) => (
    <div className={`step ${className}`}>
      <div className="icon-wrapper">{icon}</div>
      <h3 className="service__title">{title}</h3>
      <p className="service__desc">{desc}</p>
    </div>
  );

  Step.propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    className: PropTypes.string,
  };

  return (
    <section
      className={`service section ${isVisible ? "visible" : ""}`}
      id="service"
      ref={containerRef}
    >
      <div className="container service__container">
        <h2 className="title">How it works</h2>
        <p className="desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry
        </p>

        <div className="steps-container">
          <Step
            icon={<OrderIcon />}
            title="Order Now"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry"
          />
          <div className="dotted-line down-icon">
            <DownIcon />
          </div>
          <Step
            icon={<DeliveryIcon />}
            title="Get Delivery"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry"
            className="step-middle"
          />
          <div className="dotted-line up-icon">
            <UpIcon />
          </div>
          <Step
            icon={<PaymentIcon />}
            title="Payment"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry"
          />
        </div>
      </div>
    </section>
  );
}

export default Service;
