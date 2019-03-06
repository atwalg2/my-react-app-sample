import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Footer } from './Footer';
import RootState from './RootState';
import {
  Menu,
  Grid,
  Input,
  Header,
  Segment,
  Image,
  Icon,
  Sidebar,
  Transition,
  Responsive,
} from 'semantic-ui-react';
const {
  onlyComputer,
} = Responsive;

import './sass/components/_page.scss';
import logo from './images/logo_placeholder.png';
export interface PageOwnProps {
  className?: string;
  fullPage?: boolean;
  hero?: JSX.Element;
}

export interface PageStateProps {
}

export interface PageProps extends PageOwnProps, PageStateProps, RouteComponentProps<any> {
}

export interface PageState {
  signUpActive: boolean;
  sidebarVisible: boolean;
  menuOpen: boolean;
  menuIconName: 'content' | 'close';
}

const VerticalSidebar = ({ animation, direction, visible }) => (
  <Sidebar as={Segment} animation={animation} direction={direction} visible={visible}>
    <Grid textAlign="center">
      <Grid.Row columns={1}>
        <Grid.Column>
          <Header as="h3">Slide Down Menu</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid columns={3} divided>
        <Grid.Column>
          {/* <Image src="/images/wireframe/media-paragraph.png" /> */}
        </Grid.Column>
        <Grid.Column>
          {/* <Image src="/images/wireframe/media-paragraph.png" /> */}
        </Grid.Column>
        <Grid.Column>
          {/* <Image src="/images/wireframe/media-paragraph.png" /> */}
        </Grid.Column>
      </Grid>
    </Grid>
  </Sidebar>
);

class Page extends React.Component<PageProps, PageState> {

  constructor(props: PageProps, context: any) {
    super(props, context);
    this.state = {
      signUpActive: true,
      sidebarVisible: false,
      menuOpen: false,
      menuIconName: 'content'
    };
  }

  toggleMenuOpen = () => {
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  }

  toggleSidebar = () => {
    this.setState({
      sidebarVisible: !this.state.sidebarVisible
    });
  }

  toggleSignUpClick = () => {
    this.setState({
      signUpActive: !this.state.signUpActive,
    });
  }

  render() {
    const { className } = this.props;
    const { menuOpen, sidebarVisible } = this.state;

    console.log({menuOpen});
    return (
      // animation="scale down"
    <Sidebar.Pushable as={Segment}>
      <VerticalSidebar animation="overlay" direction="top" visible={sidebarVisible} />

      <Sidebar.Pusher dimmed={sidebarVisible} onClick={() => {
        if (this.state.sidebarVisible) {
          this.setState({sidebarVisible: false});
        }
      }}>
        <div className={`${className || ''} page`}>
          <Menu className="nav" style={{ marginBottom: '0px' }}>
            {/* Left Side Items */}
            <Responsive maxWidth={onlyComputer.minWidth}>
              <Menu.Item style={{maxWidth: '75px', minHeight: '80px', maxHeight: '75px', padding: '0px'}} onClick={() => alert('eh')}>
                <Image circular src={logo} fluid={true} />
                <Icon name="angle down" />
              </Menu.Item>
            </Responsive>
            <Responsive minWidth={onlyComputer.minWidth}>
              <Menu.Item style={{maxWidth: '75px', maxHeight: '75px', padding: '0px'}} link href="/">
                <Image circular src={logo} fluid={true}/>
              </Menu.Item>
            </Responsive>
            <Menu.Item fluid style={{padding: '0px', width: '75%', maxWidth: '440px'}}>
              <Input
                icon="search"
                iconPosition="left"
                placeholder="Search..."
                size="big"
              />
            </Menu.Item>

            {/* Right Side Items */}
            <Responsive as={React.Fragment} minWidth={onlyComputer.minWidth}>
              <Menu.Menu position="right">
                <Menu.Item name="search" link={true} href="/vendors">
                  Search
                </Menu.Item>
                <Transition visible={this.state.signUpActive} animation="pulse" duration={1200}>
                  <Menu.Item name="signup" onClick={() => this.toggleSignUpClick()}>
                    Sign up
                  </Menu.Item>
                </Transition>
                <Menu.Item name="signup" onClick={() => this.toggleSignUpClick()}>
                  Log in
                </Menu.Item>
              </Menu.Menu>
            </Responsive>
          </Menu>

          {this.props.hero}

          {/*       - SITE CONTENT -       */}
          { this.props.fullPage
            ? (
              this.props.children
            )
            : (
              <Grid container={true} className="site-content">
                <Grid.Row style={{marginBottom: '100px'}}>
                  <Grid.Column className="site-content-column">
                    {this.props.children}
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            )
          }

          <Footer />
        </div>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
    );
  }
}

function mapStateToProps({ }: RootState): PageStateProps {
  return {
    //
  };
}

export default compose(
  withRouter,
  connect<PageStateProps, PageOwnProps>(mapStateToProps)
)(Page) as React.ComponentType<PageOwnProps>;
