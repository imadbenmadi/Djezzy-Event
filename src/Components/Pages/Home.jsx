import React from "react";
import NavBar from "../HomeComponents/NavBar";
import New_Subs from "../HomeComponents/New_Subs";
import Latest from "../HomeComponents/Latest";
export default function Home() {
    return (
        <div className="w-[100%]">
            <NavBar />
            <div className="pt-[94px] bg-gray-100">
                <New_Subs />
                <Latest />
            </div>
        </div>
    );
}
