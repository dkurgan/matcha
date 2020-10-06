import React from 'react';
import { TextField, Grid, Button, Typography, Icon, IconButton } from '@material-ui/core';

export default class HobbyList extends React.Component<{updateHobbie: Function}>{
    state = { arrList: [], hobby: ""};
    addToList = (e: React.MouseEvent) => {
        e.preventDefault();
        if (this.state.hobby === '')
            return;
        if (this.state.arrList.length === 3) {
            (document?.getElementById("standard-basic") as HTMLInputElement).value = "";
            return;
        }
        this.setState({
            arrList: [...this.state.arrList, this.state.hobby],
            hobby: ""
        });
        this.props.updateHobbie(this.state.arrList);
        (document?.getElementById("standard-basic") as HTMLInputElement).value = "";
    }
    deleteList = (e: React.MouseEvent, id: number) => {
        e.preventDefault();
        let tmp = this.state.arrList.slice(0, id);
        if (id === 0)
            tmp = [];
        this.setState({ arrList: tmp.concat(this.state.arrList.slice(id + 1, this.state.arrList.length)) });
        this.props.updateHobbie(this.state.arrList);
    }
    render() {
        let ItemList = this.state.arrList.map((item, id) => {
            return (
                <Grid key={id} style={{ margin: "10px", display: "flex", alignContent: "center" }} className="hobbie-items" justify="center">
                    <Typography style={{marginTop: "3px"}}>{item}</Typography>
                    <label onClick={(e) => this.deleteList(e, id)} dir="suka">
                        <div style={{alignContent:  "end"}}>
                            <Icon id="hello" style={{ marginLeft: "5px", fontSize: "20px", marginTop: "3px", color: "rgb(180,58,124)" }} className="fas fa-trash-alt" />
                            </div>
                    </label>
                    </Grid>
            )
        })
        return (
            <div style={{ width: "400px", height: "320px" }}>
                <div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                    <form>
                        <TextField style={{marginLeft: "20px"}} id="standard-basic" className="hobbieClass" onChange={(e) => {this.setState({hobby: e.target.value})}} label="Type your hobbies" />
                    </form>
                    <button style={{marginTop: "12px", marginLeft: "10px"}} className="btn-add" type="submit" onClick={(e) => { this.addToList(e) }}>Add</button>
                    </div>
                    <div style={{display: "flex", flexDirection: "column", alignContent: "center", justifyContent: "center", marginLeft: "100px"}}>
                    {ItemList}
                    </div>
                    </div>
            </div>
        )
    }
}

