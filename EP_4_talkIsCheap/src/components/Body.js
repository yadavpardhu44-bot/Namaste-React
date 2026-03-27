import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    const [searchText, setSearchText] = useState("");
    return (
        <div className="body">
            <div className="search">
                <input type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                />
                <button className="search-btn"
                onClick={() => {
                    const searchRes = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setListOfRestaurants(searchRes);
                }}
                >Search</button>
            </div>
            <div className="filter">
                <button className="filter-btn"
                onClick={() => {
                    const filteredList = resList.filter((res) => res.info.avgRating > 4);
                    setListOfRestaurants(filteredList);
                } }
                >
                    Top Rated Restaurants
                </button>

                <button className="res-btn" onClick={() => setListOfRestaurants(resList)}>
                reset
                </button>
            </div>
            <div className="Res-Container">
                {
                    listOfRestaurants.map((restaurant)=> (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;