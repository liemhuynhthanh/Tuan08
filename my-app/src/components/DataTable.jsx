import React from 'react';
import DataTable from 'react-data-table-component';

const CustomDataTable = ({ columns, data, totalResults }) => {
  // Chuyển đổi định dạng cột cho react-data-table-component
  const mappedColumns = columns.map(col => ({
    name: col.header,
    selector: row => typeof col.accessor === 'function' ? col.accessor(row) : row[col.accessor],
    sortable: true,
  }));

  const customStyles = {
    headCells: {
      style: {
        fontWeight: 'bold',
        fontSize: '12px',
        backgroundColor: '#f9fafb',
        textTransform: 'uppercase',
      },
    },
    rows: {
      style: {
        minHeight: '48px',
      },
    },
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <DataTable
        title={null}
        columns={[
          {
            name: '',
            cell: () => <input type="checkbox" className="rounded" />,
            width: '56px',
          },
          ...mappedColumns
        ]}
        data={data}
        pagination
        selectableRows
        highlightOnHover
        responsive
        paginationPerPage={10}
        paginationRowsPerPageOptions={[10, 20, 30]}
        customStyles={customStyles}
        subHeader
        subHeaderComponent={
          <div className="text-sm text-gray-500 px-2">
            {totalResults} results
          </div>
        }
      />
    </div>
  );
};

export default CustomDataTable;
