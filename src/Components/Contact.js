import React,{ Component } from 'react';
import logo from '../Image/cont.png'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Vladimir Sotiroski</h2>
            <img
              src={logo}
              alt="avatar"
              style={{width: '80%',padding:'20px',margin:'auto'}}
               />
             <p style={{ width: '80%', margin: 'auto'}}>I've always been drawn to the overlap between design and development.I'm available for remote work - if you would like to build something together, get in touch.</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List >
                <ListItem>
                  <ListItemContent style={{fontSize: '20px',color:'red', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (+389) 70 28 09 07
                  </ListItemContent>
                </ListItem>

                 <ListItem>
                  <ListItemContent style={{fontSize: '20px',color:'red',margin:'auto', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    vladobit@yahoo.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '20px',color:'red', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                   live:.cid.2f736214bec8834c
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      )
  }
}
export default Contact;