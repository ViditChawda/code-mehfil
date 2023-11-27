import AboutUs from "./pages/aboutUs-page";
import Landing from "./pages/landing-page";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTES } from "./routes";
import Contact from "./pages/contact-page";
import Events from "./pages/events-page";


export default function App() {
  return (
    <h1 className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path={ROUTES.aboutUs} element={<AboutUs />} />
          <Route path={ROUTES.contactUs} element={<Contact />} />
          <Route path={ROUTES.events} element={<Events />} />
        </Routes>
      </BrowserRouter>

    </h1>
  )
}