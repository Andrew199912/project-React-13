import { BrowserRouter, Routes , Route } from 'react-router-dom';
import '../css/App.css';
import Signin from './Signin';
import Profile from './Profile';
import ProductoDetalle from './ProductoDetalle';

function App() {

  const token = localStorage.getItem('id');

  if(!token){
    return <Signin />
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/" element={<Profile />}/>
          <Route path="/App2/:prodID" element={<ProductoDetalle/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;