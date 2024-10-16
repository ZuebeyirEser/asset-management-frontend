import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import SignInComponent from './components/SingInComponent';
import RegisterComponent from './components/RegisterComponent';
import HomeComponent from './components/HomeComponent';
import ListAssetComponent from './components/ListAssetComponent';
import AddAssetComponent from './components/AddAssetComponent';
import AssetDetailsComponent from './components/AssetDetailsComponent';



function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen justify-between">
        <HeaderComponent />
          <div>
            <Routes>
                <Route path='/' exact element={<HomeComponent />} /> 
                <Route path='/login' exact element={<SignInComponent />} />
                <Route path='/get-started' element={<RegisterComponent />} /> 
                <Route path='/employees' element={<ListEmployeeComponent />} />
                <Route path='/view-assets' element={<ListAssetComponent />} />
                <Route path="/view-asset/:id" element={<AssetDetailsComponent />} />
                <Route path='/add-employees/' element={<AddEmployeeComponent />} />
                <Route path='/add-assets/' element={<AddAssetComponent />} />
                <Route path='/view-employee/:id' element={<ViewEmployeeComponent />} />

            </Routes>
          </div>
        <FooterComponent className='sticky bottom-0'/>
      </div>
    </Router>
  );
}

export default App;
