import React, { Component } from 'react';
import PortfolioAppBar from '../navbar/PortfolioAppBar';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHeader: true,
      lastScrollY: 0
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { lastScrollY } = this.state; 
    const currentScrollY = window.scrollY;
    const threshold = 50; // Umbral de desplazamiento, ajustable según tus necesidades
  
    if (Math.abs(currentScrollY - lastScrollY) < threshold) {
      // No hacer nada si el cambio en el desplazamiento es menor que el umbral
      return;
    }
  
    if (currentScrollY > lastScrollY) {
      // Desplazando hacia abajo
      this.setState({ showHeader: false });
    } else {
      // Desplazando hacia arriba
      this.setState({ showHeader: true });
    }
    this.setState({ lastScrollY: currentScrollY });
  };
  

  render() {
    return (
      <header style={{ display: this.state.showHeader ? 'block' : 'none' }}>
        <PortfolioAppBar />
      </header>
    );
  }
}

export default Header;
