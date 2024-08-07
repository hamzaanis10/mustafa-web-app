//import 'primeflex/primeflex.css';
import "./app.dialog.css";

import { Dialog, DialogProps } from "primereact/dialog";
interface AppDialogProps extends DialogProps {
}

const AppDialog: React.FC<AppDialogProps> = (props: any) => {
    const { header, visible, children, modal, className, id } = props;

    return (
        <div id="MainDialog">           
             <Dialog header={header}
                visible={visible}
                modal={modal}
                onHide={props.onHide}
                // style={{ width: '400px' }} 
                // contentStyle={{ overflow: 'hidden' }}
                className={className}
                id={id}>
                {children}
            </Dialog>
            </div>

    )
}

export default AppDialog