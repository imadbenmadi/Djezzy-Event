import React from "react";
import "./App.css";
import { Outlet } from "react-router";
import { FaHome } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";
import { FaSave } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

export default function App() {
    return (
        <>
            <div className=" relative z-0 overflow-auto h-[100vh]">
                <Outlet />
            </div>
            <div
                className=" bg-gray-100  text-white font-bold w-full h-[40px] md:h-[60px] absolute bottom-0 flex  items-center justify-around gap-4 z-50
      "
                    style={{ boxShadow: "0px 0px 10px 0px #bdbdbd" }}
                
            >
                <div><FaHome className=" text-2xl text-[#0600ff]"/></div>
                <div><IoNotifications className=" text-2xl text-[#0600ff]"/></div>
                <div><MdOutlineCategory className=" text-2xl text-[#0600ff]"/> </div>
                <div><FaSave className=" text-2xl text-[#0600ff]"/> </div>
                <div><IoMdSettings className=" text-2xl text-[#0600ff]"/> </div>
            </div>
        </>
    );
}
