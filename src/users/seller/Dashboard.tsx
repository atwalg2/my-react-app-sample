import * as React from 'react';
import { Grid, Header, Segment, Card, Dropdown, Statistic } from 'semantic-ui-react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, connect } from 'react-redux';
import { AnyAction } from 'redux';
import RootState from '../../RootState';

export interface DashboardState {
}

export interface DashboardOwnProps extends RouteComponentProps<any> {
}

export interface DashboardStateProps {
}

export interface DashboardDispatchProps {
}

export interface DashboardProps extends DashboardOwnProps, DashboardStateProps, DashboardDispatchProps {
}

class Dashboard extends React.Component<DashboardProps, DashboardState> {
  constructor(props: DashboardProps, context: any) {
    super(props, context);
    this.state = {
    };
  }

  renderNoDashboards = () => {
    return (
      <Header as="h4">No vendors to display</Header>
    );
  }

  renderDashboards = () => {
    const stats = [{ label: 'Daily Clicks', value: 10 }, {label: 'Comments', value: 3 }, {label: 'Listings', value: 2 }];
    return (
      <>
        {stats.map((s, i) => {
          return (
            <Grid.Column mobile={16} tablet={5} computer={5} verticalAlign="middle" style={{margin: '0.4em'}}>
              <Card centered={true} raised={true} fluid={true} key={s.label + i} onClick={() => this.setState({})} style={{}}>
                <Grid padded={true} centered={true}>
                  <Grid.Row verticalAlign="middle">
                    <Grid.Column width={16} stretched={true}>
                      <Statistic style={{margin: '2em'}}>
                        <Statistic.Value>{s.value}</Statistic.Value>
                        <Statistic.Label>{s.label}</Statistic.Label>
                      </Statistic>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Card>
            </Grid.Column>
          );
        })}
      </>
    );
  }

  render() {
    return (
      <Segment className="vendor-list section" attached="top">
        <Grid>
          <Grid.Row>
            <Grid.Column width={13}>
              <Header as="h1" style={{ marginBottom: '20px' }}>Dashboards</Header>
            </Grid.Column>
            <Grid.Column width={3} floated="right">
              <Dropdown fluid={true} placeholder="Sort" basic={true}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid stackable={true}>
          <Grid.Row>
            {this.renderDashboards()}
          </Grid.Row>
          </Grid>
      </Segment>
    );
  }
}

function mapStateToProps({base: RootState, ownProps: DashboardOwnProps): DashboardStateProps {
  return {
    //
  };
}
function mapDispatchToProps(dispatch: Dispatch<AnyAction>, ownProps: DashboardOwnProps): DashboardDispatchProps {
  return {
    //
  };
}

const connectedComponent = connect<DashboardStateProps,    DashboardDispatchProps, DashboardOwnProps>(mapStateToProps, mapDispatchToProps)(Dashboard);
export default withRouter<DashboardOwnProps>(connectedComponent);
