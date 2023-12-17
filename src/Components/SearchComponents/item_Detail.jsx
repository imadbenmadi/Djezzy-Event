import React from 'react'
import { TbWorld } from "react-icons/tb";

export default function Item_Detail() {
 

  return (
      <div
          style={{ boxShadow: "0px 0px 8px 0px gray" }}
          className="p-2 rounded-lg w-full md:w-[50%] m-auto mt-[50px]"
      >
          <div
              className=" text-xl underline
           font-semibold mt-2 text-purple-500 mb-7"
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
                  <TbWorld className=" text-2xl text-purple-500" />
              </div>
              <div>
                  <div className=" text-xl font-semibold">Position</div>
                  <div>National</div>
              </div>
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
                  <TbWorld className=" text-2xl text-purple-500" />
              </div>
              <div>
                  <div className=" text-xl font-semibold">Position</div>
                  <div>National</div>
              </div>
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
          
      </div>
  );
}
