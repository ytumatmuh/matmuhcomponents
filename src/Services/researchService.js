import ResearchComponent from "../Components/Researches/researches";
import './studiesService.css'

const researches = [
    {
        id: 1,
        title: "Nonlinear PDEs",
        subtitle: "Our research group focuses on the analysis of  nonlinear partial differential equations.",
    },
    {
        id: 2,
        title: "Nonlinear PDEs",
        subtitle: "Our research group focuses on the analysis of  nonlinear partial differential equations.",
    },
    {
        id: 3,
        title: "Nonlinear PDEs",
        subtitle: "Our research group focuses on the analysis of  nonlinear partial differential equations.",
    },
];

function Research() {
    return (
        <div className="research-service" >
            {researches.map((research) => (
                <ResearchComponent
                    title={research.title}
                    subtitle={research.subtitle}
                />
            ))}
        </div>
    );
}

export default Research;