import React from "react";

import { Grid, IconButton, Tooltip, Typography } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";

import Mode from "./modeSelector";
import { useResetAllAtoms } from "../atoms/resetAtoms";

const SettingsContainer = () => {
    const resetStates = useResetAllAtoms();

    return (
        <Grid container spacing={2} sx={{ padding: 2 }}>
            <Grid container item direction="row" justifyContent="center" alignItems="center">
                <Typography gutterBottom variant="h5" mb={0} mr={1}>
                    Settings
                </Typography>
                <Tooltip title="Reset Settings" placement="right" arrow>
                    <IconButton pb={5} onClick={resetStates}>
                        <ReplayIcon />
                    </IconButton>
                </Tooltip>
            </Grid>

            <Grid container item direction="column">
                <Mode />
            </Grid>
        </Grid>
    );
};

export default SettingsContainer;
