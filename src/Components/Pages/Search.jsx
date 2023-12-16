import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

export default function Search() {
    return (
        <div>
            <div className=" flex justify-center gap-5 p-2">
                <div
                    className="p-2 rounded
                 shadow-lg cursor-pointer"
                >
                    <IoMdArrowRoundBack />
                </div>
                <div className="flex w-[80%] justify-between items-center shadow rounded">
                    {/* <div className=" flex-[70%]">
                        <input type="text" className=" w-full" />
                    </div> */}
                    <div className="flex-[70%]">
                        <input
                            type="text"
                            className="p-1 w-full focus:outline-none focus:shadow-none"
                        />
                    </div>
                    <CiSearch className="flex-[5%]" />
                </div>
            </div>
        </div>
    );
}
