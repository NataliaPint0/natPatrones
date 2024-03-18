import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' //bootstrap styles
import Navbarcomp from './components/Navbarcomp'
import Footercomp from './components/Foortercomp'
import Gallerycomp from './components/Gallerycomp'


function App() {
  return(
    <div className='App'>
    <Navbarcomp/>
    <Gallerycomp/>
    <Footercomp/>
    </div>
  );
}

export default App;
