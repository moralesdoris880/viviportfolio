import './App.css';

function App() {
  return (
    <div className="App">
      <div id="box1">
        <h1 id="namelogo">DORIS <br/> MORALES</h1>
        <span class="material-symbols-outlined" id="scrollarrow">arrow_forward_ios</span>
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
    </div>
  );
}

export default App;
