import React from "react";
import Button from "./Button";
const btnList = [
  "All",
  "Compute Science",
  "ReactJs",
  "Programming",
  "Data Structures",
  "Algorithms",
  "Nodejs",
  
  "Full Stack",
];
const ButtonList = () => {
  const buttonList = btnList.map((val) => <Button key={val} text={val} />);
  return <div className="flex">{buttonList}</div>;
};

export default ButtonList;
