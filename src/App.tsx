import * as React from 'react';
import { connect } from 'react-redux';
import RootState from './RootState';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import VendorList from './vendors/VendorList';
import Dashboard from './dashboard/Dashboard';
import { Seller } from './users/seller/Seller';
import Vendor from './vendors/Vendor';
import CreateVendor from './vendors/CreateVendor';
import GallaryEdit from './vendors/GallaryEdit';

export interface AppProps {
  location: string;
}

class App extends React.Component<AppProps> {

  componentWillReceiveProps(nextProps: AppProps) {
    //
  }

  render() {
    return (
      <div className="app">
        <Switch>
          {/* Main */}
          <Route path="/" exact={true} component={Home} />
          <Route path="/vendors" exact={true} render={() => <VendorList limit={20} />} />
          <Route path="/vendor/:vid" exact={true} component={({ match: { params } }) => <Vendor path={`/vendor/${params.vid}`} vendorId={params.vid} />} />
          <Route path="/register/vendor" exact={true} component={({ match: { params } }) => <CreateVendor />} />

          <Route path="/users/:uid/seller" component={({ match }) => <Seller path={`/users/${match.params.uid}/seller`}/>} />
          <Route path="/dashboard" exact={true} render={() => <Dashboard limit={20} />} />
          <Route path="/dashboard/gallary/edit" exact={true} render={() => <GallaryEdit limit={20} />} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps({ router, base }: RootState): AppProps {
  return {
    location: router.location.pathname
  };
}

export default connect<AppProps>(mapStateToProps)(App);
