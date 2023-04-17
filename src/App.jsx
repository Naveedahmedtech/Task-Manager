import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/header/Header';
import Home from './components/home/Home';
import AddTask from './components/addTask/AddTask';
import ManageTasks from './components/manageTasks/ManageTasks';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/add-task' element={<AddTask />} />
            <Route path='/manage-task' element={<ManageTasks />} />
            <Route path='*' element="Page Not Found" />
          </Routes> 
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
