import React from 'react'
import { TbWorld } from "react-icons/tb";
import { MdAttachMoney } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { GoFileDirectoryFill } from "react-icons/go";
import { FaLink } from "react-icons/fa6";

export default function Item_Detail() {
 

  return (
      <div
          style={{ boxShadow: "0px 0px 8px 0px gray" }}
          className="p-2 rounded-lg w-full md:w-[50%] m-auto mt-[50px]"
      >
          <div
              className=" text-xl underline
           font-semibold mt-2 mb-7"
          >
              Detail
          </div>
          <div className=" flex gap-2">
              <div>
                  <TbWorld className=" text-2xl text-purple-500" />
              </div>
              <div>
                  <div className=" text-xl font-semibold">Position</div>
                  <div>National</div>
              </div>
          </div>

          <div className=" flex gap-2">
              <div>
                  <MdAttachMoney className=" text-2xl text-purple-500" />
              </div>
              <div>
                  <div className=" text-xl font-semibold">Fairs</div>
                  <div>inclut fairs du dossier </div>
              </div>
          </div>

          <div className=" flex gap-2">
              <div>
                  <FaCalendarAlt className=" text-2xl text-purple-500" />
              </div>
              <div>
                  <div className=" text-xl font-semibold">
                      Date D'expiration
                  </div>
                  <div>04-11-2023 </div>
              </div>
          </div>

          <div className=" flex gap-2">
              <div>
                  <GoFileDirectoryFill className=" text-2xl text-purple-500" />
              </div>
              <div>
                  <div className=" text-xl font-semibold">Type de dossier</div>
                  <div>Dossier Administratif</div>
              </div>
          </div>

          <div className=" flex gap-2">
              <div>
                  <FaLink className=" text-2xl text-purple-500" />
              </div>
              <div>
                  <div className=" text-xl font-semibold">Site web</div>
                  <div>https://www.google.com</div>
              </div>
          </div>
      </div>
  );
}
