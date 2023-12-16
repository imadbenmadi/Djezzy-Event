import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

export default function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const items = [
        { key: "medicin", value: "Aspirin" },
        { key: "bank", value: "Bank of America" },
        { key: "taxi", value: "Yellow Taxi" },
        { key: "medicin", value: "Paracetamol" },
        { key: "bank", value: "Wells Fargo" },
        // Add more items with different key-value pairs
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
            <div className="grid grid-cols-3 gap-4 p-4">
                {filteredItems.map((item, index) => (
                    <div key={index} className="bg-gray-200 p-3 rounded">
                        <p className="font-bold">Key: {item.key}</p>
                        <p>Value: {item.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
