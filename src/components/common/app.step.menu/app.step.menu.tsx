import React from 'react'; 
import { TabMenu, TabMenuProps } from 'primereact/tabmenu';
import "./app.step.menu.scss"

interface AppStepMenuProps extends TabMenuProps{
  
}

const AppStepMenu: React.FC<AppStepMenuProps> = (props:any) => {
    const {model} = props

    return (
        <div className="" id='Tab_Menu'>
            <TabMenu model={model} onClick={props.onClick}/>
        </div>
    )
}

export default AppStepMenu;