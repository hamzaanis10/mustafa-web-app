import "./app.info.box.dialog.css"
import AppButton from "../app.button/app.button";
import AppDialog from "../app.dialog/app.dialog";

interface AppInfoBoxDialogProps {
    headerText?: string;
    description: string;
    showInfoBoxDialog: boolean;
    onHideInfoBoxDialog: () => void;
}

const AppInfoBoxDialog: React.FC<AppInfoBoxDialogProps> = (props: any) => {
    const { description, showInfoBoxDialog, headerText } = props;

    // const headerText = "Remaining items in cart"
    return (
        <AppDialog
            header={headerText}
            visible={showInfoBoxDialog}
            modal
            onHide={props.onHideInfoBoxDialog}
            className='relative sm: w-15rem md: w-20rem lg: w-22rem'
        >
            <div className="flex flex-column align-items-center text-center">
                <p className="text-sm text-center line-height-3 font-normal mb-4" style={{ fontSize: '16px', color: '#7B7B7B', width: '14rem' }}> {description} </p>
                <div style={{ width: '14.5rem' }}>
                    <AppButton label="Merge" disabled={false} />
                    <AppButton label="Discard" disabled={false} style={{ background: 'transparent', color: "#00CB56" }} />
                </div>
            </div>
            </AppDialog>
    )
}

export default AppInfoBoxDialog