import * as React from 'react';
import { VendorListOptions, VendorListResult, fetchVendorList, VendorActionTypes } from '.';
import { Grid, Header, Segment, Button, Card, Image, Icon, Dropdown, Divider, List, Accordion, Menu } from 'semantic-ui-react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
// import { SagaStatus } from '../base';
import RootState from '../RootState';
import qs from 'querystring';
import isEqual from 'lodash.isequal';
import { UnregisterCallback } from 'history';
import { InjectedFormProps, reduxForm, Field } from 'redux-form';
import { Dispatch, connect } from 'react-redux';
import Page from '../Page';

type FilterState = 'categoryFilter' | 'ratingsFilter' | 'priceFilter';

export interface VendorListState {
  queryParams: VendorListOptions;
  categoryFilter: boolean;
  ratingsFilter: boolean;
  priceFilter: boolean;
}

export type VendorListType = 'table' | 'list';

export interface VendorListOwnProps extends RouteComponentProps<any> {
  limit?: number;
  mode?: VendorListType;
  query?: string;
}

export interface VendorListStateProps extends VendorListResult {
  vendorId?: string;
  loadStatus?: SagaStatus;
  count?: number;
}

export interface VendorListDispatchProps {
  fetchVendors: (options: VendorListOptions) => void;
  // fetchMyProfile: () => void;
}

export interface VendorListProps extends VendorListOwnProps, VendorListStateProps, VendorListDispatchProps {
}

const parseQueryString = (props) => {
  const queryParams = qs.parse(props.history.location.search.substr(1));
  const page = parseInt(queryParams.page as string, 10);
  return { ...queryParams, page: !isNaN(page) ? page : 1 };
};

const noHPad = {
  paddingLeft: '0px',
  paddingRight: '0px'
};

class VendorList extends React.Component<VendorListProps & InjectedFormProps<VendorListOptions, VendorListProps>, VendorListState> {

  private unlistenHistory: UnregisterCallback;

  constructor(props: VendorListProps & InjectedFormProps<VendorListOptions, VendorListProps>, context: any) {
    super(props, context);
    this.state = {
      queryParams: {},
      categoryFilter: false,
      ratingsFilter: false,
      priceFilter: false
    };
  }

  fetch = (options: VendorListOptions) => {
    const { fetchVendors } = this.props;
    fetchVendors(options);
  }

  componentDidMount() {
    this.fetch({});
    this.props.initialize(this.props.initialValues);
  }

  componentWillReceiveProps(nextProps: VendorListStateProps) {
  }

  componentWillMount() {
    let urlParams = parseQueryString(this.props);
    this.setState({ queryParams: { ...this.state.queryParams, ...urlParams }});

    if (this.props.mode === 'table') {
      this.unlistenHistory = this.props.history.listen(() => {
        urlParams = parseQueryString(this.props);
        if (!isEqual(this.state.queryParams, urlParams)) {
          this.setState({ queryParams: { ...this.state.queryParams, ...urlParams }});
          this.fetch({ ...this.props, ...urlParams });
        }
      });
    }
  }

  componentWillUnmount() {
    if (this.unlistenHistory) {
      this.unlistenHistory();
    }
  }

  pushQueryStringUpdate = (changes: VendorListOptions) => {
    const { queryParams } = this.state;
    this.props.history.push(`/vendors?${qs.stringify({ ...queryParams, ...changes })}`);
  }

  handlePaginationChange = (e, data) => {
    this.pushQueryStringUpdate({ page: data.activePage });
  }

  handleFormSubmit = (props: VendorListOptions) => {
    const { query, status } = props;
    this.pushQueryStringUpdate({ query, status, page: 1 });
  }

  renderNoVendors = () => {
    return (
      <Header as="h4">No vendors to display</Header>
    );
  }

