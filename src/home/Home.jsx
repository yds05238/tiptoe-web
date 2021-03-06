import React, { Component } from 'react';
import tiptoe from '../image/tiptoe.png';
import MainImage from '../image/MainImage.jpeg';
import Timeline from '../image/Timeline.png';
import threeimages from '../image/threeimages.png';
import threesteps from '../image/threesteps.png';
import Footer from '../footer/footer';
import NavbarDesktop from '../navbar/NavbarDesktop.jsx';
import NavbarMobile from '../navbar/NavbarMobile';
import Navbar from '../navbar/Navbar';
import Typing from 'react-typing-animation';
import HomeMobile from './HomeMobile';
import './Home.css';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      showAbout: false,
    }

    this.showAbout = this.showAbout.bind(this);
    this.closeAbout = this.closeAbout.bind(this);
  }

  showAbout(event) {
    event.preventDefault();

    this.setState({ showAbout: true }, () => {
      document.addEventListener('click', this.closeAbout);
    });
  }

  closeAbout(event) {
    if (!this.dropdownAbout.contains(event.target)) {
      this.setState({ showAbout: false }, () => {
        document.removeEventListener('click', this.closeAbout);
      });
    }
  }

  state = {
    name: 'HOME',
  }

  render() {
    return (
      <div className="App">
        <NavbarDesktop />
        <NavbarMobile />
        < div class="imageText">
          <img src={MainImage} class="mainImage" alt="" />
        </div>


        <div class="tiptoeName1">
          <img src={tiptoe} class="nameLogo1" alt="" />
          <Typing loop={true} speed={110}>
            <span class="yourName2">your name</span>
            <Typing.Delay ms={1000} />
            <Typing.Backspace count={20} />
          </Typing>
          <hr class="line1"></hr>
        </div>

        <img src={Timeline} class="timelineImg" alt="" />
        <div class="homeimage">
          <img src={threeimages} class="image3" alt="" />
          <img src={threesteps} class="stepsImg" alt="" />
        </div>
        <HomeMobile />
        <Footer />
      </div >

    );
  }
}

export default Home;