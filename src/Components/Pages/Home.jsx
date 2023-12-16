import React from "react";
import NavBar from "../HomeComponents/NavBar";
import New_Subs from "../HomeComponents/New_Subs";
export default function Home() {
    return (
        <div className="w-[100%]">
            <NavBar />
            <div className=" mt-[64px]"></div>
            <New_Subs />
        </div>
    );
}
