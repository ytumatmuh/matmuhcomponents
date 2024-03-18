import ProjectComponent from "../Components/Projects/projectcomponent";

const projects = [
    {
        id: 1,
        title: "Project 0",
        subtitle: "Description of project 0",
        imgUrl: "https://iso.500px.com/wp-content/uploads/2014/07/2048-12.jpg",
    },
    {
        id: 2,
        title: "Project 0",
        subtitle: "Description of project 0",
        imgUrl: "https://iso.500px.com/wp-content/uploads/2014/07/2048-12.jpg",
    },
    {
        id: 3,
        title: "Project 0",
        subtitle: "Description of project 0",
        imgUrl: "https://iso.500px.com/wp-content/uploads/2014/07/2048-12.jpg",
    },
];

function Project() {
    return (
        <div className="project-service">
            {projects.map((project) => (
                <ProjectComponent
                    title={project.title}
                    subtitle={project.subtitle}
                    imgUrl={project.imgUrl}
                />
            ))}
        </div>
    );
}

export default Project;