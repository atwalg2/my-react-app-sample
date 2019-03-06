import * as React from 'react';
import { Icon, Transition } from 'semantic-ui-react';

export interface AnimatedNavMenuOwnProps {
  visible: boolean;
  toggleVisible: () => void;
}

export interface AnimatedNavMenuProps extends AnimatedNavMenuOwnProps {
}

export interface AnimatedNavMenuState {
  iconName: 'content' | 'close';
}

class AnimatedNavMenu extends React.Component<AnimatedNavMenuProps, AnimatedNavMenuState> {

  constructor(props: AnimatedNavMenuProps, context: any) {
    super(props, context);
    this.state = {
      iconName: 'content'
    };
  }

  showOtherMenu = () => {
    this.setState((state) => ({ iconName: (state.iconName === 'content') ? 'close' : 'content' }));
    this.props.toggleVisible();
  }

  render() {
    const { visible } = this.props;
    const { iconName } = this.state;

    return (
      <>

          <Transition visible={visible} transitionOnMount={true} onHide={() => this.showOtherMenu()} animation="swing up" duration={{ hide: 0, show: 600 }}>
            <Transition visible={visible} animation="pulse" duration={{ hide: 0, show: 600 }}>
              <Icon name={iconName} size="large"/>
            </Transition>
          </Transition>

      </>
    );
  }
}

export default AnimatedNavMenu;
