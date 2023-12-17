import React from "react";
import { items } from "../Pages/Search";
import { useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import Item_description from "./Item_description";
import Recomondation from "./Recomondation";
import Adds from "./Adds";
import Observation from "./observation";
export default function Item() {
    const { key } = useParams();
    const selectedItem = items[key];

    return (
        <div className=" relative md:w-[70%] md:m-auto flex flex-col justify-center pt-[50px] pb-[100px] ">
            <div
                className="p-2 rounded  cursor-pointer absolute top-5 left-5  "
                style={{ boxShadow: "0px 0px 5px 0px gray" }}
            >
                <Link to={"/Search"}>
                    <IoMdArrowRoundBack className="text-2xl text-purple-500" />
                </Link>
            </div>

            {selectedItem ? (
                <div className="">
                    <img
                        src={selectedItem.image}
                        alt=""
                        className=" w-[180px] m-auto rounded-full "
                        style={{ boxShadow: "0px 0px 20px 0px gray" }}
                    />
                </div>
            ) : (
                <div>
                    <img src="" alt="Not Found" />
                </div>
            )}
            <div className=" text-center pt-7 relative">
                <div className=" font-bold text-xl flex justify-center items-center gap-2">
                    {selectedItem.title}
                    <FaCheck className=" text-white p-1 bg-green-500 rounded-full" />
                </div>
                <div>{selectedItem.description}</div>
            </div>
            <Item_description />
            <div className=" flex flex-col-reverse gap-0 md:gap-10  md:flex-row justify-center items-center ">
                <Adds />
                <Recomondation />
            </div>
            <Observation/>
        </div>
    );
}
