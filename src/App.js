import {GlobalStyle} from './Global.styled'
import Header from './components/header /Header'
import InteractiveSection from './components/InteractiveSection/Interactive'
import Footer from './components/footer/Footer'
import CreationSection from './components/creationsSection/CreationSection'
function App() {
  return (
    <>
      <GlobalStyle/>
      <Header />
      <InteractiveSection/>
      <CreationSection />
      <Footer />
    </>
  );
}

export default App;
