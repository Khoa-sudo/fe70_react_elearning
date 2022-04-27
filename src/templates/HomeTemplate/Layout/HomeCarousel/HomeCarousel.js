
import React from "react";
import { Carousel } from 'antd';

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
export default function HomeCarousel() {
  return (
    <Carousel effect="fade">
      <div>
        <h3 style={contentStyle}>
          <img src="https://picsum.photos/1000" className="w-100" alt="khoa hoc" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src="https://picsum.photos/1200" className="w-100" alt="khoa hoc" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src="https://picsum.photos/1300" className="w-100" alt="khoa hoc" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src="https://picsum.photos/1500" className="w-100" alt="khoa hoc" />
        </h3>
      </div>
    </Carousel>
  );
}
