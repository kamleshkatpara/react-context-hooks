import React from 'react';
import BookContextProvider from './contexts/BookContext';
import Navbar from './contexts/Navbar';
import BookList from './contexts/BookList';
import NewBookForm from './contexts/BookForm';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
