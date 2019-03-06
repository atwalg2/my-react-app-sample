import * as React from 'react';
import { Grid, Header, Segment, Card, Dropdown, Statistic } from 'semantic-ui-react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, connect } from 'react-redux';
import { AnyAction } from 'redux';
import RootState from '../../RootState';

export interface ListingsState {
}

export interface ListingsOwnProps extends RouteComponentProps<any> {
}

export interface ListingsStateProps {
}

export interface ListingsDispatchProps {
}

export interface ListingsProps extends ListingsOwnProps, ListingsStateProps, ListingsDispatchProps {
}

class Listings extends React.Component<ListingsProps, ListingsState> {
  constructor(props: ListingsProps, context: any) {
    super(props, context);
    this.state = {
    };
  }

  renderNoListing = () => {
    return (
      <Header as="h4">No vendors to display</Header>
    );
  }

  renderListings = () => {
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
              <Header as="h1" style={{ marginBottom: '20px' }}>Listings</Header>
            </Grid.Column>
            <Grid.Column width={3} floated="right">
              <Dropdown fluid={true} placeholder="Sort" basic={true}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid stackable={true}>
          <Grid.Column width={12}>
            <Grid.Row>
              <Card centered={true} raised={true} fluid={true}>
                <Card.Header content="StoreName"/>
                <Card.Description content="2012-34ST NW"/>
              </Card>
            </Grid.Row>
            <Grid.Row>
              <Card centered={true} raised={true} fluid={true}>
                <Card.Header content="StoreName"/>
                <Card.Description content="2012-34ST NW"/>
              </Card>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

function mapStateToProps({base: RootState, ownProps: ListingsOwnProps): ListingsStateProps {
  return {
    //
  };
}
function mapDispatchToProps(dispatch: Dispatch<AnyAction>, ownProps: ListingsOwnProps): ListingsDispatchProps {
  return {
    //
  };
}

const connectedComponent = connect<ListingsStateProps,    ListingsDispatchProps, ListingsOwnProps>(mapStateToProps, mapDispatchToProps)(Listings);
export default withRouter<ListingsOwnProps>(connectedComponent);
