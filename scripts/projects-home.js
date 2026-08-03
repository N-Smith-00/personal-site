const projects = [
    {
        id: "",
        title: "This Webpage",
        description: "My personal website to showcase my projects, education, and experience",
        image: "website.png",
        technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
        id: "through-the-labyrinth",
        title: "Through the Labyrinth",
        description: "A roguelike game focused on creating unique experiences through perspective based gameplay",
        image: "labyrinth/labyrinth.png",
        technologies: ["Unity", "C#"],
    },
    {
        id: "trial-of-the-warden",
        title: "Trial of the Warden",
        description: "A virtual reality game where the player must defeat a boss to escape its prison",
        image: "trial/trial-sc.png",
        technologies: ["Unity", "C#", "Meta XR"],
    },
    {
        id: "barbell-calc",
        title: "Barbell Calculator",
        description: "A tool for calculating plate configurations on barbells",
        image: "barbell-calc/barbell-calc.png",
        technologies: ["HTML", "CSS", "Python", "Flask"]
    }
];

const projectsGrid = document.getElementById("projects-grid");

projects.forEach(project => {
    const card = document.createElement("a");
    card.classList.add("project");
    if (project.id) {
        card.href = `projects/${project.id}.html`;
    } else {
        card.href = "#";
    }

    card.innerHTML = `
        <div class="card-container">
            <h2 class="project-title">${project.title}</h2>
            <img src="images/projects/${project.image}" alt="">
            <p>${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(technology => `
                    <span class="tech-tag">
                        ${technology}
                    </span>
                `).join("")}
            </div>
        </div>
    `
    projectsGrid.appendChild(card)
});