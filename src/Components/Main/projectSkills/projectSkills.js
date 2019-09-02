import React from "react";

const projectSkills = props => {
  return (
    <div className="projectSkillsContainer">
      <div className="projectSkills">
        <div className="projectTechnologies">
          <h5>Technologies Used</h5>
          <dl>
            <dt>Front-End</dt>
            <dd>{props.frontEnd.join(", ")}</dd>
            <dt>Back-End</dt>
            <dd>{props.backEnd.join(", ")}</dd>
            <dt>Database & Deployment</dt>
            <dd>{props.dataDeploy.join(", ")}</dd>
          </dl>
        </div>
        <div className="projectFeatures">
          <h5>Features</h5>
          <ul>
            {props.features.map(feature => {
              return <li key={feature}>{feature}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default projectSkills;
