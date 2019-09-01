import React, { useState } from 'react';
import PropTypes from "prop-types"
import * as axios from "axios"

import Shibuya from "./Shibuya";

const HelloWorld = (props) => {
  const [count, setCount] = React.useState(0);

  const click = () => {
    axios('/posts.json')
      .then((response) => {
        setCount(response.data.length)
      });
  };

  return <div>
    <p>こんにちは: {props.greeting} / {count}</p>
    <button onClick={click}>数を数える</button>

    <Shibuya message="こんばんわ"></Shibuya>
  </div>
};

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

export default HelloWorld
