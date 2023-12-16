import React from "react";
import { items } from "../Pages/Search";
import { useParams } from "react-router-dom";

export default function Item() {
    const { index } = useParams();

    return (
        <div>
            {items[index] && (
                <div>
                    <p>Key: {items[index].key}</p>
                    <p>Value: {items[index].value}</p>
                    {/* Add any other data you want to display */}
                </div>
            )}
        </div>
    );
}
