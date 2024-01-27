import Image from "next/image";
import { urlFor } from "../../../sanity";

export default function Reviewcard({ stars, title, review, name, img }) {
  return (
    <div className="w-full max-w-sm mx-10 px-6  mb-8  mx-auto bg-white  rounded-xl shadow-md ">
      <div>
        <div className="flex items-center border-b relative border-gray-100 border-solid pb-5 mb-5">
          <Image
            className="rounded-full mr-3 w-12 h-12"
            src={urlFor(img).url()}
            alt=""
            width={50}
            height={50}
          />
          <div className="relative">
            <p className="font-semibold text-gray-600 leading-none my-1 pl-2">
              {name}
            </p>
            <p className="font-medium text-sm text-gray-400">
              <div className="  text-xl font-semibold rounded-xl   leading-none flex items-center p-2 ">
                {[...Array(stars)].map((e, i) => (
                  <span className="text-blue-500  " key={i}>
                    ★
                  </span>
                ))}
              </div>
            </p>
          </div>
        </div>
        <div className="font-bold pb-4 text-xl">{title}</div>
        {review}
        <br />
      </div>
      <div className="flex justify-end py-2">
        <a href="https://www.facebook.com/mikewireelectrical/reviews">
          <Image src={"/facebook.svg"} height={25} width={25} />
        </a>
      </div>
      <div>
        <div className="flex items-center mt-2 " />
        <span className="text-white font-bold">{name}</span>
      </div>
    </div>
  );
}
