import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  // const {  } = props;
  // console.log(props);

  return (
    <div className="RestaurantCard">
      <img src={ CDN_URL+resData?.info?.cloudinaryImageId} alt="Cards" />

      <div className="rescard-information">
        <h1>{resData?.info?.name}</h1>
        <div className="starrating">
          <div>{resData?.info?.avgRatingString}</div>
          <div>{resData?.info?.totalRatingsString}</div>
        </div>
        <div className="cusines">
          <small>{resData.info?.cuisines.join(",")}</small>
        </div>
        <div className="reslocation">
          <small>{resData?.info?.areaName}</small>
        </div>
      </div>
    </div>
  );
};
export default RestaurantCard;
