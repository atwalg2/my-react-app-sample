import * as React from 'react';
import { Grid, Image, Header, Divider, Input } from 'semantic-ui-react';
import RootState from '../RootState';
// import { Dispatch, connect } from 'react-redux';
import Page from '../Page';
import { ReactRating } from '../components/ReactRating';

type FilterState = 'categoryFilter' | 'ratingsFilter' | 'priceFilter';

export interface VendorState {
}

export type VendorType = 'table' | 'list';

export interface VendorOwnProps {
  path?: string;
  vendorId: string;
}

export interface VendorStateProps {
}

export interface VendorDispatchProps {
}

export interface VendorProps extends VendorOwnProps, VendorStateProps, VendorDispatchProps {
}

class Vendor extends React.Component<VendorProps, VendorState> {
  constructor(props: VendorProps, context: any) {
    super(props, context);
    this.state = {
    };
  }

  toggle = (name: FilterState) => {
    this.setState((state) => ({
      [name]: !state[name]
    } as any));
  }

  render() {
    const images = [
      'https://a0.muscache.com/im/pictures/997f7870-c7d9-48dc-be82-397a45a3a39d.jpg?aki_policy=large',
      'https://a0.muscache.com/im/pictures/997f7870-c7d9-48dc-be82-397a45a3a39d.jpg?aki_policy=large',
      'https://a0.muscache.com/im/pictures/997f7870-c7d9-48dc-be82-397a45a3a39d.jpg?aki_policy=large',
      'https://a0.muscache.com/im/pictures/997f7870-c7d9-48dc-be82-397a45a3a39d.jpg?aki_policy=large',
      'https://a0.muscache.com/im/pictures/997f7870-c7d9-48dc-be82-397a45a3a39d.jpg?aki_policy=large'
    ];
    const xMP = { padding: '0px' };
    const hero = (
      <Grid stackable={true} style={xMP}>
        <Grid.Row centered={true} style={{minHeight: '500px'}}>
          <Grid.Column style={xMP} mobile={16} tablet={10} computer={8} stretched><Image bordered fluid src={images[0]} style={{borderColor: 'black'}}/></Grid.Column>
          <Grid.Column only="computer" computer={8} stretched>
            <Grid padded="vertically">
              <Grid.Row style={{padding: '0px 0px 0px 0px'}}>
                <Grid.Column style={xMP} width={8} stretched><Image bordered fluid src={images[0]} style={{borderColor: 'black'}}/></Grid.Column>
                <Grid.Column style={xMP} width={8} stretched><Image bordered fluid src={images[0]} style={{borderColor: 'black'}}/></Grid.Column>
              </Grid.Row>
              <Grid.Row style={xMP} padded="vertically">
                <Grid.Column style={xMP} width={8} stretched><Image bordered fluid src={images[0]} style={{borderColor: 'black'}}/></Grid.Column>
                <Grid.Column style={xMP} width={8} stretched><Image bordered fluid src={images[0]} style={{borderColor: 'black'}}/></Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column only="tablet" tablet={6} stretched>
            <Grid padded="vertically">
              <Grid.Row style={{padding: '0px 0px 0px 0px'}}>
                <Grid.Column style={xMP} width={16} stretched><Image bordered fluid src={images[0]} style={{borderColor: 'black'}}/></Grid.Column>
              </Grid.Row>
              <Grid.Row style={xMP} padded="vertically">
                <Grid.Column style={xMP} width={16} stretched><Image bordered fluid src={images[0]} style={{borderColor: 'black'}}/></Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          {/* <Image src={'https://a0.muscache.com/im/pictures/997f7870-c7d9-48dc-be82-397a45a3a39d.jpg?aki_policy=large'}/> */}
        </Grid.Row>
      </Grid>
    );

    return (
      <Page hero={hero}>
        {/* Hero Image, Rating overlay, Favorite/Like/Love   */}

        {/*  Titles, Descriptions  */}
        <Grid padded={true}>
          <Grid.Column mobile={16} tablet={15} computer={10} style={{marginTop: '20px'}}>
          <Grid.Row>
            <Grid.Column width={16}>
              <Header as="h2" style={{paddingBottom: '5px'}}>
                <Header.Content style={{paddingBottom: '5px'}}>VendorName</Header.Content>
                <Header.Subheader style={{paddingBottom: '5px'}}>This is a vendor tagline</Header.Subheader>
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={14}>
              <Header as="h1" style={{paddingBottom: '5px'}}>
                <Header.Subheader style={{paddingBottom: '5px'}}>City</Header.Subheader>
              </Header>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={16}>
              <Header as="h1">
                <Header.Subheader>
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
                </Header.Subheader>
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Divider section= {true} />

          <Grid>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={10} computer={12}>
              <Grid padded="vertically">
                <Grid.Row>
                  <Grid.Column mobile={7} tablet={6} computer={7}>
                    <Header as={'h2'}>
                      111 Reviews
                    </Header>
                  </Grid.Column>
                  <Grid.Column mobile={9} tablet={7} computer={7} textAlign="left">
                    <ReactRating value={0.78} />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            {/* <Grid.Column mobile={8} tablet={4} computer={6} textAlign="right">
              <ReactRating value={0.78} />
            </Grid.Column> */}
            <Grid.Column mobile={16} tablet={4} computer={4} textAlign="right">
              <Grid padded="vertically">
                <Grid.Row>
                  <Grid.Column mobile={7}>
                    <Input
                      icon="search"
                      iconPosition="left"
                      placeholder="Search..."
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
          </Grid>
          <Divider section={true} />
          <Grid.Row>
            {/* Reviews  */}
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <Header as={'h2'} content={''} />
                </Grid.Column>
              </Grid.Row>
                {[1, 2, 3, 4, 5, 6, 7].map(() => (
                <Grid.Row>
                    <Grid.Column mobile={3} tablet={2} computer={2}>
                      <Image size="small" circular src="https://react.semantic-ui.com/images/wireframe/square-image.png" />
                    </Grid.Column>
                    <Grid.Column mobile={13} tablet={14} computer={14} style={{paddingLeft: '0px'}}>
                      <Header content={'Jeff Bezos'} style={{marginBottom: '4px'}}/>
                      <Header.Subheader content={'Jan 1, 2019'}/>
                      <Header.Subheader
                        content={`Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
                      />
                    </Grid.Column>
                    </Grid.Row>
                ))}
            </Grid>
          </Grid.Row>
          </Grid.Column>
        </Grid>

        {/* Location  */}
        <Grid padded={true}>
          <Grid.Row centered={true}>
          </Grid.Row>
        </Grid>

        <Grid padded={true}>
          <Grid.Row centered={true}>
          </Grid.Row>
        </Grid>
      </Page >
    );
  }
}

function mapStateToProps({base: RootState, ownProps: VendorOwnProps): VendorStateProps {
  return {
  };
}

// function mapDispatchToProps(dispatch: Dispatch<VendorActionTypes>, ownProps: VendorOwnProps): VendorDispatchProps {
//   return {
//   };
// }

export default connect<VendorStateProps, VendorDispatchProps, VendorOwnProps>(mapStateToProps, mapDispatchToProps)(Vendor);
