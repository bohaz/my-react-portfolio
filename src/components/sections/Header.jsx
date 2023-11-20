import React, { Component } from 'react';
import PortfolioAppBar from '../navbar/PortfolioAppBar';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHeader: true,
      lastScrollY: 0,
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
    const threshold = 50;

    if (Math.abs(currentScrollY - lastScrollY) < threshold) {
      return;
    }

    if (currentScrollY > lastScrollY) {
      this.setState({ showHeader: false });
    } else {
      this.setState({ showHeader: true });
    }
    this.setState({ lastScrollY: currentScrollY });
  };

  render() {
    const { showHeader } = this.state;
    return (
      <header style={{ display: showHeader ? 'block' : 'none' }}>
        <PortfolioAppBar />
      </header>
    );
  }
}

export default Header;
