import React from "react";
import Swal from "sweetalert2";

export default function NewButtons() {
    function handleClick() {
        Swal.fire({
            html: '<span style="font-weight: bold;">We will contact you as soon as possible</span>',
            icon: "success",
            confirmButtonText: "12h Left",
            customClass: {
                confirmButton: "custom-confirm-button",
            },
        });
    }

    return (
        <div className="flex flex-col md:flex-row justify-center items-center my-10 gap-10">
            <div
                className="p-4 rounded-lg bg-[#0600ff] text-white font-bold cursor-pointer text-2xl"
                style={{ boxShadow: "0px 0px 5px 0px #bdbdbd" }}
                onClick={handleClick}
            >
                Assistance
            </div>
            <div
                className="p-4 rounded-lg bg-[#0600ff] text-white font-bold cursor-pointer text-2xl"
                style={{ boxShadow: "0px 0px 5px 0px #bdbdbd" }}
            >
                Financement
            </div>
        </div>
    );
}
