import React from "react";
import { items } from "../Pages/Search";
import { useParams } from "react-router-dom";

export default function Item() {
    const { key } = useParams();
    // Find the item with the specified key
    const selectedItem = items[key];
    
    return (
        <div>
            {selectedItem && (
                <div>
                    <p>Key: {selectedItem.key}</p>
                    <p>Value: {selectedItem.value}</p>
                    {/* Add any other data you want to display */}
                </div>
            )}
        </div>
    );
}
