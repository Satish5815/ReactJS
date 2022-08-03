import logo from './logo.svg';
import './App.css';
import { WishMessage } from './component/WishMessage';
import { WishCard } from './component/WishCard';
import { StudentCard } from './component/StudentCard';

export function App() {
  return (
    <div className="App">
      <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
        <a className='navbar-brand text-white' href='/'>React With Props & States</a>
      </nav>
      {/* <WishMessage msg="Good Morning" time="10AM" />
      <WishMessage msg="Good AfterNoon" time="12PM" />
      <WishMessage msg="Good evening" time="6PM" />
      <WishCard msg="Good Morning" /> */}
      <StudentCard/>
    </div>
  );
}

export default App;
