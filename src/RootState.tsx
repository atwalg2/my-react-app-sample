import { BaseState } from './base/state';
import { RouterState } from 'connected-react-router';
// import { VendorState } from './vendors';

export default interface RootState {
  base: BaseState;
  // vendors: VendorState;
  form: any;
  router: RouterState;
}
