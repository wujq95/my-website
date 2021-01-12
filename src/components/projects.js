import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import CardComponent from "./card";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if(this.state.activeTab === 0){
            return(
                <div>
                    <div className="projects-grid">
                        <CardComponent
                            name="Recipe App"
                            description = "A recipe app developed by Spring, Spring Boot, Spring MVC, and Spring Data JPA"
                            background={{width: '200px', height: '220px', background: 'url(spring_logo.png) center / cover', margin: 'auto'}}
                            github="https://github.com/wujq95/recipe-app"
                            demo="https://wujq-recipe-app.herokuapp.com"
                        />
                        {/*<CardComponent
                            name="Pics"
                            description = "React images search project(Call Unsplash API)"
                            background={{width: '200px', height: '200px', background: 'url(react_logo.png) center / cover', margin: 'auto'}}
                            github="https://github.com/wujq95/pics"
                            demo="https://pics-smoky.vercel.app"
                        />
                        <CardComponent
                            name="Widgets"
                            description = "React widgets practice(Call Wikipedia and Google Translate APIs))"
                            background={{width: '200px', height: '200px', background: 'url(react_logo.png) center / cover', margin: 'auto'}}
                            github="https://github.com/wujq95/widgets"
                            demo="https://widgets-kappa-six.vercel.app"
                        />*/}
                    </div>
                </div>


            )
        } else if(this.state.activeTab ===1) {
            return (
                <div>
                    <div className="projects-grid">
                        <CardComponent
                            name="Videos"
                            description = "React videos search project(Call Youtube API)"
                            background={{width: '200px', height: '220px', background: 'url(react_logo.png) center / cover', margin: 'auto'}}
                            github="https://github.com/wujq95/videos"
                            demo="https://videos-hooks-sand-phi.vercel.app"
                        />
                        <CardComponent
                            name="Pics"
                            description = "React images search project(Call Unsplash API)"
                            background={{width: '200px', height: '200px', background: 'url(react_logo.png) center / cover', margin: 'auto'}}
                            github="https://github.com/wujq95/pics"
                            demo="https://pics-smoky.vercel.app"
                        />
                        <CardComponent
                            name="Widgets"
                            description = "React widgets practice(Call Wikipedia and Google Translate APIs))"
                            background={{width: '200px', height: '200px', background: 'url(react_logo.png) center / cover', margin: 'auto'}}
                            github="https://github.com/wujq95/widgets"
                            demo="https://widgets-kappa-six.vercel.app"
                        />
                    </div>
                </div>
            )
        } else if(this.state.activeTab === 2) {
            return (
                <div>
                    <div className="projects-grid">
                        <CardComponent
                            name="Distributed System"
                            description = "Software Failure Tolerant/Highly Available Distributed Player Status System (DPSS)"
                            background={{color: '#fff', height: '176px', background: '#3E4EB8'}}
                            github="https://github.com/wujq95/COMP6231_Project"
                        />
                        <CardComponent
                            name="Database"
                            description = " Merge and deduplicate two files with the same format using Bitmap indexes"
                            background={{color: '#fff', height: '176px', background: '#3E4EB8'}}
                            github="https://github.com/wujq95/GraphColoring"
                        />
                        <CardComponent
                            name="HTTP Server"
                            description = " A Realization of the Web server and client based on the principle of the HTTP protocol"
                            background={{color: '#fff', height: '176px', background: '#3E4EB8'}}
                            github="https://github.com/wujq95/COMP6461_Project"
                        />
                    </div>
                    <div className="projects-grid">
                        <CardComponent
                            name="Risk Game"
                            description = "A risk game that can be played by multiple people"
                            background={{color: '#fff', height: '176px', background: '#3E4EB8'}}
                            github="https://github.com/wujq95/6441Game"
                        />
                        <CardComponent
                            name="Online Bipartite Graph Coloring Algorithm"
                            description = " Implement three algorithms to online bipartite graph coloring problem and evaluate the performance of different algorithms"
                            background={{color: '#fff', height: '176px', background: '#3E4EB8'}}
                            github="https://github.com/wujq95/GraphColoring"
                        />
                        <CardComponent
                            name="Network Protocol Analyzer"
                            description = "A network protocol analyzer that can capture and analyze data packets in the network"
                            background={{color: '#fff', height: '176px', background: '#3E4EB8'}}
                            github="https://github.com/wujq95/Network-Protocol-Analyzer"
                        />
                    </div>
                </div>
            )
        }
    }

    render() {
        return(
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Spring</Tab>
                    <Tab>React</Tab>
                    <Tab>Others</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>


            </div>
        )
    }
}

export default Projects;