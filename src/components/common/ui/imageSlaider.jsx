import React from "react";
import ImageGallery from "react-image-gallery";
import PropTypes from "prop-types";

const ImageSlider = ({ img }) => {
  let slideImages = img.map((i) => ({ original: i }));
  return <ImageGallery items={slideImages} />;
};

ImageSlider.propTypes = {
  img: PropTypes.array,
};

export default ImageSlider;
