import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import imgURL from "../images/resume.jpg";

class Contact extends Component {

    render() {
        return(

            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <img
                            src={imgURL}
                            alt="resume"
                            className="resume-img"
                        />
                        <a style={{fontSize: '20px', color:'#000000', fontFamily: 'Anton'}} href="resume.pdf" download="Resume_Jiaqi_Wu.pdf"><strong>Download Resume</strong></a>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        514-576-4918
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        wujq1214@gmail.com
                                    </ListItemContent>
                                </ListItem>

                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;