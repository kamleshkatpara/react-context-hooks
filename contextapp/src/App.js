import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/Booklist';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContexProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContexProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContexProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
