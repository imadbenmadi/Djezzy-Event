import React from "react";
import ImgBank from "../../assets/taxi.png";

export default function Adds() {
    return (
        <div className="flex flex-col justify-center items-center mt-10 rounded-lg overflow-hidden">
            <div className="text-lg font-semibold ">Advertisement</div>
            <img src={ImgBank} alt="" className="w-[200px] mt-3 rounded-[50px]" />
        </div>
    );
}
