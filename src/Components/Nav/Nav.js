import React, { Component } from "react";
import ProfilePic from "../../Images/profile_pic.png";
import LinkedInPic from "../../Images/linkedin.png";
import TwitterPic from "../../Images/twitter.png";
import Toggle from "../../Images/hamburger.png";



class Nav extends Component {

  toggleMenu = () => {
    const profileBox = document.getElementById('profileBox')
    if(profileBox.style.display === 'none') {
      profileBox.style.display = 'block';
    } else {
      profileBox.style.display = 'none';
    }
  }

  render() {

    return (
      <nav>
        <div id="hamburger" onClick={this.toggleMenu}>
          <img src={Toggle} alt="profile toggle" />
        </div>
        <div id="profileBox">
          <div id="profile">
            <header>
              <img src={ProfilePic} alt="profile_pic"/>
              <h3>Jorge Flores</h3>
              <h6 id="profileTitle">Lawyer, Full Stack Developer candidate </h6>
            </header>
            <div id="profileMain">
              <h6 id="gists">Gist Topics</h6>
              <ul className="Gists">
                  <li>
                    <a href="https://gist.github.com/floresjmjr/5d11e1eecb15d73f03cab3f937101a43">this</a>
                  </li>
                  <li> 
                    <a href="https://gist.github.com/floresjmjr/0c11b2250451c6fb176aee9fab71fde8">Event Flow</a>
                  </li>
              </ul>
              <p>
                <a href="https://twitter.com/floresjmjr">
                  <img src={TwitterPic} alt="twitter logo link" />
                </a>
              </p>
              <p> 
                <a href="https://www.linkedin.com/in/jorge-flores-ab72b320/">
                  <img src={LinkedInPic} alt="linkedin logo link" />
                </a>
              </p>
            </div>
          </div>
        </div>
        
      </nav>
    )
  }
};

export default Nav;
