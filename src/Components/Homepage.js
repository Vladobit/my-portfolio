import React,{ Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Homepage extends Component{
        render() {
          return(
            <div className="content" style={{width: '100%', margin: 'auto'}} >
              <Grid className="landing-grid">
                <Cell col={12}>
                <h1 className="homeh1">Vladimir Sotiroski</h1>
                      
                   
                  
                      <div className="banner-text">
                      <h2>Full Stack Web Developer</h2>
                      <hr/>
                          <p>HTML/CSS | Bootstrap | JavaScript | React |  Python | NodeJS  PHP  | Smarty PHP | Angular | MySQL | Corel Draw</p>
                          
                            
                       </div>
                       <div className="social-links">
                                {/* LinkedIn */}
                                  <a href="https://www.linkedin.com/in/vladimir-sotiroski-0483995b" rel="noopener noreferrer" target="_blank">
                                  <i className="fa fa-linkedin-square" aria-hidden="true" /></a>

                                {/* Github */}
                                  <a href="http://github.com/Vladobit/my-portfolio" rel="noopener noreferrer" target="_blank">
                                  <i className="fa fa-github-square" aria-hidden="true" /></a>
      
                                {/* Freecodecamp */}
                                  <a href="https://www.linkedin.com/in/vladimir-sotiroski-0483995b" rel="noopener noreferrer" target="_blank">
                                  <i className="fa fa-free-code-camp" aria-hidden="true" /></a>
      
                                {/* Skype */}
                                  <a href="https:/join.skype.com/invite/gQZO4gf8aHbv" rel="noopener noreferrer" target="_blank">
                                  <i className="fa fa-skype" aria-hidden="true" /></a>
                            </div>
                       </Cell>
                
              </Grid>
            </div>
          )
        }
      }
export default Homepage;