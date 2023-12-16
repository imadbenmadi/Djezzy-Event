import React from "react";
import { CiSearch } from "react-icons/ci";
import Logo from "../../assets/Logoo.png";
import { Link } from "react-router-dom";
export default function NavBar() {
    return (
        <div className=" bg-white fixed items-center top-0 flex w-[100%] p-2 shadow-xl z-50 ">
            <div className=" ml-[40px]">
                <img src={Logo} alt="" className=" w-12" />
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

            <div
                style={{ boxShadow: "0px 0px 50px 0px gray" }}
                className="
             shadow-lg cursor-pointer p-2 rounded-full mr-[40px]"
            >
                <Link to={"/Search"}>
                    <CiSearch className=" text-3xl " />
                </Link>
            </div>
        </div>
    );
}
