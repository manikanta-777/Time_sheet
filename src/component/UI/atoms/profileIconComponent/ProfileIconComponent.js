import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import getRandomColor from "../../../utilities/getRandomColor";

const ProfileIconComponent = ({ firstLetter }) => {
    const [randomColor, setRandomColor] = useState(getRandomColor());

    useEffect(() => {
        setRandomColor(getRandomColor())
    }, []);

    return (
        <div>
            <IconButton aria-label="alert" color="inherit" sx={{ backgroundColor: randomColor, width: 50, height: 50 }}>
                <div className="px-2">{firstLetter}</div>
            </IconButton>
        </div>
    );
};

export default ProfileIconComponent;
