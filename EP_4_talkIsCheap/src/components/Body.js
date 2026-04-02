import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");
    const [filteredList,setFilteredList] = useState([]);
    console.log("headerrr");
    useEffect(() =>
    {
        fetchData();
    }, [])
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.08950&lng=80.27390&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return listOfRestaurants.length===0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText}
                    onChange={(e) => {setSearchText(e.target.value)}}/>
                    <button onClick={() => {
                        const filteredList=listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredList(filteredList);
                    }}>search</button>
                </div>
                <button className="filter-btn"
                onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.3);
                    setFilteredList(filteredList);
                } }
                >
                    Top Rated Restaurants
                </button>

                <button className="reset-btn" onClick={() => setFilteredList(listOfRestaurants)}>
                reset
                </button>
            </div>
            <div className="Res-Container">
                {
                    filteredList.map((restaurant)=> (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;