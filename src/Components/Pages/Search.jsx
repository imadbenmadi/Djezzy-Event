import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import ImgNotFound from "../../assets/NotFound_Search.png";
import ImgMedicin from "../../assets/medicin.png";
import ImgBank from "../../assets/bank.jpg";
import ImgTaxi from "../../assets/taxi.png";

export default function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const items = [
        { key: "medicin", value: "Aspirin", image: ImgMedicin },
        { key: "bank", value: "Bank of America", image: ImgBank },
        { key: "taxi", value: "Yellow Taxi", image: ImgTaxi },
        { key: "medicin", value: "Paracetamol", image: ImgMedicin },
        { key: "bank", value: "Wells Fargo", image: ImgBank },
        // Add more items with different key-value pairs and images
    ];

    const filteredItems = items.filter((item) =>
        item.key.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="flex justify-center gap-5 p-2">
                <div className="p-2 rounded shadow-lg cursor-pointer">
                    <IoMdArrowRoundBack />
                </div>
                <div className="flex w-[80%] justify-between items-center shadow rounded">
                    <div className="flex-[70%]">
                        <input
                            id="search_input"
                            type="text"
                            className="w-full focus:outline-none focus:shadow-none"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex-[5%] flex justify-center items-center">
                        <CiSearch />
                    </div>
                </div>
            </div>
            {filteredItems.length === 0 || searchTerm === "" ? (
                <div className="flex justify-center items-center h-[60vh]">
                    <img src={ImgNotFound} alt="Not Found" />
                </div>
            ) : (
                <div className="flex flex-col gap-4 p-4">
                    {filteredItems.map((item, index) => (
                        <div key={index} className="bg-gray-200 p-3 rounded flex justify-start items-center gap-5">
                            <img
                                src={item.image}
                                alt={item.key}
                                className="w-10 h-10 object-cover rounded-full "
                            />
                            <p>{item.value}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
