import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from "./components/Model"
import Navbar from "./components/Navbar"

import * as Sentry from "@sentry/react";
import Footer from "./components/Footer";

const App = () => {
// 3:12:27
  return (
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model />
      <Features/>
      <HowItWorks/>
      <Footer/>
    </main>
  )
}

export default Sentry.withProfiler(App);
