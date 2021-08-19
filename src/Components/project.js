import React,{ Component } from 'react';
import logo from '../Image/h_c_js.png';
import react_logo from '../Image/react.png';
import rmp from '../Image/RM1.png'
import corel_logo from '../Image/cd.png';
import logo1 from '../Image/logot1.png';
import boot_logo from '../Image/boot.png'
import gift_web from '../Image/gift.png';
import angular_logo from '../Image/ang.png';
import php_logo from '../Image/php.png';
import phpweb from '../Image/phpweb.png';
import tasty from '../Image/tasty.png'
import logoty from '../Image/Tasty1.gif'
import { Grid , Cell, Card ,Tab,Tabs, CardTitle,CardActions } from 'react-mdl';


class Project extends Component{
    constructor(props){
        super(props);
        this.state = {activeTab : 0 };
    }
    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div >
                    <Cell className='Red' col={12} style={{margin:'auto'}}>
                        <Cell col={3} style={{margin:'auto'}}>
                            <h5>Html & CSS Projects</h5>
                            <img style={{width:'50%'}}src={logo} alt='Comp'/>
                        </Cell>
                         <Cell className='Red' col={4} style={{margin:'auto'}}>
                            <Card className='width' shadow={0} style={{height: '50%'}}>
                              
                              <CardTitle expand style={{textAlign:'center'}}><img  className='width' src={tasty} alt="logo"></img></CardTitle>
                              <CardActions style={{padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                              <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}><a href="http://tastyburger.rf.gd/" rel="noopener noreferrer" target="_blank">
                              Tasty Burger House</a></span>
                             </CardActions>
                           </Card>
                           
                         </Cell>
                         </Cell>
                </div>
            )
        }else if(this.state.activeTab === 1){
            return(
                <div> 
                <Cell className='Red' col={12} style={{margin:'auto'}}>
                <Cell col={3} style={{margin:'auto'}}>
                    <h5>Bootstrap Projects</h5>
                    <img style={{width:'50%'}}src={boot_logo} alt='boot_logo'/>
                </Cell>
                <Cell className='Red' col={4} style={{margin:'auto'}}>
                  <Card shadow={0} className='width'>
                       <CardTitle expand style={{margin:'auto'}}><img className='width' src={phpweb} alt="Loading"></img></CardTitle>
                       <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                       <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                       Bootstrap Project</span>
                       </CardActions>
                </Card>
                </Cell>
            </Cell>
        </div>
            )
        }
        else if(this.state.activeTab === 2){
            return(
                <div>
                 <Cell className='Red' col={12} style={{margin:'auto'}}>
                   <Cell col={3} style={{margin:'auto'}}>
                    <h5>React Projects</h5>
                    <img style={{width:'50%'}}src={react_logo} alt='react_logo'/>
                   </Cell>
                        <Cell className='Red' col={4} style={{margin:'auto'}}>
                           <Card shadow={0} className='width'>
                       <CardTitle expand style={{textAlign:'center'}}><img className='width' src={rmp} alt="logo"></img></CardTitle>
                       <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                       <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                       React MDL Project</span>
                       </CardActions>
                </Card>
                </Cell>
            </Cell>
        </div>
            )
        }else if(this.state.activeTab === 3){
            return(
                <div>
                <Cell className='Red' col={12} style={{margin:'auto'}}>
                  <Cell col={3} style={{margin:'auto'}}>
                    <h5>Angular JS Projects</h5>
                    <img style={{width:'70%'}} src={angular_logo} alt='Angular JS'/>
                   </Cell>
                <Cell className='Red' col={4} style={{margin:'auto'}}>
                <Card shadow={0} className='width'>
                       <CardTitle expand style={{textAlign:'center'}}><img  className='width' src={gift_web} alt="logo"></img></CardTitle>
                       <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                       <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}><a href="https://giftshopmk.000webhostapp.com/" rel="noopener noreferrer" target="_blank">
                       Giftshop Angular/PHP/MySql WEB</a></span>
                       </CardActions>
                </Card>
                </Cell>
            </Cell></div>
            )
        }else if(this.state.activeTab === 4){
            return(
                <div > <Cell className='Red' col={12} style={{margin:'auto'}}>
                <Cell col={3} style={{margin:'auto'}}>
                    <h5>PHP MySQL Projects</h5>
                    <img style={{width:'80%'}} src={php_logo} alt='Php'/>
                </Cell>
                <Cell className='Red' col={4} style={{margin:'auto'}}>
                <Card shadow={0} className='width'>
                       <CardTitle expand style={{textAlign:'center'}}><img  className='width' src={gift_web} alt="logo"></img></CardTitle>
                       <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                       <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}><a href="https://giftshopmk.000webhostapp.com/" rel="noopener noreferrer" target="_blank">
                       Giftshop Angular/PHP/MySql WEB</a></span>
                       </CardActions>
                </Card>
                </Cell>
                <Cell className='Red' col={4} style={{margin:'auto'}}>
                <Card shadow={0} className='width'>
                       <CardTitle expand style={{textAlign:'center'}}><img className='width'  src={phpweb} alt="phpweb"></img></CardTitle>
                       <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                       <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                        PHP School WEB </span>
                       </CardActions>
                </Card>
                </Cell>
            </Cell></div>
            )
        }else if(this.state.activeTab === 5){
            return(
                <div > <Cell className='Red' col={12} style={{margin:'auto'}}>
                <Cell col={3} style={{margin:'auto'}}>
                    <h5>Graphic Design Projects</h5>
                    <img style={{width:'50%'}} src={corel_logo} alt='Corel Draw'/>
                </Cell>
                <Cell className='Red' col={4} style={{margin:'auto'}}>
                <Card shadow={0} className='width'>
                       <CardTitle expand style={{textAlign:'center'}}><img className='width' src={logo1} alt="logo"></img></CardTitle>
                       <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                       <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                       Giftshop Logo</span>
                       </CardActions>
                </Card>
                </Cell>
                <Cell className='Red' col={4} style={{margin:'auto'}}>
                <Card shadow={0} style={{width: '40%', height: '35%', margin: 'auto'}}>
                       <CardTitle expand style={{textAlign:'center'}}><img className='width' src={logoty} alt="logo"></img></CardTitle>
                       <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                       <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                       Tasty Burger Logo</span>
                       </CardActions>
                </Card>
                </Cell>
            </Cell></div>
            )
        }


    }
    render(){
        return(
            <div className="landing-grid-project">
                <Tabs activeTab = {this.state.activeTab} onChange={(tabId) =>
                     this.setState({ activeTab : tabId})} ripple>
                    <Tab style={{color:'white',fontWeight:'bold'}}>HTML/CSS/JS</Tab>
                    <Tab style={{color:'white',fontWeight:'bold'}}>Bootstrap</Tab>
                    <Tab style={{color:'white',fontWeight:'bold'}}>React</Tab>
                    <Tab style={{color:'white',fontWeight:'bold'}}>Angular </Tab>
                    <Tab style={{color:'white',fontWeight:'bold'}}>PHP & MySql</Tab>
                    <Tab style={{color:'white',fontWeight:'bold'}}>Graphic Design</Tab>    
                </Tabs>
                <section className='project-grid'>
                    <Grid>
                        <Cell col={11}>
                <div className='content'>{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}
export default Project;