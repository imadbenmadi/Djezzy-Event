import React from 'react'
import ImgMedicin from "../../assets/medicin.png";
import ImgBank from "../../assets/bank.jpg";
import ImgTaxi from "../../assets/taxi.png";
export default function New_Subs() {
  return (
      <div>
          <div className=" font-bold ml-2 ">Nos Partenaires Récents</div>
          <div className=" h-[250] overflow-auto flex">
              <div className=" flex gap-2 p-2">
                  <div
                      className="relative w-[300px] h-[200px] bg-gray-100 rounded-xl flex flex-col "
                      style={{ boxShadow: "0px 0px 5px 0px gray" }}
                  >
                      <img
                          src={ImgMedicin}
                          alt=""
                          className="h-[120px] object-cover  rounded-tl-xl rounded-tr-xl"
                      />
                      <img
                          src={ImgMedicin}
                          alt=""
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[60px] object-contain rounded-full"
                          style={{ boxShadow: "0px 0px 50px 0px gray" }}
                      />
                      <div className=" text-sm p-2">
                          <div className="  font-semibold"> Fatoura App</div>
                          <div>
                              {" "}
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Numquam error eve
                          </div>
                      </div>
                  </div>

                  <div
                      className="relative w-[300px] h-[200px] bg-gray-100 rounded-xl flex flex-col "
                      style={{ boxShadow: "0px 0px 5px 0px gray" }}
                  >
                      <img
                          src={ImgTaxi}
                          alt=""
                          className="h-[120px] object-cover  rounded-tl-xl rounded-tr-xl"
                      />
                      <img
                          src={ImgTaxi}
                          alt=""
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[60px] object-contain rounded-full"
                          style={{ boxShadow: "0px 0px 50px 0px gray" }}
                      />
                      <div className=" text-sm p-2">
                          <div className="  font-semibold"> Fatoura App</div>
                          <div>
                              {" "}
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Numquam error eve
                          </div>
                      </div>
                  </div>

                  <div
                      className="relative w-[300px] h-[200px] bg-gray-100 rounded-xl flex flex-col "
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
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Numquam error eve
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}
