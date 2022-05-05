import "./App.scss";
import RoutesView from "./routes/RoutesView";
import Spinner from "./components/spinner/Spinner";
import { useAppSelector } from "./store";
import { useRef } from "react";

function App() {
  const dappRef = useRef();
  const connectRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const httpReqStatus = useAppSelector(
    (state) => state.httpReqStatus.requstStatus
  );

  return (
    <div className="App">
      {httpReqStatus.isLoading ? <Spinner /> : null}

      <RoutesView
        dappRef={dappRef}
        connectRef={connectRef}
        aboutRef={aboutRef}
      />
    </div>
  );
}

export default App;
