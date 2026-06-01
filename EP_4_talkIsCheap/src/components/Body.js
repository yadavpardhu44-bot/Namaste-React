import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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
        const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
        const json = await data.json();
        console.log(json);
        setListOfRestaurants(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
        return (
            <h1>Looks you'r offline!! Please check your internet connection.</h1>
        )
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
                        <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;