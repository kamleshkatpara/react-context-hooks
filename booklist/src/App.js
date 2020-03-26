import React from 'react';
import BookContextProvider from './contexts/BookContext';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import NewBookForm from './components/BookForm';

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
