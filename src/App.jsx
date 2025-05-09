import React from "react";
import Hero from "./components/Hero";

function App() {
  return (
    <main className="relative min-h-dvh overflow-x-hidden">
      <Hero />
      <section className="bg-blue-75 relative z-[0] min-h-screen"></section>
    </main>
  );
}

export default App;
