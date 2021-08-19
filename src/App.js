import React ,{Component}from 'react';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import Main from './Components/main';
import { Link} from 'react-router-dom';
import './App.css';




class App extends Component {
    render() {
      return (
  <div className="demo-big-content">
      <Layout>
          <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} waterfall>
              <Navigation>
                  <Link style={{fontSize:'1.4rem',color:'white',fontWeight:'bold'}} to="/aboutme">About Me</Link>
                  <Link style={{fontSize:'1.4rem',color:'white',fontWeight:'bold'}} to="/project">Projects</Link>
                  <Link style={{fontSize:'1.4rem',color:'white',fontWeight:'bold'}} to="/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer className="header-color" style={{background:'black',color:'white'}}title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>}>
              <Navigation >
                <Link style={{fontSize:'1.1rem',color:'white',fontWeight:'bold'}} to="/aboutme">About Me</Link>
                <Link style={{fontSize:'1.1rem',color:'white',fontWeight:'bold'}} to="/project">Projects</Link>
                <Link style={{fontSize:'1.1rem',color:'white',fontWeight:'bold'}} to="/contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
      </Layout>
  </div>
  
      );
    }
  }
export default App;
