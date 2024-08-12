import React from 'react';
import AppCheckBox from '../app.checkbox/app.checkbox';
import { useCartSummary } from '@/app/hooks/fetch/cart';

interface AppDeliveryMethodProps {
  title?: string;
  label?: string;
  description?: string;
  arrivalDate?: string;
}

const AppDeliveryMethod: React.FC<AppDeliveryMethodProps> = (props: any) => {
  const { data: cartSummary, isLoading: isCartSummaryLoading } = useCartSummary(
    {},
    {
      revalidateIfStale: true,
    }
  );

  const cartSummaryDetails = cartSummary?.toJS();
  const { title, label, description } = props;

  // Function to format the date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      day: 'numeric',
      month: 'short',
    });
  };

  return (
    <div style={{ width: '100%'}}>
      <span className="text-2xl font-semibold ml-2"> {title} </span>
      <div className="flex align-items-center border-1 mt-4 px-3 border-round-lg" style={{border:"1px solid #00CB56"}}>
        <div className="flex align-items-center">
          <div className="flex my-2">
            {cartSummaryDetails?.packages.map((item: any, index: any) => {
              const formattedCreatedAt = formatDate(item.createdAt);
              const formattedEstimatedArrivalTime = formatDate(item.estimatedArrivalTime);

              return (
                <div key={index}>
                  <span className="text-xs sm:text-sm md:text-base lg:text-base font-semibold text-green-400 ml-5">
                    {label} <span> free </span>
                  </span>
                  <del
                    className="text-xs sm:text-sm md:text-base lg:text-base font-normal"
                    style={{ color: '#555555' }}
                  >
                    {cartSummaryDetails && cartSummaryDetails.currency}{' '}
                    {cartSummaryDetails && item.deliveryFee}
                  </del>
                  <p
                    className="text-xs sm:text-sm md:text-base lg:text-base font-semibold mx-1 flex align-items-center gap-2"
                    style={{ color: '#FF4C72' }}
                  >
                     <AppCheckBox checked /> {description}
                  </p>
                  <p
                    className="text-xs sm:text-sm md:text-base lg:text-base font-semibold ml-5"
                    style={{ color: '#9D9D9D' }}
                  >
                    (Arrives between {formattedCreatedAt} - {formattedEstimatedArrivalTime})
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDeliveryMethod;
