import DetailPage from './components/detailPage';

const Content = {
  date: '14 Şubat 2017',
  title: 'Header Kanka',
  content: ["The band co-existed with the members' previous projects for about a year and a half. Members would invest the money raised with Feeling B shows in new project. They recorded their first songs in a building that had been squatted by Feeling B frontman Aljoscha Rompe.[2] A contest was held in Berlin for amateur bands in 1994, the winner of which would receive access to a professional recording studio[2] for a whole week. Kruspe, Riedel, Schneider, and Lindemann entered and won the contest with a 4-track demo tape with demo versions of songs from Herzeleid, written in English. This sparked Paul Landers' attention, who wanted in on the project upon hearing their demo. To complete their sound, Rammstein attempted to recruit Christian 'Flake' Lorenz, who had played with Landers in Feeling B. Though initially hesitant, Lorenz eventually agreed to join the band.",
    "In 1992, Kruspe made his first trip to the United States with Till Lindemann and Oliver 'Ollie' Riedel. He realized that he did not want to make US music and concentrated on creating a unique German sound. Kruspe, Riedel and Schneider started working together on a new project in 1993. Finding it difficult to write both music and lyrics, Kruspe persuaded Lindemann, whom he had overheard singing while he was working, to join the fledgling group."],
  photoUrl: "https://lh3.googleusercontent.com/proxy/b9zAf-C11LZOBbDRy6czo8Z7nCh3XErz5lTYP3iwawE3BSrZRzGI9Cgic8vIVbfRdgcdblVYr3u7i6VDQbPLP5D9jHCb_57fzR5DFLg"
}


function App() {
  return (
    <div className="App">

      <DetailPage
        date={Content.date}
        title={Content.title}
        content={Content.content}
        photoUrl={Content.photoUrl}
        />
  

    </div>
  );
}

export default App;
