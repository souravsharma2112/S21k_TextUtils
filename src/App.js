import './App.css';
import './style.css';
import './img/textCounter__logo.jpg'
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-3">
          <TextForm heading="Enter the Text to Analyze"/>
      </div>
      
    </>
  );
}

export default App;
