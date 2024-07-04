import PropTypes from 'prop-types';


const SmoothScrollLink = ({ to, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.getElementById(to);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a href={`#${to}`} onClick={handleClick}>
      {children}
    </a>
  );
};

SmoothScrollLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SmoothScrollLink;
