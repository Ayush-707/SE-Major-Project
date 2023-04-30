import React from 'react'
import Table, { AvatarCell, SelectColumnFilter, StatusPill } from '../../tables/dTable'

const getData = () => {
  const data = [
    
   
  ]
  return [...data, ...data, ...data]
}

function History() {
  const columns = React.useMemo(() => [
    {
      Header: "Account Number",
      accessor: 'name',
      Cell: AvatarCell,
      imgAccessor: "imgUrl",
      emailAccessor: "email",
    },
    {
      Header: "Deposit Amount",
      accessor: 'status',
      Cell: StatusPill,
     
    },

    {
      Header: "Deposit Date",
      accessor: 'date',
    },
    
    
  ], [])

  const data = React.useMemo(() => getData(), [])

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <h1 className="text-xl font-semibold">Deposit History</h1>
        </div>
        <div className="mt-6">
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>
  );
}

export default History;
