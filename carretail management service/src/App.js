import {Navbar} from './components/Navbar';
import {Home} from './components/Home';
import { Footer } from './components/footer';
import { Form } from './components/form';
import { Budgetcar } from './components/Budgetcar';
import { Luxurycar } from './components/Luxurycar';
import {Allcars} from './components/Allcars';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Service } from './components/Service';


function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={[<Navbar />,<Home/>,<Service/>,<Form/>,<Footer/>]}/>
          <Route path='/Allcars' element={<Allcars/>}/>
          <Route path='/Budgetcars' element={<Budgetcar/>}/>
          <Route path='/Luxurycars' element={<Luxurycar/>}/>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
