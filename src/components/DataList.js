import { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css'

function DataList() {
  const [productsList, setProductsList] = useState([]);

  const columns = [
    {dataField:'id', text: '', filter: textFilter({
      style: undefined,
      placeholder: 'Search...'})},
    {dataField:'name', text:'Name'},
    {dataField:'year', text:'Year'}
  ]

  const pagination = paginationFactory ({
    page: 1,
    sizePerPage: 5,
    hideSizePerPage: true,
    nextPageText: '>',
    prePageText: '<',
    alwaysShowAllBtns: true,
  });

  useEffect(() => {
    fetch('https://reqres.in/api/products')
    .then(response => response.json()
    .then(result => setProductsList(result.data))
    .catch(error => console.log(error)))
  }, [])


  return (
    <div>
      <BootstrapTable 
      keyField="id" 
      columns={columns} 
      data={productsList}
      pagination={pagination}
      filter={filterFactory()}
      />
    </div>
  );
}

export default DataList;