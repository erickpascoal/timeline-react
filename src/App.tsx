import { Timeline } from "./components/Timeline";
import { GlobalStyle } from "./styles/global";
import { lines } from "./data";

function App() {
  return (
    <>
      <Timeline lines={lines} />
      <GlobalStyle />
    </>
  );
}

export default App;
