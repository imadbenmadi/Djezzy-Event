import React from "react";

export default function Item(props) {
    // Check if location and state exist
    if (!props.location || !props.location.state) {
        // Handle the case when the data is not available
        return <div>Data not available</div>;
    }

    // Access the props data
    const { location } = props;
    const item = location.state.item;

    // Now 'item' contains the data passed from the Search component

    return (
        <div>
            <h1>Item Details</h1>
            <p>Key: {item.key}</p>
            <p>Value: {item.value}</p>
            {/* Add more details based on your item data structure */}
        </div>
    );
}
