import logo from './logo.svg';
import './App.css';
import Header from './comonents/header/Header';
import Home from './comonents/home/Home';

const App = () => {
  return (
    <>
    <Header/>
    <main className='main'>
      <Home/>
    </main>
    </>
  )
}

export default App;
