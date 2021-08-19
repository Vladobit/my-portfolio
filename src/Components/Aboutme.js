import React,{ Component } from 'react';
import avatar from "../Image/amc.png";
import { Grid , Cell, ProgressBar } from 'react-mdl';


class Aboutme extends Component{
    render(){
        return(
          <div style={{width:'100%', margin:'auto'}}>
            <Grid className='landing-grid'>
                 <Cell className='Red' col={12}> 
                        <Cell col={6}>
                            <h1 style={{fontSize: '30px',color:'red',textAlign:'left',marginTop:'50px',fontWeight:'bold'}}>All About Me</h1>
                           <p style={{fontSize:'1.3Srem',color:'white',margin:'auto',fontFamily:'Oxygen'}}>        Hello,<br/>
                            I am Vladimir Sotiroski 
                            full stack developer from 
                            Bitola,Macedonia. I have 
                            rich experience in web site  
                            design and building and
                            customization, aslo I am 
                            good in database SQL.<br/><br/>
                            Name:Vladimir Sotiroski<br/>
                            Birthday: 06.08.1975 <br/>
                            Location:Bitola MK <br/>
                            Email: vladobit@yahoo.com
                            </p>
                            <img src={avatar} alt="Me" className="avatar"/>
                        </Cell>
                    <Cell col={6} style={{color:'white',marginTop:'30px',textAlign:'left'}}>
                        <h3>My Skills</h3>
                        <h6 style={{color:'red'}}>Front-end Development Skils</h6>
                        <p style={{marginBottom:'0px'}}>HTML & CSS</p>
                        <ProgressBar style={{marginTop:'0px'}} progress={74} />
                        <p style={{marginBottom:'0px'}}>JS & Jquery</p>
                        <ProgressBar style={{marginTop:'0px'}} progress={55} />
                        <p style={{marginBottom:'0px'}}>Bootstrap</p>
                        <ProgressBar style={{marginTop:'0px'}} progress={80} />
                        <p style={{marginBottom:'0px'}}>React</p>
                        <ProgressBar style={{marginTop:'0px'}} progress={70} />
                        <p style={{marginBottom:'0px'}}>Angular JS</p>
                        <ProgressBar style={{marginTop:'0px'}} progress={70} />
                    
                        <h6 style={{color:'red'}}>Back-end Development Skils</h6>
                        <p style={{marginBottom:'0px'}}>MySQL & Database</p>
                        <ProgressBar style={{marginTop:'0px'}} progress={90} />
                        <p style={{marginBottom:'0px'}}>PHP & Smarty PHP</p>
                        <ProgressBar style={{marginTop:'0px'}} progress={60} />
                        
                        <p style={{marginBottom:'0px'}}>Python</p>
                        <ProgressBar style={{marginTop:'0px'}} progress={50} />
                        
                        <h6 style={{color:'red'}}>Graphic Design</h6>
                        <p style={{marginBottom:'0px'}}>Corel Draw</p>
                        <ProgressBar style={{marginTop:'0px'}} progress={70} />

                        <h6 style={{color:'red'}}>Learning</h6>
                        <p style={{marginBottom:'0px'}}>Nest JS Node JS</p>
                        <ProgressBar style={{marginTop:'0px'}} progress={30} buffer={50} />

                      </Cell>                            
                </Cell>
            </Grid>
            
        </div>
        )
    }
}
export default Aboutme;