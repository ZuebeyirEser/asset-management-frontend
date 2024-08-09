import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen justify-between">
        <HeaderComponent />
          <div>
            <Routes> 
                <Route path='/' element={<ListEmployeeComponent />} />
                <Route path='/employees' element={<ListEmployeeComponent />} />
            </Routes>
          </div>
        <FooterComponent className='sticky bottom-0'/>
      </div>
    </Router>
  );
}

export default App;
