import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import Logo from '../../components/Logo/Logo';
import classes from './Layout.module.css';
import Nav from '../../components/Nav/Nav';
import WaveContainer from '../../components/WaveContainer/WaveContainer';
import AboutUs from '../../components/aboutus/AboutUs';
class Layout extends Component {
  state = {
    toggleAbout: false
  }
  /*Toggle About Section */
  toggleShowAboutHanlder = () => {
    this.setState({toggleAbout: !this.state.toggleAbout});
  }
  render() {
    return (
      <div className={classes.Layout}>
      <Logo />
      <CSSTransition unmountOnExit key="text" in={this.state.toggleAbout} timeout={600} classNames="fade">
      {state => <AboutUs />}
      </CSSTransition>
      <CSSTransition  key="email" in={!this.state.toggleAbout} timeout={600} classNames="fade">
      {state => <h1><a href="#" className={classes.emailLink}>HELLO@PYRAMIDART.COM</a></h1>}
      </CSSTransition>
      <WaveContainer />
      <Nav click={this.toggleShowAboutHanlder} />
      </div>
    );
  }

}

export default Layout;
