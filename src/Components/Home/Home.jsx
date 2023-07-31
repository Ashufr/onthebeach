import "./Home.css";

import Navbar from "../Navbar/Navbar";
import video from "../../assests/video.mp4";
function Home() {
  return (
    <section className="home">
      <Navbar />
      <video src={video} autoPlay loop className="overlay"></video>
      <div className="video">
        <video src={video} autoPlay muted loop></video>
      </div>
    </section>
  );
}

export default Home;
