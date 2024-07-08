import React from 'react';
import "./app.coupon.card.css";

interface AppCouponCardProps {
    brand: string;
    discount: string;
    title: string;
    validity: string;
}

const AppCouponCard : React.FC<AppCouponCardProps> = (props: any) => {
    const { brand, discount, title, validity } = props;
    
    return (
        <div className="coupon">
            <div className="left">
                <div>{brand}</div>
            </div>
            <div className="center">
                <div>
                    <h2>{discount}</h2>
                    <h3>{title}</h3>
                    <small>{validity}</small>
                </div>
            </div>
        </div>
    );
}

export default AppCouponCard;
