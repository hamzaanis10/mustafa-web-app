import React from 'react';
import { Tag, TagProps } from 'primereact/tag';
import './app.product.tag.css';
interface AppProductTagProps extends TagProps{
   className?:string;
}

const AppProductTag:React.FC<AppProductTagProps> = (props: any) =>  {
    const {value,className, severity,rounded} = props
  return (
    <div className="card mb-3">
            <Tag value={value} className={className}></Tag>
        </div>
  )
}

export default AppProductTag
