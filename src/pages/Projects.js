import '../css/Project.css';

function Projects(){
    const ProjectList = [
        {
            title: "PlantFinder",
            src: "https://github.com/moralesdoris880/native-plant-locator",
            imgSrc: "/plantfinder.png",
            stack: ["Javascript","Ruby on Rails","React","CSS", "HTML"],
            aboutSentence: "A web application for finding native plants and getting started in any Landscape or Gardening Project."
        },{
            title: "Meraz M. Portfolio",
            src: "https://github.com/moralesdoris880/mmportfolio",
            imgSrc: "/merazm.png",
            stack: ["Javascript","React","CSS","Tailwind","HTML"],
            aboutSentence: "A portfolio website showcasing data analyst projects for Meraz M."
        },{
            title: "NYC Drinkers",
            src: "https://github.com/moralesdoris880/nycdrinkers",
            imgSrc: "/nycdrinkers.png",
            stack: ["Javascript","Ruby on Rails","React","CSS", "HTML"],
            aboutSentence: "A web application for drinkers based in NYC to rate drinks, show transparent prices, and list the best rated bars."
        },{
            title: "JG Bartending",
            src: "https://github.com/moralesdoris880/jgbartending",
            imgSrc: "/jgbartending.png",
            stack: ["Javascript","React","CSS", "HTML"],
            aboutSentence: "A website for promoting J&G Bartending Services."
        },{
            title: "Yaite",
            src: "https://github.com/moralesdoris880/yaite",
            imgSrc: "/yaite.png",
            stack: ["Javascript","Ruby on Rails","React","Redux","CSS", "HTML"],
            aboutSentence: "A web application that has free online chatrooms to meet new friends from all over the world."
        }
    ]
    return(
        <div id="projectsContainer">
            <h1 id="ProjectTitle">Projects</h1>
            <div id="projectList">
                {
                    ProjectList.map((project)=>
                        <div key={project.title} className="projectBox">
                            <div>
                            <h2 className="projectTitle">{project.title}</h2>
                            <ul className="stackList">{
                                project.stack.map((tech)=>
                                    <li key={tech} className="stack">{tech}</li>
                            )}
                            </ul>
                            <p className="projectAbout">{project.aboutSentence}</p>
                            <button className="projectButton"><a href={project.src} className="projectButtonLink">Github</a></button>
                            </div>
                            <img src={project.imgSrc? project.imgSrc: "/imagenotfound.jpeg"} className='projectImg'/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Projects;