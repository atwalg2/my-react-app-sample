import * as React from 'react';
import { Grid, Button, Card, Divider, Menu } from 'semantic-ui-react';
import { Switch, Route } from 'react-router';
import Page from '../../Page';
import Dashboard from './Dashboard';
import Listings from './Listings';

const noHPad = {
  paddingLeft: '0px',
  paddingRight: '0px'
};

export interface SellerState {
}

export interface SellerOwnProps {
  path?: string;
}

export interface SellerStateProps {
}

export interface SellerDispatchProps {
}

export interface SellerProps extends SellerOwnProps, SellerStateProps, SellerDispatchProps {
}

export class Seller extends React.Component<SellerProps, SellerState> {
  constructor(props: SellerProps, context: any) {
    super(props, context);
    this.state = {
    };
  }

  render() {
    const { path } = this.props;
    return (
      <Page fullPage={true}>
        <Grid padded={true}>
          <Grid.Row only="mobile" style={{borderBottom: '0.001em solid grey'}}>
            <Grid.Column width={16}>
              <Button basic={true} onClick={() => undefined}>Dashboard</Button>
              <Button basic={true} onClick={() => undefined}>Reviews</Button>
              <Button basic={true} onClick={() => undefined}>Listings</Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered={true}>
            <Grid.Column computer={3} style={{...noHPad}} only="computer" textAlign="left">
              <Card fluid={true} style={{ overflow: 'auto', maxHeight: '100%' }}>
                <Card.Content>
                  <Card.Header>Manage</Card.Header>
                </Card.Content>
                <Card.Content>
                  <Menu text vertical fluid>
                    <Menu.Item onClick={() => undefined}>
                      Dashboard
                    </Menu.Item>
                    <Menu.Item onClick={() => undefined}>
                      Reviews
                    </Menu.Item>
                    <Menu.Item onClick={() => undefined}>
                      Listings
                    </Menu.Item>
                    <Divider />
                  </Menu>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column tablet={12} computer={13} style={{...noHPad}}>
              <Switch>
                <Route path={path} exact={true} component={() => <Dashboard />} />
                <Route path={`${path}/listings`} component={() => <Listings />} />
              </Switch>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Page>
    );
  }
}
