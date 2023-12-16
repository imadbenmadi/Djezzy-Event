import React from "react";
import { items } from "../Pages/Search";
import { useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
export default function Item() {
    const { key } = useParams();
    const selectedItem = items[key];

    return (
        <div className=" relative w-[80%] m-auto flex flex-col justify-center pt-[50px] ">
            <div
                className="p-2 rounded  cursor-pointer absolute top-5 left-5  "
                style={{ boxShadow: "0px 0px 5px 0px gray" }}
            >
                <Link to={"/"}>
                    <IoMdArrowRoundBack className="text-2xl text-purple-500" />
                </Link>
            </div>

            {selectedItem ? (
                <div>
                    <img src={selectedItem.image} alt="" className=" w-[180px] m-auto rounded-full" />
                </div>
            ) : (
                <div>
                    <img src="" alt="Not Found" />
                </div>
            )}
        </div>
    );
}
