import { Navbar, Start, Languages, People, About, Projects, Footer } from './components'
import { logo } from "./assets"
import './App.css'

function App() {
  let deg = 0;
  let lastScrollTop = 0;

  window.addEventListener('scroll', (event) => {
    const f = document.getElementById('Decoration1');
    const s = document.getElementById('Decoration2');
    if (window.pageYOffset > lastScrollTop) deg++;
    else deg--;
    if (f != null) {
      f.style.transform = `rotate(${deg}deg)`;
      lastScrollTop = window.pageYOffset;
    }
    if (s != null) {
      s.style.transform = `rotate(${deg}deg)`;
      lastScrollTop = window.pageYOffset;
    }
  });

  return (
    <div className="Homepage">
      <Navbar></Navbar>
      <Start></Start>
      <Languages></Languages>
      <People></People>
      <About></About>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  )
}

export default App
