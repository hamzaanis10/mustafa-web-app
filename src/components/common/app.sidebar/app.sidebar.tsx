import "./app.sidebar.scss";
import { Sidebar, SidebarProps } from "primereact/sidebar";
 
interface AppSideBarProps extends SidebarProps {
  id : string;
};
 
const AppSideBar : React.FC <AppSideBarProps> = (props:any) => {
  const{ position, visible, children, className, id}= props
 
  return (
      <div >
      <Sidebar
        visible={visible}
        position={position}
        onHide={props.onHide}
        // id={`SideBar`}
        id={id}
        className={className}
      >
        {children}
      </Sidebar>
      </div>
  );
}
 
export default AppSideBar ;