import RestaurantCard, {PromotedRestaurantCard} from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const RestaurantCardPromoted = PromotedRestaurantCard(RestaurantCard);
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");
    const [filteredList,setFilteredList] = useState([]);
    //console.log("headerrr", listOfRestaurants);
    useEffect(() =>
    {
        fetchData();
    }, [])
    const fetchData = async () => {
        const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
        const json = await data.json();
        //console.log(json);
        setListOfRestaurants(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
        return (
            <h1>Looks you'r offline!! Please check your internet connection.</h1>
        )
    }
    const {loggedInUser, setUserName} = useContext(UserContext);
    return listOfRestaurants.length===0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex items-center">
                <div className="search m-4 p-4">
                    <input type="text" data-testid="searchInput" className="search-box border-2" value={searchText}
                    onChange={(e) => {setSearchText(e.target.value)}}/>
                    <button className="m-2 p-2 bg-gray-50 rounded-lg" onClick={() => {
                        const filteredList=listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredList(filteredList);
                    }}>search</button>
                </div>
                <div>
                    <button className="filter-btn m-2 p-2 bg-gray-50 rounded-lg"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.3);
                        setFilteredList(filteredList);
                    } }
                    >
                        Top Rated Restaurants
                    </button>

                    <button className="reset-btn m-2 p-2 bg-gray-50 rounded-lg" onClick={() => setFilteredList(listOfRestaurants)}>
                    reset
                    </button>
                </div>
                <div>
                    <label>UserName :</label>
                    <input className="border border-black p-2" value={loggedInUser} onChange={(e) => {setUserName(e.target.value)}}/>
                </div>
                
            </div>
            <div className="Res-Container flex flex-wrap">
                {
                    filteredList.map((restaurant)=> (
                        <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}>
                            {(restaurant?.info?.avgRating>4.4)?<RestaurantCardPromoted resData={restaurant}/>:<RestaurantCard resData={restaurant}/>}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;