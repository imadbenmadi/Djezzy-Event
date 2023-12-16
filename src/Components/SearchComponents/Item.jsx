// Item.js
import React from "react";

export default function Item(props) {
    // Check if location and state exist
    if (!props.location || !props.location.state) {
        // Handle the case when the data is not available
        return <div>Data not available</div>;
    }

    // Access the item data from props
    const item = props.location.state.item;

    return (
        <div>
            <h1>Item Details</h1>
            <p>Key: {item.key}</p>
            <p>Value: {item.value}</p>
            {/* Add more details based on your item data structure */}
        </div>
    );
}
