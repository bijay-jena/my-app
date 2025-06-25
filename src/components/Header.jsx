import React from "react";

const Header = (props) => {
  console.log(props);
  return <div>Header {props.myDisplayCustomName}</div>;
};

export default Header;
