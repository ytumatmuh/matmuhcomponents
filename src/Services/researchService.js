const ResearchService = {

    getResearch: () => {

        return [
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

    },

    getResearchById: (id) =>{
        const researches = ResearchService.getResearch();
        return researches.find(research=>research.id == id)

    }


}

export default ResearchService;