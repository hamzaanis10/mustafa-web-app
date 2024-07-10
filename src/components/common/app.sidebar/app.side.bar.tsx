import "./app.side.bar.css";
import { Sidebar, SidebarProps } from "primereact/sidebar";

interface AppSideBarProps extends SidebarProps {
};

const AppSideBar : React.FC <AppSideBarProps> = (props:any) => {
  const{ position, visible, children, className ,id}= props

  return (
      <div >
      <Sidebar
        visible={visible}
        position={position}
        onHide={props.onHide}
        id={id ==="SideBar"? "SideBar" : `${id}`}
        className={className}
      >
        {children}
      </Sidebar>
      </div>
  );
}

export default AppSideBar ;
