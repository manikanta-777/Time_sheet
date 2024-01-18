
import NavItemComponent from '../../atoms/navItemComponent/NavItemComponent';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import ComputerIcon from '@mui/icons-material/Computer';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import TaskIcon from '@mui/icons-material/Task';
import { Link } from 'react-router-dom';
import HomeIcon from "@mui/icons-material/Home";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import './SideNavBarComponent.css'

const SideNavBarComponent = () => {
  const navBarData = [{ name: 'Dashboard', icon: <DashboardOutlinedIcon />, url: '/dashboard' }, { name: 'Add Candidate', icon: <PersonAddOutlinedIcon />, url: '/addCandidate' }, { name: 'Assignment Dashboard', icon: <DashboardOutlinedIcon />, url: '/assignementDashboard' }, { name: 'My Timesheet', icon: <TaskIcon />, url: '/myTimeSheet' }, { name: 'Approve Tmesheet', icon: <CreditScoreIcon />, url: '/approveTimesheet' }, { name: 'Login to HRMS', icon: <ComputerIcon />, url: '/login' }]
  return (
    <div className="navBar">
      <Link to={'/'} >
        <HomeIcon className='homeIcon' sx={{ width: 50, height: 50 }} />
      </Link>
      {
        navBarData.map((navInfo) =>
          <div><NavItemComponent navInfo={navInfo} /></div>
        )
      }
      <div className='ms-4 signOut'>
        <ExitToAppIcon /> Sign out
      </div>
    </div>
  )
}

export default SideNavBarComponent;