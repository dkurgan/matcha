import React from 'react';
import { TextField, Grid, Button, Typography, Icon, IconButton } from '@material-ui/core';
import ProfileFooter from './CreateProfileFooter';

export default class HobbyList extends React.Component<{takeHobbie: Function}>{
    state = { arrList: [], hobby: ""};
    addToList = (e: React.MouseEvent) => {
        e.preventDefault();
        if (this.state.hobby === '')
            return;
        this.setState({
            arrList: [...this.state.arrList, this.state.hobby],
            hobby: ""
        });
        (document?.getElementById("standard-basic") as HTMLInputElement).value = "";
    }
    deleteList = (e: React.MouseEvent, id: number) => {
        e.preventDefault();
        let tmp = this.state.arrList.slice(0, id);
        if (id === 0)
            tmp = [];
        this.setState({ arrList: tmp.concat(this.state.arrList.slice(id + 1, this.state.arrList.length)) });
        console.log(tmp)
    }
    render() {
        let ItemList = this.state.arrList.map((item, id) => {
            return (
                   <Grid key={id} style={{marginBottom: "10px"}} container justify="center">
                    <Typography>{item}</Typography>
                    <label onClick={(e) => this.deleteList(e, id)} dir="suka">
                        <Icon id="hello"  style={{ marginLeft: "5px" }} className="fas fa-trash-alt" />
                        </label>
                    </Grid>
            )
        })
        return (
            <div>
                <Grid style={{paddingBottom: "10px"}} container justify="center">
                    <form>
                        <TextField id="standard-basic" className="hobbieClass" onChange={(e) => {this.setState({hobby: e.target.value})}} label="Type your hobbies" />
                        <Button style={{marginTop: "20px", marginLeft: "5px"}} type="submit" onClick={(e) => { this.addToList(e) }}>Add</Button>
                    </form>
                </Grid>
                {ItemList}
                <ProfileFooter />
                <Grid container justify="center">
                    <Button onClick={() => this.props.takeHobbie(this.state.arrList)}>Create</Button>
                </Grid>
            </div>
        )
    }
}

