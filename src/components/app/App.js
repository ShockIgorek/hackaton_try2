import './App.css';
import AppHeader from '../app-header/app-header.js';
import AboutTheTeam from '../aboutTheTeam/aboutTheTeam.js';
import AboutUs from '../aboutUs/abouUs';
import Job from '../job/job.js';
import Footer from '../footer/footer.js';
import Work from '../work/work.js';



function App() {
  return (<>
    <div className="App">
      <AppHeader />
      <AboutTheTeam />
      {/* <AboutUs /> */}
      <Job></Job>
      <Work></Work>
      <Footer />
    </div>
    </>
  );
}



export default App;
