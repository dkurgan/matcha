import React from 'react';
import { TextField,Grid, Box } from '@material-ui/core';

export default class CreateProfileFooter extends React.Component{
    state = { location: {} };
    componentDidMount() {
        console.log(navigator.geolocation.getCurrentPosition((success) => {
            console.log(success);
        }));
    }
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