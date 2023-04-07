import React from "react";
import { useNavigate } from "react-router-dom";
import "./OptFormStyles.css";

function OptFormButton({ children, ...restProps }) {
  const navigate = useNavigate();

  const onclickHandler = () =>{
    navigate('/register');
  }
  return (
    <div>
      <a className="optform-button" onClick={onclickHandler} {...restProps}>
        {children}
        <img
          className="optform-button-image"
          src="../images/icons/chevron-right.png"
          alt="Try Now"
        />
      </a>
    </div>
  );
}

export default OptFormButton;
