import AnnouncementComp from "../Components/Announcements/announcements";

const announcements = [
  {
    id: 1,
    date: "February 24, 2024",
    title: "A new approach to understanding complex systems",
    subtitle: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat justo ut felis lacinia, nec sollicitudin libero consequat. Duis efficitur felis auctor, consectetur tortor at, condimentum urna.",
    photoUrl: "https://iso.500px.com/wp-content/uploads/2014/07/2048-12.jpg",
  },
  {
    id: 2,
    date: "February 23, 2024",
    title: "Exciting News!",
    subtitle: "Pellentesque habitant morbi tristique senectus",
    content:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed consectetur velit a augue ultrices interdum.",
    photoUrl: "https://iso.500px.com/wp-content/uploads/2014/07/2048-12.jpg",
  },
  // Add more announcements as needed
];

function Announcement() {
  return (
    <div>
      {announcements.map((announcement) => (
        <AnnouncementComp
          key={announcement.id}
          date={announcement.date}
          title={announcement.title}
          subtitle={announcement.subtitle}
          content={announcement.content}
          photoUrl={announcement.photoUrl}
        />
      ))}
    </div>
  );
}

export default Announcement;
