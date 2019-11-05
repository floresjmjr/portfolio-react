import React from "react";
import ProjectLinks from "./projectLinks/projectLinks";
import ProjectSkills from "./projectSkills/projectSkills";
import NutritionPic from "../../Images/nutriApp.png";
import EcommercePic from "../../Images/e-commerce.png";
import MovieGenPic from "../../Images/movieGenApp.png";
import ContactMangerPic from "../../Images/contactManager.png";
import TodoPic from "../../Images/todoApp.png";


const main = () => {
  const projects = [
    {
      title: "Nutrition App",
      website: "http://nutri-app.us-east-1.elasticbeanstalk.com/analysis",
      github: "https://github.com/floresjmjr/nutriApp",
      description:
        "This application allows a user to search for food items using two USDA databases and see their nutritional breakdown depending on the selected serving size. The quantity of the food item can be added to the food log and the totals calculated. You can also find foods based on a specific nutrient. Graphs and a PieChart helps you visually see your nutrition intake.",
      frontEnd: ["HTML", "CSS", "JavaScript", "jQuery", "D3.js"],
      backEnd: ["Pug", "Node", "Express"],
      dataDeploy: ["MongoDB(Atlas)", "AWS Elastic Beanstalk"],
      features: ["Responsive Design", "HTML Validated(W3C)", "USDA API"],
      picture: NutritionPic
    },
    {
      title: "E-Commerce App",
      website: "https://sleepy-heyrovsky-3e5b7d.netlify.com",
      github: "https://github.com/floresjmjr/e-commerceApp-react-aws",
      description:
        "An e-commerce web page that has an interactive navigation menu, multiple categories and subcategories, slides, shopping cart and checkout forms while partially using an amazon data set that was parsed to add a variety of products.",
      frontEnd: ["HTML", "CSS", "JavaScript", "React"],
      backEnd: ["-----"],
      dataDeploy: ["Firebase", "Netlify"],
      features: ["Responsive Design"],
      picture: EcommercePic
    },
    {
      title: "Movie Recommender App",
      website: "https://movie-recommendation-gen.herokuapp.com/",
      github: "https://github.com/floresjmjr/movieGen",
      description:
        "This application allows a user to see what movies are trending, popular and highly rated. The user can search for movies and seek recommendations based on that search so that they can be added to the watchlist.",
      frontEnd: ["HTML", "CSS", "JavaScript", "jQuery", "Handlebars"],
      backEnd: ["Pug", "Node", "Express"],
      dataDeploy: ["Postgresql", "Heroku", "Sequelize"],
      features: [
        "Responsive Design",
        "HTML Validated(W3C)",
        "The Movie Database API",
        "The Open Movie Database API"
      ],
      picture: MovieGenPic
    },
    {
      title: "Task Manager App",
      website: "https://multiview-todo-app.herokuapp.com",
      github: "https://github.com/floresjmjr/postgresql_todo_app",
      description:
        "This application allows you to add, edit, and delete any tasks you choose. You also have the ability to select by date which tasks to see, edit and delete. The main display updates as you navigate the application.",
      frontEnd: ["HTML", "CSS", "JavaScript", "jQuery", "Handlebars"],
      backEnd: ["Pug", "Node.js", "Express"],
      dataDeploy: ["Postgresql", "Heroku", "Sequelize"],
      features: [
        "Single Page Application",
        "Responsive Design",
        "HTML Validated(W3C)",
        "OLOO Design Pattern"
      ],
      picture: TodoPic
    },
    {
      title: "Contact Manager App",
      website: "https://contact-manager-jf.firebaseapp.com",
      github: "https://github.com/floresjmjr/contactManager-react",
      description:
        "This application allows you to add, edit, update, delete as well as search your contacts. You can also add tags to categorize your contacts.",
      frontEnd: ["HTML", "CSS", "JavaScript", "React"],
      backEnd: ["----"],
      dataDeploy: ["Firebase for both"],
      features: ["Responsive Design"],
      picture: ContactMangerPic
    },
  ];

  const appList = projects.map(app => {
    return (
      <li className="appItem" key={app.title}>
        <h4>{app.title}</h4>
        <ProjectLinks
          website={app.website}
          github={app.github}
          description={app.description}
          picture={app.picture}
        />
        <ProjectSkills
          frontEnd={app.frontEnd}
          backEnd={app.backEnd}
          dataDeploy={app.dataDeploy}
          features={app.features}
        />
      </li>
    );
  });

  return (
    <main id='portfolio'>
      <h1>Portfolio</h1>
      <ul className='projects'>{appList}</ul>
    </main>
  );
};

export default main;
