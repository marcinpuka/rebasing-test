import './App.css';

import Button from 'react-bootstrap/Button';
import React from 'react';
import logo from './logo.svg';
import { QueryClient, QueryClientProvider } from "react-query";

import { Posts } from './Posts';
import React from 'react';
import logo from './logo.svg';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
      </header>
      <Button>Test</Button>
      <Posts />
    </div>
    </QueryClientProvider>
  );
}

export default App;
