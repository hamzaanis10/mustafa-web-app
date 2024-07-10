import React from 'react';
import './app.pagination.css';
import { Paginator, PaginatorProps } from 'primereact/paginator';


interface AppPaginationProps extends PaginatorProps {
  
};

const AppPagination: React.FC<AppPaginationProps> = (props:any) => {
  const { first, rows, totalRecords, rowsPerPageOptions, onPageChange,  template } = props;

  return (
    <div>
      <Paginator
        first={first}
        rows={rows}
        totalRecords={totalRecords}
        rowsPerPageOptions={rowsPerPageOptions}
        onPageChange={onPageChange}
        template={template}
        id='Pagination'
      />
    </div>
  );
}

export default AppPagination;
