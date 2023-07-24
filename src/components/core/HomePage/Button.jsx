import { Link } from "react-router-dom";
import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

const Button = ({ children, active, linkto }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Link to={linkto}>
      <div
        data-aos='flip-up'
        data-aos-duration='400'
        data-aos-offset='100'
        className={`text-center text-[13px] sm:text-[16px] px-6 py-3 rounded-md font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] ${
          active ? "bg-yellow-50 text-black " : "bg-richblack-800"
        } hover:shadow-none hover:scale-95 transition-all duration-200 `}
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;
