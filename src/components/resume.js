import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Skills from './skills';
import imgURL from './../images/avatar.JPG';


class Resume extends Component {

    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center', paddingTop:'1em'}}>
                            <img
                                src={imgURL}
                                alt="avatar"
                                style={{height: '200px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '1em'}}>Jiaqi Wu</h2>
                        <hr style={{borderTop: '3px solid #833fb2', width: '90%'}}/>
                        {/*<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        */}
                        <p style={{width:'85%'}}>A Master's student in Applied Computer Science at Concordia University and expect to graduate in 2021. </p>
                        <p style={{width:'85%'}}>Actively seeking internships or full-time opportunities as a software engineer or software developer.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '90%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Grid>
                            <Cell col={4}>
                                <p>2019 - 2021</p>
                            </Cell>
                            <Cell col={8}>
                                <h4 style={{marginTop:'0px'}}>Concordia University</h4>
                                <p style={{fontStyle:'italic'}}>M.S. in Applied Computer Science, GPA: 3.88</p>
                            </Cell>
                        </Grid>

                        <Grid>
                            <Cell col={4}>
                                <p>2014 - 2018</p>
                            </Cell>
                            <Cell col={8}>
                                <h4 style={{marginTop:'0px'}}>Jilin University</h4>
                                <p style={{fontStyle:'italic'}}>
                                    B.E. in Computer and Application, GPA: 3.70
                                    <br/>
                                    B.S. in Tang Aoqing Honors Program in Science(Chemistry), GPA: 3.87
                                </p>

                            </Cell>
                        </Grid>
                        <hr style={{borderTop: '3px solid black'}} />

                        <h2>Experience</h2>
                        <Grid>
                            <Cell col={4}>
                                <p>2020.06 - 2020.08</p>
                            </Cell>
                            <Cell col={8}>
                                <h4 style={{marginTop:'0px'}}>Software Testing Intern</h4>
                                <p style={{fontStyle:'italic'}}>Jishi Technology Inc.
                                </p>
                                <p>
                                    -Review user stories/requirements, design test cases, and write software testing documentation<br/>
                                    -Perform end-to-end testing, regression testing, and smoke testing on Web applications and mobile apps<br/>
                                    -Use Microsoft Teams to cooperate with product managers and software developers
                                </p>
                            </Cell>
                        </Grid>

                        <Grid>
                            <Cell col={4}>
                                <p>2017.11 - 2018.02</p>
                            </Cell>
                            <Cell col={8}>
                                <h4 style={{marginTop:'0px'}}>Software Developer Intern</h4>
                                <p style={{fontStyle:'italic'}}>Inspur Software Group Co., Ltd. Jilin Branch<br/>
                                    China Telecom Jilin Branch on-site integrated maintenance management platform project
                                </p>
                                <p>
                                    -Realize the functions of engineer maintenance and inspection with Baidu Map API<br/>
                                    -Optimize the system interface using JS, JQuery, and ECharts<br/>
                                    -Assist in maintaining standardized documentation such as software development documentation
                                </p>
                            </Cell>
                        </Grid>

                        <hr style={{borderTop: '3px solid black'}} />
                        <h2>Skills</h2>
                        <Skills
                            skill="Java"
                            progress={90}
                        />
                        <Skills
                            skill="JavaScript"
                            progress={80}
                        />
                        <Skills
                            skill="Spring"
                            progress={50}
                        />
                        <Skills
                            skill="React"
                            progress={50}
                        />

                        <Skills
                            skill="SQL"
                            progress={90}
                        />


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;