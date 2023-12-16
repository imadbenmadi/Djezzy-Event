import React from "react";
import NavBar from "../HomeComponents/NavBar";
import New_Subs from "../HomeComponents/New_Subs";
import Latest from "../HomeComponents/Latest";
export default function Home() {
    return (
        <div className="w-[100%]">
            <NavBar />
            <div className=" mt-[64px]"></div>
            <div className=" bg-gray-100">
                <New_Subs />
                <Latest />
            </div>
        </div>
    );
}
