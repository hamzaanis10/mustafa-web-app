"use client";
import React from "react";
import { Skeleton } from "primereact/skeleton";

const ProductDetailBarSkeleton: React.FC = () => {
    return (
        <div className="bg-white mt-4 xl:w-9 mx-auto p-4">
            <div className="p-4 surface-card flex flex-wrap  align-items-start gap-4">
                <div className="w-12 lg:w-6 ">
                <Skeleton width="100%" height="500px" className="mb-4"></Skeleton>
                </div>
                <div className="hidden sm:block w-12 lg:w-4 xl:w-30rem ">
                <Skeleton width="100%" height="500px" className="mb-4"></Skeleton>
                </div>
                {/* <Skeleton width="5rem" className="mb-2"></Skeleton>
                <Skeleton width="100%" height="3rem" className="mb-2"></Skeleton>
                <Skeleton width="100%" height="2rem" className="mb-2"></Skeleton>
                <Skeleton width="100%" height="2rem" className="mb-2"></Skeleton>
                <Skeleton width="5rem" className="mb-2"></Skeleton>
                <Skeleton width="5rem" height="2rem" className="mb-2 m-auto"></Skeleton>
                <Skeleton width="4rem" height="2rem" className="m-auto"></Skeleton> */}
            </div>
        </div>
    );
};

export default ProductDetailBarSkeleton;
