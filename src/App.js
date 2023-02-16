// Import data
import SearchBar from './Searchbar';
import Gallery from './Gallery'
import Directory from './Directory';
import Posting from './Posting'

import SideBar from './Sidebar';

// import Postings from './postings.js'
// Import components
import './App.css';


function App(){
  return (
    <div>
      {/* <h1>craigslist</h1> */}
      <SearchBar />
      <Directory />
      <Gallery />
      <SideBar />

      <div className="App">
        {/* Your content will go here! */}
      </div>
    </div>
  );
}

export default App;
