import { IconButton } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { red } from '@mui/material/colors';

import './PreHeaderComponent.css'

const PreHeaderComponent = ({ pagename }) => {

    return (
        <div>
            <div className="preHeader">
                <h3>{pagename}</h3>
                <div>
                    <div className="preHeader">
                        <div className="accountIcon d-flex">
                            <div>
                                <IconButton aria-label="alert" color="inherit" sx={{ backgroundColor: 'white' }}>
                                    <AccountCircleIcon />
                                </IconButton>

                            </div>
                            <div className="ms-2">
                                <p className="mb-0 morning">Good Morning</p>
                                <p className="mb-0 userName">john doe</p>
                            </div>

                        </div>
                        <div>
                            <IconButton aria-label="alert" color="inherit" sx={{ backgroundColor: 'white' }}>
                                <NotificationsIcon sx={{ color: red[800] }} />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default PreHeaderComponent;