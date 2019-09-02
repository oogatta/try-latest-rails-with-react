import React, { useState } from 'react';
import PropTypes from "prop-types"
import * as axios from "axios"

import Shibuya from "./Shibuya";
import useWeather from "./useWeather";

const HelloWorld = (props) => {
  const [count, setCount] = React.useState(0);
  const weather = useWeather();

  const click = async () => {
    const response = await axios('/posts.json');
    setCount(response.data.length)
  };

  return <div>
    <p>こんにちは: {props.greeting}: {weather} / {count}</p>
    <button onClick={click}>数を数える</button>

    <Shibuya message="こんばんわ"></Shibuya>
  </div>
};

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default HelloWorld
