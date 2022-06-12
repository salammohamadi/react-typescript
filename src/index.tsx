import React from 'react';
import ReactDOM from 'react-dom/client';

// react component

const App = () => {
  return <div>Hi there?</div>;
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App />);
