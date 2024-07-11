import logo from './logo.svg';
import './App.css';
import Header from './comonents/header/Header';
import Home from './comonents/home/Home';
import About from './comonents/about/About';

const App = () => {
  return (
    <>
    <Header/>
    <main className='main'>
      <Home/>
      <About/>
    </main>
    </>
  )
}

export default App;
