// 3rd-party components
import { FC } from 'react';

// local components
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';

const App: FC = () => {
  return (
    <main className="px-10 py-4 lg:px-24 lg:py-2">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
};

export default App;
