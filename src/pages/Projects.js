function Projects(){
    const ProjectList = [
        {
            title: "PlantFinder",
            src: "https://github.com/moralesdoris880/native-plant-locator",
            imgSrc: "",
            stack: ["Javascript","Ruby on Rails","React","CSS", "HTML"],
            aboutSentence: "A web application for finding native plants and getting started in any Landscape or Gardening Project."
        },{
            title: "Meraz Mamun Portfolio",
            src: "https://github.com/moralesdoris880/mmportfolio",
            stack: ["Javascript","React","CSS","Tailwind","HTML"],
            aboutSentence: "A portfolio website for a data analyst."
        },{
            title: "NYC Drinkers",
            src: "https://github.com/moralesdoris880/nycdrinkers",
            imgSrc: "",
            stack: ["Javascript","Ruby on Rails","React","CSS", "HTML"],
            aboutSentence: "A web application for drinkers based in NYC to rate drinks, show transparent prices, and list the best rated bars."
        },{
            title: "JG Bartending",
            src: "https://github.com/moralesdoris880/jgbartending",
            imgSrc: "",
            stack: ["Javascript","React","CSS", "HTML"],
            aboutSentence: "A website for promoting J&G Bartending Services."
        },{
            title: "Yaite",
            src: "https://github.com/moralesdoris880/yaite",
            imgSrc: "",
            stack: ["Javascript","Ruby on Rails","React","Redux","CSS", "HTML"],
            aboutSentence: "A web application that has free online chatrooms to meet new friends from all over the world."
        }
    ]
    return(
        <div>
            <h1 id="ProjectTitle">Projects</h1>
            <div>
                {
                    ProjectList.map((project)=>
                        <li key={project.title}>
                            <h2>{project.title}</h2>
                            <ul>{
                                project.stack.map((tech)=>
                                    <li key={tech} >{tech}</li>
                            )}
                            </ul>
                            <p>{project.aboutSentence}</p>
                            <button><a href={project.src}>Github</a></button>
                        </li>
                    )
                }
            </div>
        </div>
    )
}

export default Projects;