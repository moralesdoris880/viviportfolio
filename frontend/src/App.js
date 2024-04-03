import './App.css';
import { Chrono } from "react-chrono";

function App() {
  const items = [{
    title: "June 2017",
    cardTitle: "Queens Metropolitan High School",
    cardSubtitle:"High School Diploma",
  }, {
    title: "November 2021 - May 2022",
    cardTitle: "Flatiron School",
    cardSubtitle:"Specialization: Software Engineering",
    // cardDetailedText: "Bootcamp certification program; Stack: Ruby on Rails, JS, React, Rake",
  }, {
    title: "January 2024 - March 2024",
    cardTitle: "Google",
    cardSubtitle:"Specialization: Cybersecurity",
    // cardDetailedText: "Skills:",
  }, {
    title: "May 2024",
    cardTitle: "B.A Hunter College GPA: 3.4",
    cardSubtitle:"Major: Media Studies Minor: Computer Science",
    // cardDetailedText: "Extracurricular Activities: EGDC ( Game Fellowship & Events Manager )",
  }];

  return (
    <div className="App">
      <div id="box1">
        <h1 id="namelogo">DORIS <br/> MORALES</h1>
        <span class="material-symbols-outlined" id="scrollarrow"> SCROLL arrow_forward_ios</span>
      </div>
      <div id="box2">
        <img src="./dorispfp.jpg" alt="Doris is depicted with long dark red curly hair sitting on a wooden chair flanked by a stone wall."/>
        <div id="bio">
          <h2>Who is Doris Morales?</h2>
          <p>Doris is an Engineer and Multi-media artist based in NYC with a range of skills. 
          She is currently a senior at Hunter College going for a Bachelors of Arts in Media Studies and minor in Computer Science.
          She is an alumni from Flatiron School with a specialization in Software Engineering.
          She is currently focusing on Cybersecurity within Penetration Testing field, 
          while at the same time learning ancient languages and history through Archaeology.
          </p>
        </div>
      </div>
      <div id="box3">
        <h3 id="educationtitle">EDUCATION</h3>
        <div id="chronobox">
          <Chrono cardHeight={100} cardWidth={300} items={items} mode="HORIZONTAL" disableToolbar fontColor='black' theme=
          {{primary: 'white',
            secondary: 'white',
            cardBgColor: 'white',
            titleColor: 'black',
            titleColorActive: 'black',
            cardText: 'black',
          }}/>
        </div>
      </div>
      <div id="box4">

      </div>
    </div>
  );
}

export default App;
