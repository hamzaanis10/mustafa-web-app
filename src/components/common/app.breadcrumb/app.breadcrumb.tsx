import { BreadCrumb, BreadCrumbProps} from 'primereact/breadcrumb';
import './app.breadcrumb.css';


const AppBreadCrumb:React.FC<BreadCrumbProps>=(props:any) =>  {
    const {model} = props
     
    return (
        <BreadCrumb model={model} />
    )
}

export default AppBreadCrumb; 
