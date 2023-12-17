import React from 'react'
import ImgBank from "../../assets/bank.jpg";
export default function Recomondation() {
  return (
      <div className=' mt-10'>
          <div className=' text-center font-bold text-xl'>Recomondation</div>
          <div
              className="relative w-[300px] h-[200px] m-auto mt-2 bg-white rounded-xl flex flex-col "
              style={{ boxShadow: "0px 0px 5px 0px gray" }}
          >
              <img
                  src={ImgBank}
                  alt=""
                  className="h-[120px] object-cover  rounded-tl-xl rounded-tr-xl"
              />
              <img
                  src={ImgBank}
                  alt=""
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[60px] object-contain rounded-full"
                  style={{ boxShadow: "0px 0px 50px 0px gray" }}
              />
              <div className=" text-sm p-2">
                  <div className="  font-semibold"> Fatoura App</div>
                  <div>
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Numquam error eve
                  </div>
              </div>
          </div>
      </div>
  );
}
