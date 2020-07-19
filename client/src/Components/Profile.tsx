import React from 'react'
import { connect } from 'react-redux';
import { Grid, Avatar } from '@material-ui/core';

class Profile extends React.Component{
    
    render() {
        return (
            <div>
                <Grid>
                    <Avatar sizes="large" src="" />
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state: object) => {
    return state
}

export default connect(mapStateToProps)(Profile);