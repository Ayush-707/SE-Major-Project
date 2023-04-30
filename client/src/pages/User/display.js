import React from 'react'
import Table, { AvatarCell, SelectColumnFilter, StatusPill } from '../../tables/Table'

const getData = () => {
  const data = [
    
   
  ]
  return [...data, ...data, ...data]
}

function Display() {
  const columns = React.useMemo(() => [
    {
      Header: "User Id",
      accessor: 'name',
      Cell: AvatarCell,
      imgAccessor: "imgUrl",
      emailAccessor: "email",
    },
    {
      Header: "Reciever Id",
      accessor: 'status',
      Cell: StatusPill,
     
    },
    {
      Header: "Transaction Date",
      accessor: 'age',
    },
    
    
  ], [])

  const data = React.useMemo(() => getData(), [])

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <h1 className="text-xl font-semibold">Transaction History</h1>
        </div>
        <div className="mt-6">
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>
  );
}

export default Display;
