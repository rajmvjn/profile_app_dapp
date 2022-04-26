import "./App.scss";
import RoutesView from "./routes/RoutesView";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Spinner from "./components/spinner/Spinner";

import { useAppSelector } from "./store";
import { useRef } from "react";

function App() {
  const dappRef = useRef();
  const homeRef = useRef();

  const httpReqStatus = useAppSelector(
    (state) => state.httpReqStatus.requstStatus
  );

  const scrollToRefHandler = (ref: any) => {
    const refItem = ref.current;
    if (refItem) {
      refItem.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="App">
      {httpReqStatus.isLoading ? <Spinner /> : null}
      <Header dappRef={homeRef} />
      <RoutesView dappRef={dappRef} />
      <Footer
        dappRef={dappRef}
        homeRef={homeRef}
        onScroll={scrollToRefHandler}
      />
    </div>
  );
}

export default App;
