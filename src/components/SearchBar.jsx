import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";

const SearchBar = ({value, isLoading, handleSubmit, onChange}) => {

    return(
        <form onSubmit={handleSubmit}>
            <input
            value={value}
            disabled= {isLoading}
            onChange={onChange}
            placeholder="Search Recipes..."
            className="form-control"/>
            <button className="btn" type="submit" disabled= {isLoading}>{isLoading? "Searching ...": "Search"}</button>
        </form>
    )
}

export default SearchBar