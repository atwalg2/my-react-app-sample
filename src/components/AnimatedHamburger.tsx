import * as React from 'react';
import '../sass/components/_hamburger.scss';

export interface AnimatedHamburgerState {
  isActive: boolean;
}

class AnimatedHamburger extends React.Component<{}, AnimatedHamburgerState> {
  constructor(props: {}, context: any) {
    super(props, context);
    this.state = { 
      isActive: false 
    };
  }

  toggleActive = () => {
    this.setState((state) => ({ isActive: !state.isActive}));
  }

  render() {
    const { isActive } = this.state;

    const activeClass = isActive ? '-active' : '';
    return (
      <div className={`hamburger${activeClass}`} onClick={() => this.toggleActive()}>
        <div className={`bar top`}></div>
        <div className={`bar middle`}></div>
        <div className={`bar bottom`}></div>
      </div>
    );
  }
}

export default AnimatedHamburger;