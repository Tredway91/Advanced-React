import React from "react";
import Link from "next/link";

const Home = props => {
  return (
    <div>
      <p>Home!</p>
      {props.children}
    </div>
  );
};

export default Home;