  renderVendors = (vendors) => {
    return (
      <>
      {vendors.map((v, i) => {
        return (
          <Grid.Column mobile={16} tablet={5} computer={5} verticalAlign="middle" style={{margin: '0.4em', marginBottom: '1.5em'}}>
            <Card centered={true} fluid={true} key={v + i} href={`/vendor/${1}`}>
              <Image src="https://cdn-images-1.medium.com/max/1053/1*CDlclChuNeeM5Shfev2RTg.jpeg" />
              <Card.Content>
                <Card.Header>VendorName</Card.Header>
                <Card.Meta>
                  <span className="date">Music, Visuals</span>
                </Card.Meta>
                <Card.Description>VendorName is a set up of things for a thing, we make the best things happen for the things.</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                {`${3.2} `}
                  <Icon name="star" />
                  - 104 Reviews
                </a>
              </Card.Content>
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
                <Header as="h1" style={{ marginBottom: '20px' }}>Vendors</Header>
              </Grid.Column>
              <Grid.Column width={3} floated="right">
                <Dropdown fluid={true} placeholder="Sort" basic={true}/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          {!items || items.length === 0
            ? this.renderNoVendors()
            : (<Grid stackable={true}>
                  <Grid.Row>
                    {this.renderVendors(items)}
                  </Grid.Row>
              </Grid>
              )
          }
        </Segment>

        <Segment compact={true} attached="bottom">
          <Grid>
            <Grid.Row>
              <Grid.Column floated="right">
                <Link to="/vendors">
                  <Button basic={true}>View More</Button>
                </Link>
              </Grid.Column>
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
        {this.accordianMenuItem('Category', 'categoryFilter', (
            <List>
            {categories.map(c => {
              return (
                <List.Item key={'dd' + c}>
                  <Field
                    name="terms"
                    label={c}
                    component={}
                    width={16}
                  />
                </List.Item>
              );
            })}
          </List>
        ))}

        {this.accordianMenuItem('Ratings', 'ratingsFilter', (
          <>Some Component that lets you select a range of ratings</>
        ))}

        {this.accordianMenuItem('Price', 'priceFilter', (
          <>Some Component that lets you select a range of ratings</>
        ))}
      </Accordion>
    );
  }

  render() {
    return (
      <Page fullPage={true}>
        <Grid padded={true}>
          <Grid.Row only="mobile" style={{borderBottom: '0.001em solid grey'}}>
            <Grid.Column width={16}>
              <Button basic={true}>Category</Button>
              <Button basic={true}>Rating</Button>
              <Button basic={true}>Price</Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered={true}>
            <Grid.Column computer={3} style={{...noHPad}} only="computer" textAlign="left">
              <Card fluid={true} style={{ overflow: 'auto', maxHeight: '100%' }}>
                <Card.Content>
                  <Card.Header>Filters</Card.Header>
                </Card.Content>
                <Card.Content>
                  {this.renderFilters()}
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column tablet={12} computer={13} style={{...noHPad}}>
              {this.renderAsList()}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Page>
    );
  }
}

function mapStateToProps({  }: RootState, ownProps: VendorListOwnProps): VendorListStateProps {
  // const { location } = ownProps;
  // const queryString =  parseQueryString(ownProps) as any;
  return {
    // items: vendors.list.items,
    // initialValues: {
    //   //
    // }
  };
}
function mapDispatchToProps(dispatch: Dispatch<VendorActionTypes>, ownProps: VendorListOwnProps): VendorListDispatchProps {
  return {
    fetchVendors:    (options: VendorListOptions) => dispatch(fetchVendorList(options)),
    // fetchMyProfile: () => dispatch(fetchProfile())
  };
}
const formComponent = reduxForm<VendorListOptions,    VendorListProps>({
  form:    'vendorList',
  enableReinitialize: true
})(VendorList);
const connectedComponent = connect<VendorListStateProps,    VendorListDispatchProps, VendorListOwnProps>(mapStateToProps, mapDispatchToProps)(formComponent);
export default withRouter<VendorListOwnProps>(connectedComponent);
