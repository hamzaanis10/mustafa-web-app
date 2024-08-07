import AppButton from "../app.button/app.button";

interface AppSuccessDialogProps {
    title?: string;
    description?: string;
    label?: string;
    style?:React.CSSProperties;
    onClick?: ()=> void

}

const AppSuccessDialog: React.FC<AppSuccessDialogProps> = (props: any) => {
    const { title, description, label, style } = props;

    return (
        <div className="flex flex-column align-items-center text-center">
            <i className='pi pi-check ' style={{ fontSize: 40, color: '#00CB56', border: '4px solid #00CB56', borderRadius: '100%', padding: 10 }} />
            <h2 className="text-center line-height-2 font-normal mb-1" style={{ fontSize: '24px', color: "#000000" }}> {title} </h2>
            <p className="text-sm text-center line-height-3 font-normal mb-4" style={{ fontSize: '16px', color: '#7B7B7B' }}> {description} </p>
            <div className="w-full">
                <AppButton label={label} disabled={false} style={style} onClick={props.onClick}/>
            </div>
        </div>
    )
}

export default AppSuccessDialog