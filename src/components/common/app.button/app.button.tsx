import { Button, ButtonProps } from 'primereact/button';


const AppButton: React.FC<ButtonProps> = (props: any) => {
  const { label, disabled, style } = props;
  return (
    <div>
      <Button label={label}
       onClick={props.onClick}
       disabled={disabled}
        className="w-full mb-3 text-sm font-semibold p-button-rounded"
        style={style ? style :
          { backgroundColor: "#00CB56" } }/>
    </div>
  );
}

export default AppButton