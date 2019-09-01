import React from "react"
import PropTypes from "prop-types"

const Shibuya = (props) => {
  return (
    <p>{props.message}</p>
  )
}

Shibuya.propTypes = {
  message: PropTypes.string
};

export default Shibuya
