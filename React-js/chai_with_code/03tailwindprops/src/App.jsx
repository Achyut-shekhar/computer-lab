import Card from "./components/cards";
import "./App.css";

function App() {
 let myObj={
  username:"achyut",
  age: 21
 }

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind test</h1>
     <Card username={myObj.username} age={myObj.age} btnTxt="Graphic era Student"></Card>
     <Card  username={myObj.username} age={myObj.age}></Card>
    </>
  );
}

export default App;
