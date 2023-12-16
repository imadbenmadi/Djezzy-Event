import React from "react";
import { CiSearch } from "react-icons/ci";
import Logo from '../../assets/Logoo.png'  
export default function NavBar() {
    return (
        <div className=" fixed items-center top-0 flex w-[100%] p-2 shadow ">
            <div className=" mr-2">
                <img src={Logo} alt="" />
            </div>
            <div className=" flex flex-col w-[100%] text-center">
                <div className="  ">
                    Bienvenue
                    <span className=" ml-1 text-purple-500 font-semibold">
                        Geust
                    </span>
                </div>
                <div className=" font-semibold">Vos Dossier en un Clic</div>
            </div>

            <div className="
             shadow-lg cursor-pointer p-2 rounded-full">
                <CiSearch />
            </div>
        </div>
    );
}
