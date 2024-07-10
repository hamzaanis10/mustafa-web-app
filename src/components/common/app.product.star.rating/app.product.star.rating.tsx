import React from "react";
import { Rating, RatingProps } from "primereact/rating";
import "./app.product.star.rating.css";

interface AppProductStarRatingProps extends RatingProps{
   stars?: number;
   value?: number;

};

const AppProductStarRating:React.FC<AppProductStarRatingProps> = (props:any) => {
    const {value,stars} = props;

    return (
        <div className="card flex">
            <Rating value={value} stars={stars}  readOnly  cancel={false} />
        </div>
    );
}

export default AppProductStarRating;
