import React, { Component } from 'react';

// components
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Backdrop from './components/Backdrop/Backdrop';
import './App.css';

class App extends Component {
  state = {
    sideBarOpen: false
  };

  handleToggleSidebarOpen = () => {
    this.setState(prevState => {
      return { sideBarOpen: !prevState.sideBarOpen };
    });
  };

  handleSidebarClose = () => {
    this.setState({ sideBarOpen: false });
  };

  render() {
    const { sideBarOpen } = this.state;

    return (
      <div className='app'>
        <Sidebar sidebarClose={this.handleSidebarClose} show={sideBarOpen} />
        <Backdrop sidebarClose={this.handleSidebarClose} show={sideBarOpen} />
        <div className='container'>
          <Navbar toogleSidebarOpen={this.handleToggleSidebarOpen} />
          <main className='main'>
            <h1>Content page</h1>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
