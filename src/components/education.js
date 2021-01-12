import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
    render() {
        return(
            <Grid>
                <Cell col={2}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={10}>
                    <h4 style={{marginTop:'0px'}}>{this.props.schoolName}</h4>
                    <p>{this.props.schoolDescription}<br/>{this.props.schoolMinor}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Education;