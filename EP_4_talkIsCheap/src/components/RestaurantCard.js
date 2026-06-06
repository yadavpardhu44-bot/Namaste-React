import { useContext, useState } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name,cuisines,avgRating,costForTwo,sla} = resData?.info
    const {loggedInUser} = useContext(UserContext);
    return(
        <div className="res-card m-4 p-4 w-54 rounded-2xl bg-gray-100 hover:bg-gray-200">
            <img className="res rounded-2xl" alt="res-logo" src={CDN_URL+resData.info.cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
            <h4>User : {loggedInUser}</h4>
        </div>
    )
}

export const PromotedRestaurantCard = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white rounded-lg p-2 m-2 text-sm">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;