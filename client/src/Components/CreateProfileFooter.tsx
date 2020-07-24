import React from 'react';
import { TextField,Grid, Box } from '@material-ui/core';

export default class CreateProfileFooter extends React.Component{
    render() {
        return (
            <div>
                <Grid container justify="center">
                    <Grid item>
                       <TextField label="Location"></TextField>
                    </Grid>
                </Grid>
            </div>
        )
    }
}