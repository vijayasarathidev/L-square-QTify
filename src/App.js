import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Section from "./Components/Section/Section";
import {
  fetchTopAlbum,
  fetchNewAlbums,
  fetchFilters,
  fetchSongs,
} from "./api/api";
import { StyledEngineProvider } from "@mui/material/styles";
//import Faqs from "./Components/Faqs/Faqs";
import MusicPlayer from "./Components/Musicplayer/Musicplayer";
import FAQAccordion from "./Components/FaqAccordian/FaqAccordian";
function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar />
        <Hero />
        <Section title="Top Album" dataSource={fetchTopAlbum} type="album" />
        <Section title="New Album" dataSource={fetchNewAlbums} type="album" />
        <hr
          style={{
            background: "var(--color-primary)",
            height: "1px",
            border: "none",
          }}
        />
        <Section
          title="Songs"
          dataSource={fetchSongs}
          filterSource={fetchFilters}
          type="song"
        />
        <hr
          style={{
            background: "var(--color-primary)",
            height: "1px",
            border: "none",
          }}
        />
      </StyledEngineProvider>
      <FAQAccordion/>
      <MusicPlayer/>
    </>
  );
}

export default App;