import * as React from 'react';
// import './ReactRating.scss';
import './ReactRating.scss';

import Rating from 'react-rating';
import heartFull from '../images/heart_full.png';
import heartEmpty from '../images/heart_empty.png';

interface ReactRatingState {
  rating?: number;
}

interface ReactRatingProps {
  value: number;
}

const heartContainer = (
  <span>
    <div className="heart_container">
      <div className="heart_piece">
        <div className="glassInner1"></div>
        <div className="glassInner2"></div>
        <div className="glassInner3"></div>
      </div>
    </div>
  </span>
);

// const heart = (
//   <span className="rating">
//     <div className="full">
//         ♥
//       <div className="glassInner1"></div>
//       <div className="glassInner2"></div>
//       <div className="glassInner3"></div>
//     </div>
//   </span>
// );

export class ReactRating extends React.Component<ReactRatingProps, ReactRatingState> {
  constructor(props: ReactRatingProps, context: any) {
    super(props, context);
    this.state = {
      rating: 0,
    };
  }

  toggle = (name: string) => {
    this.setState((state) => ({
      [name]: !state[name]
    } as any));
  }

  renderFull(val: number) {
    const bitShiftToBase10 = (v: number) => (v >> 0);
    const items = [];
    let fullStars = bitShiftToBase10(val);
    console.log({fullStars});
    for (let i = 0; i < fullStars; i++) {
      items.push(
        <div className="full">
          {' ♥ '}
          <div className="glassInner1"/>
          <div className="glassInner2"/>
          <div className="glassInner3"/>
        </div>
      );
    }
    console.log({items});
    return items;
  }

  renderQuarter(val: number): JSX.Element | undefined {
    if (val === 0.25) {
      return (
        <div style={{maxHeight: '40%', left: '0px', right: '0px'}} className="left">
        {'♥'}
        </div>);
    } else if (val === 0.5) {
      return (
        <div style={{left: '0px', right: '0px'}} className="left">
        {'♥'}
        </div>
      );
    } else if (val === 0.75) {
      return (<div style={{position: 'relative'}}>
        <div style={{position: 'absolute', left: '0px', right: '0px'}} className="top">
        {'♥'}
        </div>
        <div style={{left: '0px', right: '0px'}} className="left">
        {'♥'}
        </div>
      </div>);
    } else {
      return undefined;
    }
  }

  render() {
    const { value } = this.props;
    console.log(heartContainer);
    // 1 quarter = left & maxHeight: 50%
    // 2 quarters = left
    // 3 quarters = left + top
    // const rounded = Math.Round(value * 2, MidpointRounding.AwayFromZero) / 2)
    const rounded = Math.round(value * 4) / 4;
    console.log(rounded);
    return (
      <Rating
        start={0}
        stop={5}
        // initialRating={2.5}
        emptySymbol={<img width={30} height={32} src={heartEmpty} />}
        fullSymbol={<img width={30} height={30} src={heartFull} />}
        placeholderSymbol={<img width={30} height={30} src={heartFull} />}
        // fullSymbol={heart}
        // placeholderSymbol={heart}
        placeholderRating={2.5}
        fractions={2}
      />
    );
  }
}