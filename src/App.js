import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <HeaderComponent />
      <div>
        <ListEmployeeComponent />
      </div>
      <FooterComponent className='sticky bottom-0'/>
    </div>
  );
}

export default App;
