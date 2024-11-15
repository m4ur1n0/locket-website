// src/pages/_app.js

import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import '../styles/globals.css'

function App({ Component, pageProps }) {
    return (
      <>
        <NavBar/>
        <Component {...pageProps} />
        <Footer />
      </>
    );
}

export default App;