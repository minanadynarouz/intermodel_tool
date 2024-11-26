import { useState } from 'react';
import Navbar from './nav/nav';
import SectionOne from './sectionOne/sectionOne';
import ContainerDetails from './sectionTwo/ContainerDetails';
import Login from './Login/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <>
          <Navbar />
          <div className="flex justify-center">
            <div className="h-[200vh] w-[80vw] mb-6 p-30 border-5 border-gray-300 rounded-2xl sm:h-[120vh] sm:w-[120vw] md:h-[90vh] md:w-[90vw] md:mb-6 lg:h-[70vh] lg:w-[95vw]">
              <SectionOne />
              <ContainerDetails />
            </div>
          </div>
        </>
      ) : (
        <>
          <Navbar />
          <Login setIsLoggedIn={setIsLoggedIn} />
        </>
      )}
    </>
  );
}

export default App;
