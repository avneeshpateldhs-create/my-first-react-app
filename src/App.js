import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';

function App() {
  return (
    <>
      <Navbar title="NavBar2" about="About Website"/>
      <div className="container">
        <TextForm lable="Please Enter Text" />
        <About />
      </div>
    </>
  );
}

export default App;
