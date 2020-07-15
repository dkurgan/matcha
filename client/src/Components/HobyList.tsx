import React from 'react';
import { TextField,Grid, Button, Typography } from '@material-ui/core';

export default class HobbyList extends React.Component{
    state = { arrList: [], hobby: ""};
    addToList = (e: any) => {
        e.preventDefault();
        this.setState({
            arrList: [...this.state.arrList, this.state.hobby],
            hobby: ""
        });
        (document?.getElementById("standard-basic") as HTMLInputElement).value = "";
    }
    render() {
        const ItemList = this.state.arrList.map((item) => {
            return (
                   <Grid container justify="center">
                    <Typography>{item}</Typography>
                    </Grid>
            )
        })
        return (
            <div>
                <Grid container justify="center">
                    <form>
                        <TextField id="standard-basic" className="hobbieClass" onChange={(e) => this.setState({hobby: e.target.value})} label="Type your hobbies" />
                        <Button type="submit" onClick={(e) => { this.addToList(e) }}>Add</Button>
                    </form>
                </Grid>
                
                {ItemList}
            </div>
        )
    }
}

