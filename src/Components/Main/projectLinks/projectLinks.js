import React from "react";

const projectLinks = props => {
  
  let website = ''
  if(props.website) {
    website = ( <a href={props.website} rel="noopener noreferrer" target="">Visit Page</a>)
  } else {
    website = (<p>Visit Page</p>)
  }

  return (
    <div className="projectLinksContainer">
      <div className="projectLinks">
        <a href={props.website} rel="noopener noreferrer" target="_blank">
          <img
            src={props.picture}
            alt="thumbnail of nutrition application"
          />
        </a>
        <div className="buttons">
          <div className="leftButton">
            {website}
          </div>
          <div className="rightButton">
            <a href={props.github} rel="noopener noreferrer" target="_blank">
              Github Code
            </a>
          </div>
        </div>
        <p className="appDescription">{props.description}</p>
      </div>
    </div>
  );
};

export default projectLinks;
