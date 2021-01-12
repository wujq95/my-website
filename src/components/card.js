import React from 'react';
import {Button, Card, CardActions, CardMenu, CardText, CardTitle, IconButton} from "react-mdl";

class CardComponent extends React.Component{
    render() {
        return(
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle
                    style={this.props.background}>{this.props.name}</CardTitle>
                <CardText>
                    {this.props.description}
                </CardText>
                <CardActions border>
                    <Button colored href={this.props.github}>GitHub</Button>
                    {this.props.demo && <Button colored href={this.props.demo}>Live Demo</Button>}
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>
        );
    }
}

export default CardComponent;