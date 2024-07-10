import "./app.product.color.varients.css";

interface AppProductColorVarientProps{
    color?:string;
}

const AppProductColorVarients: React.FC<AppProductColorVarientProps> = (props:any) => {
     const {color, } = props;
  return (
           <div> 
              <div className="color-item " 
                style={{ backgroundColor: color}}>           
            </div>
           </div>
  );
};

export default AppProductColorVarients;
