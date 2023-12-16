import React from "react";
import "./App.css";
import { Outlet } from "react-router";
export default function App() {
    return (
        <>
            <div className=" relative z-0">
                <Outlet />
            </div>
            <div
                className=" bg-red-400 w-full h-[100px] absolute bottom-0 flex flex-row-reverse items-center justify-center gap-4 z-50
      "
            >
                <div>home </div>
                <div>Notificatiopn</div>
                <div>Categories </div>
                <div>Save </div>
                <div>Settings </div>
            </div>
        </>
    );
}
