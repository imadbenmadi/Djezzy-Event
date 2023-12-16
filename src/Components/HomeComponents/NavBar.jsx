import React from "react";
import { CiSearch } from "react-icons/ci";

export default function NavBar() {
    return (
        <div className=" fixed top-0 flex w-[100%] p-2 shadow ">
            <div className=" mr-2">F </div>
            <div className=" flex flex-col w-[100%] text-center">
                <div className="  ">
                    Bienvenue
                    <span className=" ml-1 text-purple-500 font-semibold">
                        Geust
                    </span>
                </div>
                <div className=" font-semibold">Vos Dossier en un Clic</div>
            </div>

            <div>
                <CiSearch />
            </div>
        </div>
    );
}
