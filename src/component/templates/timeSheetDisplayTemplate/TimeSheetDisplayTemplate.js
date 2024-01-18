import { useEffect, useState } from "react";

import AllTimeSheetComponent from "../../UI/organism/allTimeSheetComponent/AllTimeSheetComponent";
import SideNavBarComponent from "../../UI/organism/sideNavbarComponent/SideNavbarComponent";
import StatusHeaderComponent from "../../UI/organism/statusHeaderComponent/StatusHeaderComponent";
import PreHeaderComponent from "../../UI/organism/preHeaderComponent/PreHeaderComponent";
import generateRandomData from "../../../jsonData/randomData";

import './TimeSheetDisplayTemplate.css'

const TimeSheetDisplayTemplate = ({ pagename }) => {
  const [timeSheetData,setTimeSheetData]=useState([])
  const [usersList,setUsersList] = useState([])
  const {data,candidateData} =generateRandomData();

  const [searchValue,setSearchValue] = useState('')
  useEffect(()=>{
    setTimeSheetData(data)
    setUsersList(candidateData)
  },[])
  useEffect(()=>{
    if (searchValue){
    setUsersList(candidateData.filter((user)=>user.userName.toLowerCase().includes(searchValue.toLowerCase())))
    setTimeSheetData(data.filter((user)=>user.name.toLowerCase().toLowerCase().includes(searchValue.toLowerCase())))
    }
    else{
      setUsersList(candidateData)
    setTimeSheetData(data)
    }
  },[searchValue])
  
  return (
    <div className="displayPage">
      <div className="leftSection">
        <SideNavBarComponent />
      </div>
      <div className="rightSection">
        <div>
          <PreHeaderComponent pagename={pagename} />
        </div>
        {pagename === 'Approve Timesheet' &&
          <div className="m-1">
            <StatusHeaderComponent timeSheetData={timeSheetData} />
            <AllTimeSheetComponent timeSheetData={timeSheetData} usersList={usersList} setSearchValue={setSearchValue} />
          </div>
        }
      </div>
    </div>
  )
}

export default TimeSheetDisplayTemplate;