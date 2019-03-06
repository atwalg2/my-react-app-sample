import React, { Component } from 'react';
import Slider from 'react-slick';
import './SwipeToSlide.scss';
import { Card, Grid } from 'semantic-ui-react';

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: 'sample',
      infinite: true,
      centerPadding: '60px',
      slidesToShow: 3,
      slidesToScroll: 1,
      swipeToSlide: true,
      dots: true
      // afterChange: function(index: any) {
        // console.log(
        //   `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        // );
      // }
    };
    const src = 'http://placekitten.com/g/400/200';
    return (
      <div>
        <h2>Sliding Gallary</h2>
        <Slider {...settings}>
          <Grid padded={true}>
            <Grid.Column width={16} tablet={16} mobile={16}>
              <Card raised fluid image={src} />
            </Grid.Column>
          </Grid>
          <Grid padded={true}>
            <Grid.Column width={16} tablet={16} mobile={16}>
              <Card raised fluid image={src} />
            </Grid.Column>
          </Grid>
          <Grid padded={true}>
            <Grid.Column width={16} tablet={16} mobile={16}>
              <Card raised fluid image={src} />
            </Grid.Column>
          </Grid>
          <Grid padded={true}>
            <Grid.Column width={16} tablet={16} mobile={16}>
              <Card raised fluid image={src} />
            </Grid.Column>
          </Grid>
          <Grid padded={true}>
            <Grid.Column width={16} tablet={16} mobile={16}>
              <Card raised fluid image={src} />
            </Grid.Column>
          </Grid>
        </Slider>
      </div>
    );
  }
}