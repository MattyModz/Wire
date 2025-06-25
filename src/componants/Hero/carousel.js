import React from "react";
import Image from "next/image";
function Carousel() {
  return (
    <div id="gallary" className="bg-gray-50 ">
      <div className="w-full  bg-gray-50 ">
        <div className=" bg-gray-50 ">
          <ul className="track bg-gray-50">
            <li className="track__item">
              <Image src={"/1.jpeg"} width={500} height={500} />
            </li>
            <li className="track__item">
              <Image src={"/2.jpeg"} width={500} height={500} />
            </li>
            <li className="track__item">
              <Image src={"/3.jpeg"} width={500} height={500} />
            </li>
            <li className="track__item">
              <Image src={"/4.jpeg"} width={500} height={500} />
            </li>
            <li className="track__item">
              <Image src={"/5.jpeg"} width={500} height={500} />
            </li>
            <li className="track__item">
              <Image src={"/6.jpeg"} width={500} height={500} />
            </li>
            <li className="track__item">
              <Image src={"/7.jpeg"} width={500} height={500} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
