import ClassCard from "./components/ClassCard";
import { FunCard } from "./components/FunCard";
import { MessageCard } from "./components/MessageCard";
import { WishCard } from "./components/WishCard";


function App() {
  return (
    <div className="App">
      <nav>
        <h2 href="/">Welcome to Rlog Application</h2>
        <ClassCard />
        <FunCard />
        <MessageCard />
        <WishCard />
      </nav>
    </div>
  );
}

export default App;
