import React from 'react';
import Header from './components/Header/Header';

class App extends React.Component {
  render() {
    return (<div className="name">
      <Header title="Шапка сайта ч/з props" />

    </div>
    )
  }
} 

export default App