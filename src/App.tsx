import React from 'react';
import { Carousel } from './components/Carousel';
import { SearchSection } from './components/SearchSection';
import { destinations } from './types/destination';

function App() {
  return (
    <main className="w-full">
      <Carousel destinations={destinations} />
      <SearchSection destinations={destinations} />
    </main>
  );
}

export default App;