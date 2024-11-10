import ClockHeading from "./components/clockHeading";
import ClockSlogan from "./components/clockSlogan";
import ClockTime from "./components/currentTime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <center>
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <ClockTime></ClockTime>
    </center>
  );
}

export default App;
