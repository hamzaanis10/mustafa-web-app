

interface AppShippingAddressProps {
  label?: string;
  description?:string;
  iconImage?:boolean;
  removeIcon?:boolean;

};

const AppShippingAddress: React.FC<AppShippingAddressProps> = (props:any) => {
  const {label,description,iconImage,removeIcon} = props
  return (
    
      <div className={removeIcon ? `flex align-items-center justify-content-between border-1 border-green-400 mt-4 px-0 sm:px-3 md:px-2 lg:px-3`: `flex align-items-center border-1 border-gray-300 border-round pt-1 pr-1 pb-1 pl-0 m-4`} onClick={props.onClick}>

        <div className={removeIcon ? "flex align-items-center" : "flex align-items-center px-2"}>
          {iconImage ? <i
            className="pi pi-map-marker text-4xl py-3 px-2"
            style={{ color: "#00CB56" }}
          />:
          <i
          className="pi pi-home text-4xl py-3 px-2 "
          style={{ color: "#00CB56" }}
        />
          }
          <div className={removeIcon? "flex flex-column my-1 sm:my-3 md:my-4 lg:my-4 gap-2": "flex flex-column my-1 gap-2"}  >
            <div>
              <span className={removeIcon ? "text-xs sm:text-sm md:text-base lg:text-base font-semibold text-green-400" :"text-sm font-semibold "}>
                {label}
              </span>
              <span
                className={removeIcon ? "text-xs sm:text-sm md:text-base lg:text-base font-normal ml-1" :"text-sm font-normal ml-1"}
                style={{ color: "#555555" }}
              >
                (123)1231234123
              </span>
            </div>
            <div>
              <span
                className={removeIcon ? "text-xs sm:text-sm md:text-base lg:text-base font-normal" :"text-sm font-normal"}
                style={{ color: "#555555" }}
              >
                {description}
              </span>
            </div>
          </div>
        </div>
        {removeIcon ? 
          <i
             className="pi pi-angle-right text-5xl "
             style={{ color: "#C4C4C4" }}
          />
        :""}
      </div>
  );
};

export default AppShippingAddress;
