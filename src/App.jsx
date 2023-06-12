import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Body from "./components/Body"
import ScrollToTop from "./components/ScrollToTop";

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <ScrollToTop />
      <Body />
      <Footer />
    </div>
  );
}

export default App
