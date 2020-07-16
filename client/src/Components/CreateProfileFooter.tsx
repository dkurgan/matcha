import React from 'react';
import { TextField,Grid, Box } from '@material-ui/core';

export default class CreateProfileFooter extends React.Component{
    render() {
        console.log(navigator.geolocation.getCurrentPosition((success) => {
            console.log(success);
        }))
        return (
            <div>
                <Grid container justify="center">
                    <Grid item>
                    <Box component="span" m={1}>
                            <TextField label="Bio"></TextField>
                            </Box>
                    </Grid>
                </Grid>
            </div>
        )
    }
}