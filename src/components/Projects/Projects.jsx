import "./Projects.css";
import luckyRollsImg from '../../assets/lucky-rolls.png';
import scoreKeeperImg from '../../assets/score-keeper.png';
import spotifyCloneImg from '../../assets/spotify-clone.png';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <img src={luckyRollsImg} alt="Lucky Rolls" />
          <h3>Lucky Rolls</h3>
          <p>A React-based dice game with winning conditions.</p>
          <a
            href="https://zhritik007.github.io/Lucky-Rolls/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </div>

        <div className="project-card">
          <img src={scoreKeeperImg} alt="Score Keeper" />
          <h3>Score Keeper</h3>
          <p>A React app to track player scores.</p>
          <a
            href="https://zhritik007.github.io/Score-Keeper/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </div>

        <div className="project-card">
          <img src={spotifyCloneImg} alt="Spotify Clone" />
          <h3>Spotify Clone</h3>
          <p>JavaScript-based music player mimicking Spotify.</p>
          <a
            href="https://zhritik007.github.io/Spotify-Clone/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
