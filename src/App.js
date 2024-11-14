import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import New from './New';
import './App.css';

function App() {
  return (
    //최상위 컴포넌트에서 BrowserRouter 를 감싸줌
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="new" element={<New />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
