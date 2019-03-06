import * as React from 'react';
import { Grid, Header, Segment, Card, Icon, Dropdown, Divider, List, Accordion, Menu, Statistic } from 'semantic-ui-react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { SagaStatus } from '../base';
import RootState from '../RootState';
import { UnregisterCallback } from 'history';
import { Dispatch, connect } from 'react-redux';
import { AnyAction } from 'redux';

type FilterState = 'categoryFilter' | 'ratingsFilter' | 'priceFilter';

export interface DashboardListState {
}

export type DashboardListType = 'table' | 'list';

export interface DashboardListOwnProps extends RouteComponentProps<any> {
  limit?: number;
  mode?: DashboardListType;
  query?: string;
}

export interface DashboardListStateProps {
  vendorId?: string;
  loadStatus?: SagaStatus;
  count?: number;
}

export interface DashboardListDispatchProps {
}

export interface DashboardListProps extends DashboardListOwnProps, DashboardListStateProps, DashboardListDispatchProps {
}

class DashboardList extends React.Component<DashboardListProps, DashboardListState> {

  private unlistenHistory: UnregisterCallback;

  constructor(props: DashboardListProps, context: any) {
    super(props, context);
    this.state = {
      queryParams: {},
      categoryFilter: false,
      ratingsFilter: false,
      priceFilter: false
    };
  }

  componentDidMount() {
    //
  }

  componentWillMount() {
    //
  }

  componentWillUnmount() {
    if (this.unlistenHistory) {
      this.unlistenHistory();
    }
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

  renderAsList() {
    const { loadStatus } = this.props;
    return (
      <>
        <Segment className="vendor-list section" attached="top" loading={loadStatus === SagaStatus.Pending}>
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
      </>
    );
  }

  toggle = (name: FilterState) => {
    this.setState((state) => ({
      [name]: !state[name]
    } as any));
  }

  accordianMenuItem(title: string, filterKey: FilterState, content: JSX.Element) {
    return (
      <>
        <Menu.Item>
          <Accordion.Title
            as={Grid}
            fluid={true}
            active={this.state[filterKey]}
            onClick={() => this.toggle(filterKey)}
            style={{minHeight: '30px'}}
          >
            <Grid.Row verticalAlign="middle">
              <Grid.Column as={'h4'} width={11} textAlign="left">{title}</Grid.Column>
              <Grid.Column width={5} textAlign="right"><Icon name="dropdown" /></Grid.Column>
            </Grid.Row>
          </Accordion.Title>

          <Accordion.Content active={this.state[filterKey]}>
            {content}
          </Accordion.Content>
        </Menu.Item>
        <Divider />
      </>
    );
  }

  renderFilters() {
    // in future get categories from redux store
    const categories = ['music', 'visual'];
    return (
      <Accordion as={Menu} text vertical fluid>
        {this.accordianMenuItem('Home', 'categoryFilter', (
            <List>
            {categories.map(c => {
              return (
                <List.Item key={'dd' + c}>
                  A thing
                </List.Item>
              );
            })}
          </List>
        ))}

        {this.accordianMenuItem('Messages', 'ratingsFilter', (
          <>Some Component that lets you select a range of ratings</>
        ))}

        {this.accordianMenuItem('Manage Listings', 'priceFilter', (
          <>Some Component that lets you select a range of ratings</>
        ))}
      </Accordion>
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

function mapStateToProps({base: RootState, ownProps: DashboardListOwnProps): DashboardListStateProps {
  return {
  };
}
function mapDispatchToProps(dispatch: Dispatch<AnyAction>, ownProps: DashboardListOwnProps): DashboardListDispatchProps {
  return {
  };
}

const connectedComponent = connect<DashboardListStateProps,    DashboardListDispatchProps, DashboardListOwnProps>(mapStateToProps, mapDispatchToProps)(DashboardList);
export default withRouter<DashboardListOwnProps>(connectedComponent);
