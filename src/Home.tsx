import * as React from 'react';
import { connect } from 'react-redux';
import RootState from './RootState';
import {
  Grid,
  Image,
  Card,
  Header,
  Button,
} from 'semantic-ui-react';
import Page from './Page';
import SwipeToSlide from './components/SwipeToSlide';

export interface HomeStateProps {
}

export interface HomeProps extends HomeStateProps {
}

const box = {
  border: '1px dashed grey'
};
const s = {
  padding: '0px',
  margin: '0px',
};

const description = `lorem ipsum o lorem ipsum o lorem ipsum o lorem ipsum o lorem ipsum o lorem ipsum o lorem ipsum o
lorem ipsum o lorem ipsum o lorem ipsum o lorem ipsum o lorem ipsum o lorem ipsum o lorem ipsum o lorem ipsum o `;

export class Home extends React.Component<HomeProps> {

  render() {
    return(
      <Page className="home">
        <Grid stackable={true} stretched={true} style={{ ...box, ...s }}>
          <Grid.Row>
            <Image src="https://pbs.twimg.com/media/DMDIKcyWsAEsKDj.jpg:large" fluid={true} style={{ padding: '0px' }} />

          </Grid.Row>
        </Grid>

        <Grid stackable={true} doubling={true} padded={true} centered={true}>
          <Grid.Row centered={true}>
            <Grid.Column computer={15} tablet={16} mobile={16}>
              <SwipeToSlide />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column className="left" computer={8} tablet={8} mobile={16}>
              <Grid padded={true}>
                <Grid.Row centered={true}>
                  <Grid.Column only="computer widescreen" width={1}/>
                  <Grid.Column computer={15} tablet={16} mobile={16} >
                    <Header as="h2">Featured</Header>
                    <Card
                      fluid={true}
                      image={`https://i.imgur.com/EKwBKdE.jpg`}
                      header="Pink Orchid Studio"
                      description={description}
                      extra={<Button circular={true}>Find out more</Button>}
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>

            <Grid.Column width={8} stretched={true}>

            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Page>
    );
  }
}

function mapStateToProps({ }: RootState ): HomeStateProps {
  return {
    //
  };
}

export default connect<HomeStateProps>(mapStateToProps)(Home);
