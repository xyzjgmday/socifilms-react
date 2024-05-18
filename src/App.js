import "./App.css"
import NavigationBar from "./components/NavigationBar"
import Intro from "./components/Intro"
import Trending from "./components/Trending"
import SuperHero from "./components/Superhero"
import Furious from "./components/Furious"
import Horror from "./components/Horror"
import "./style/landingPage.css"


function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>

      <div className="trending">
        <Trending />
      </div>

      <div className="superhero">
        <SuperHero />
      </div>

      <div className="furious">
        <Furious />
      </div>

      <div className="horror">
        <hO />
      </div>

    </div>

    
  )
}

export default App
