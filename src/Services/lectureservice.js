const LectureService = {
  getLecture: () => {

    return [
      {
        id: 1,
        name: "Introduction to Applied Mathematics",
        content: [
          {
            id: 1,
            desc: "Syllabus of Introduction to Applied Mathematics",
            contentUrl: "",
          },
          {
            id: 2,
            desc: "Notes of Introduction to Applied Mathematics",
            contentUrl: "",
          },
        ],
      },
      {
        id: 2,
        name: "Physics 2",
        content: [
          {
            id: 1,
            desc: "Syllabus of Physics 2",
            contentUrl: "",
          },
          {
            id: 2,
            desc: "Notes of Physics 2",
            contentUrl: "",
          },
        ],
      },
      // Add more announcements as needed
    ];
  
  },

  getLectureById: (id) => {
    const lectures = LectureService.getLecture();
    return lectures.find(lecture=>lecture.id ==id)
  }
  
}


export default LectureService;