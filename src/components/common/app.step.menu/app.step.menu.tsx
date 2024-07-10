
import React from 'react'; 
import { TabMenu, TabMenuProps } from 'primereact/tabmenu';
import "./app.step.menu.css"

interface AppStepMenuProps extends TabMenuProps{
     
}

const AppStepMenu: React.FC<AppStepMenuProps> = (props:any) => {
    const {model} = props

    return (
        <div  id='Tab_Menu'>
            <TabMenu className="menuStep" model={model} onClick={props.onClick} />
        </div>
    )
}

export default AppStepMenu;