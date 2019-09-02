import React from "react"
import PropTypes from "prop-types"
import useWeather from "./useWeather";

const Shibuya = (props) => {
  const weather = useWeather();

  return (
    <p>{props.message}: {weather}</p>
  )
}

Shibuya.propTypes = {
  message: PropTypes.string
};

export default Shibuya
