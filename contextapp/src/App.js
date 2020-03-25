import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/Booklist';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContexProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContexProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthContexProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
