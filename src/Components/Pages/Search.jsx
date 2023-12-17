// Import necessary dependencies and components
import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import ImgNotFound from "../../assets/NotFound_Search.png";
import Default_Search from "../../assets/Default_Search.jpg";
import ImgMedicin from "../../assets/medicin.png";
import ImgBank from "../../assets/bank.jpg";
import ImgTaxi from "../../assets/taxi.png";
import { Link } from "react-router-dom";
export const items = [
    {
        key: "medicin",
        nbr: 0,
        title: "Aspirin",
        description: "Medical Things",
        image: ImgMedicin,
    },
    {
        key: "bank",
        nbr: 1,
        title: "Bank of America",
        description: "Bank Things",
        image: ImgBank,
    },
    {
        key: "taxi",
        nbr: 2,

        title: "Yellow Taxi",
        description: "taxi Things",
        image: ImgTaxi,
    },
    {
        key: "medicin",
        nbr: 3,
        title: "Paracetamol",
        description: "Medical Things",
        image: ImgMedicin,
    },
    {
        key: "bank",
        nbr: 4,
        title: "Wells Fargo",
        description: "Medical Things",
        image: ImgBank,
    },
    // Add more items with different key-value pairs and images
];
// Define the Search component
export default function Search() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredItems = items.filter((item) =>
        item.key.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div>
                <div className="flex justify-center gap-5 p-2">
                    <div
                        className="p-2 rounded  cursor-pointer "
                        style={{ boxShadow: "0px 0px 5px 0px gray" }}
                    >
                        <Link to={"/"}>
                            <IoMdArrowRoundBack className="text-3xl text-[#0600ff]" />
                        </Link>
                    </div>
                    <div className="flex items-center bg-white rounded-full overflow-hidden shadow-xl focus-within:ring-2 focus-within:ring-[#0600ff]">
                        <div className="flex-1 md:w-[450px]">
                            <input
                                id="search_input"
                                type="text"
                                className="w-full px-4 py-2 focus:outline-none"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center justify-center p-2">
                            <CiSearch className="text-gray-500 text-3xl cursor-pointer" />
                        </div>
                    </div>
                </div>

                {(filteredItems.length === 0 || searchTerm === "") && (
                    <>
                        <div className="flex justify-center items-center flex-col h-[60vh] mt-10">
                            <img
                                src={
                                    searchTerm === ""
                                        ? Default_Search
                                        : ImgNotFound
                                }
                                alt="Not Found"
                                className="w-[200px]"
                            />
                            {searchTerm === "" ? (
                                <p className="text-2xl font-bold m-4">
                                    Faites Votre Recherche Parmi Les 5176
                                    Dossier
                                </p>
                            ) : (
                                <p className="text-2xl font-bold">
                                    No results found
                                </p>
                            )}
                        </div>
                    </>
                )}
                {filteredItems.length > 0 && searchTerm !== "" && (
                    <div className="flex flex-col gap-4 p-4 md:w-[60%] m-auto">
                        <div className=" font-semibold text-sm underline">
                            {filteredItems.length} Dossier Trouvées{" "}
                        </div>
                        {filteredItems.map((item, index) => (
                            // Pass data to the Company component via props
                            <div
                                className="w-[100%] rounded-xl"
                                style={{ boxShadow: "0px 0px 5px 0px gray" }}
                            >
                                <Link to={`/Search/${item.nbr}`} key={index}>
                                    <div className="bg-white p-3 rounded-xl flex justify-start items-center gap-5">
                                        <img
                                            src={item.image}
                                            alt={item.key}
                                            className="w-10 h-10 object-cover rounded-full"
                                        />
                                        <div className="flex flex-col">
                                            <p className="font-semibold">
                                                {item.title}
                                            </p>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
