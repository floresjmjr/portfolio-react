import React from "react";

const projectLinks = props => {
  

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
            <a href={props.website} rel="noopener noreferrer" target="_blank">
              Visit Page
            </a>
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
