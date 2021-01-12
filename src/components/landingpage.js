import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import imgURL from './../images/avatar.JPG';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src={imgURL }
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>JIAQI WU</h1>

                            <hr/>

                            <p>HTML/CSS | JavaScript | React | Java | Spring | SQL</p>

                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/jiaqi-wu-ca" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="https://github.com/wujq95" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                {/* Email */}
                                <a href="mailto:wujq1214@gmail.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-envelope-square" aria-hidden="true" />
                                </a>


                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;