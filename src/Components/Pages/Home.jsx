import React from "react";
import NavBar from "../HomeComponents/NavBar";
import New_Subs from "../HomeComponents/New_Subs";
import Latest from "../HomeComponents/Latest";
export default function Home() {
    return (
        <div className="w-[100%]">
            <NavBar />
            <div className=" mt-[64px]"></div>
            <New_Subs />
            <Latest/>
        </div>
    );
}
