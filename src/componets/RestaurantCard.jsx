import { CDN_URL } from "../utils/constants";


const RestaurantCard = ({ resData }) => {
  const { name, avgRatingString, totalRatingsString, cuisines, areaName,cloudinaryImageId } =
    resData?.info;
  return (
    <div className="RestaurantCard">
      <img src={CDN_URL + cloudinaryImageId} alt="Cards" />

      <div className="rescard-information">
        <h1>{name}</h1>
        <div className="starrating">
          <div>{avgRatingString}</div>
          <div>{totalRatingsString}</div>
        </div>
        <div className="cusines">
          <small>{cuisines.join(",")}</small>
        </div>
        <div className="reslocation">
          <small>{areaName}</small>
        </div>
      </div>
    </div>
  );
};
export default RestaurantCard;
