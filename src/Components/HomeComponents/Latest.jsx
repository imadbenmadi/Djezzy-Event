import React from "react";
import ImgMedicin from "../../assets/medicin.png";
import ImgBank from "../../assets/bank.jpg";
import ImgTaxi from "../../assets/taxi.png";

export default function Latest() {
    return (
        <div>
            <div className=" ml-2 mt-4 mb-[6] font-bold">derinier Dossier </div>
            <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 pb-[70px]">
                <div
                    className="w-full h-[60px] rounded flex gap-2 items-center p-8"
                    style={{ boxShadow: "0px 0px 4px #bdbdbd" }}
                >
                    <img
                        src={ImgMedicin}
                        alt=""
                        className=" w-12 rounded-full"
                        style={{ boxShadow: "0px 0px 4px #bdbdbd" }}
                    />
                    <div className=" text-sm  ">
                        <div className="font-semibold">
                            BNH - Banque National De L'habitat - Compte chéquee{" "}
                        </div>
                        <div>Banque & Assurancecc</div>
                    </div>
                </div>
                <div
                    className="w-full h-[60px] rounded flex gap-2 items-center p-8"
                    style={{ boxShadow: "0px 0px 4px #bdbdbd" }}
                >
                    <img
                        src={ImgTaxi}
                        alt=""
                        className=" w-12 rounded-full"
                        style={{ boxShadow: "0px 0px 4px #bdbdbd" }}
                    />
                    <div className=" text-sm  ">
                        <div className="font-semibold">
                            BNH - Banque National De L'habitat - Compte chéquee{" "}
                        </div>
                        <div>Banque & Assurancecc</div>
                    </div>
                </div>
                <div
                    className="w-full h-[60px] rounded flex gap-2 items-center p-8"
                    style={{ boxShadow: "0px 0px 4px #bdbdbd" }}
                >
                    <img
                        src={ImgBank}
                        alt=""
                        className=" w-12 rounded-full"
                        style={{ boxShadow: "0px 0px 4px #bdbdbd" }}
                    />
                    <div className=" text-sm  ">
                        <div className="font-semibold">
                            BNH - Banque National De L'habitat - Compte chéquee{" "}
                        </div>
                        <div>Banque & Assurancecc</div>
                    </div>
                </div>
                <div
                    className="w-full h-[60px] rounded flex gap-2 items-center p-8"
                    style={{ boxShadow: "0px 0px 4px #bdbdbd" }}
                >
                    <img
                        src={ImgTaxi}
                        alt=""
                        className=" w-12 rounded-full"
                        style={{ boxShadow: "0px 0px 4px #bdbdbd" }}
                    />
                    <div className=" text-sm  ">
                        <div className="font-semibold">
                            BNH - Banque National De L'habitat - Compte chéquee{" "}
                        </div>
                        <div>Banque & Assurancecc</div>
                    </div>
                </div>
                <div
                    className="w-full h-[60px] rounded flex gap-2 items-center p-8"
                    style={{ boxShadow: "0px 0px 4px #bdbdbd" }}
                >
                    <img
                        src={ImgBank}
                        alt=""
                        className=" w-12 rounded-full"
                        style={{ boxShadow: "0px 0px 4px #bdbdbd" }}
                    />
                    <div className=" text-sm  ">
                        <div className="font-semibold">
                            BNH - Banque National De L'habitat - Compte chéquee{" "}
                        </div>
                        <div>Banque & Assurancecc</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
