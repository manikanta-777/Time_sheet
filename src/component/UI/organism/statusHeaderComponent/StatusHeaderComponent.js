import TagIcon from '@mui/icons-material/Tag';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import './StatusHeaderComponent.css'

const StatusHeaderComponent = ({ timeSheetData }) => {
    const counting = (status) => {
        const info = timeSheetData.filter((user) => { return user.status === status })
        return info.length
    }
    const statusData = [{ title: 'Total', value: timeSheetData.length, icon: <TagIcon sx={{ color: 'red' }} /> }, { title: 'Pending', value: counting('Pending'), icon: <AccessTimeIcon sx={{ color: 'orange' }} /> }, { title: 'Approved', value: counting('Approved'), icon: <CheckCircleOutlineIcon sx={{ color: 'green' }} /> }, { title: 'Clarification Pending', value: counting('Clarification Pending'), icon: <ErrorOutlineIcon sx={{ color: 'blue' }} /> }]
    return (
        <div className="secondHeader my-1">
            {
                statusData.map((status) =>
                    <div className='statusBox'>
                        <h6 className='statusTitle'>{status.title}</h6>
                        <div className="d-flex justify-content-between">
                            <h5>{status.value}</h5>
                            <div>{status.icon}</div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default StatusHeaderComponent;