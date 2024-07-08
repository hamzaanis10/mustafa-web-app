interface AppShippingAddressProps {
  title?: string;
  label?: string;
  description?: string;
  removeIcon?: boolean;
};

const AppShippingAddress: React.FC<AppShippingAddressProps> = (props: any) => {
  const { title, label, description, removeIcon } = props
  return (
    <div className="p-4 bg-white border-round" style={{ width: "100%", maxWidth: "800px" }}>
      <span className="text-2xl font-semibold ml-2">{title}</span>
      <div className="flex align-items-center justify-content-between border-1 border-green-400 mt-4 px-3">
        <div className="flex align-items-center">
          <i
            className="pi pi-map-marker text-5xl pb-3 "
            style={{ color: "#00CB56" }}
          />
          <div className="flex flex-column my-1 mx-1 sm:mx-3 md:mx-4 lg:mx-4 sm:my-3 md:my-4 lg:my-4">
            <div>
              <span className="text-xs sm:text-sm md:text-base lg:text-base font-semibold text-green-400  mx-1">
                {label}
              </span>
              <span
                className="text-xs sm:text-sm md:text-base lg:text-base  font-normal"
                style={{ color: "#555555" }}
              >
                (123)1231234123
              </span>
            </div>
            <div>
              <p
                className="text-xs sm:text-sm md:text-base lg:text-base font-semibold mx-1"
                style={{ color: "#555555" }}
              >
                {description}
              </p>
            </div>
          </div>
        </div>
        {removeIcon ? (
          <i
            className="pi pi-angle-right text-5xl "
            style={{ color: "#C4C4C4" }}
          />
        ) : null}

      </div>
    </div>
  );
};

export default AppShippingAddress;