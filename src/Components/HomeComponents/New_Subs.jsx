import React from 'react'

export default function New_Subs() {
  return (
      <div>
          <div className=" font-bold ml-2 ">Nos Partenaires Récents</div>
          <div className=" h-[160px] overflow-auto flex">
              <div className=" flex gap-2 p-2">
                  <div className=" w-[200px] h-[150px] bg-gray-200 rounded-md"></div>
                  <div className=" w-[200px] h-[150px] bg-gray-200 rounded-md"></div>
                  <div className=" w-[200px] h-[150px] bg-gray-200 rounded-md"></div>
                  <div className=" w-[200px] h-[150px] bg-gray-200 rounded-md"></div>
              </div>
          </div>
      </div>
  );
}
