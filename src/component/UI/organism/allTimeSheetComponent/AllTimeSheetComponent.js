import { Card } from "@mui/material";
import SearchSectionComponent from "../../molecules/searchSectionComponent/SearchSectionComponent";
import DataTable from "../../atoms/tableComponent/DataTable";

import './AllTimeSheetComponent.css'

const AllTimeSheetComponent = ({ timeSheetData, usersList, setSearchValue }) => {

  const columns = [
    { field: 'name', headerName: 'Name', width: 100 },
    { field: 'department', headerName: 'Department', width: 100 },
    { field: 'company', headerName: 'Company', width: 130 },
    {
      field: 'weekEnding',
      headerName: 'Week Ending',
      width: 120,
    },
    {
      field: 'totalHours',
      headerName: 'Total Hours',
      width: 90,
    },
    { field: 'submissionDate', headerName: 'Submitted At', width: 120 },
    {
      field: 'status', headerName: 'Status', width: 180, renderCell: (params) => (
        <div dangerouslySetInnerHTML={{ __html: params.row.status }} className={`statusColor ${params.row.status === 'Pending' ? 'orangeBgClass' : params.row.status === 'Approved' ? 'greenBgClass' : params.row.status === 'Rejected' ? 'redBgClass' : 'blueBgClass'}`} />
      ),
    },
  ];

  const rows = [];

  timeSheetData.map((userdata) => {
    const entry = {
      id: userdata.id,
      name: userdata.name,
      department: userdata.department,
      company: userdata.company,
      weekEnding: userdata.weekEnding,
      totalHours: userdata.totalHours,
      submissionDate: userdata.submissionDate,
      status: userdata.status
    };

    rows.push(entry);
  }
  )

  return (
    <Card className='d-flex'>
      <div className="searchSection mx-2">
        <SearchSectionComponent usersList={usersList} setSearchValue={setSearchValue} />
      </div>
      <div className="tableSection">
        <h4>All Timesheets</h4>
        <DataTable columns={columns} rows={rows} />
      </div>
    </Card>
  );
};

export default AllTimeSheetComponent;