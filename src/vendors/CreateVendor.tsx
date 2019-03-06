import * as React from 'react';
import { Dispatch, connect } from 'react-redux';
import RootState from '../RootState';
import Page from '../Page';

import { Grid, Form, Card, Header } from 'semantic-ui-react';
import { reduxForm, getFormValues, InjectedFormProps, Field, Form as ReduxForm } from 'redux-form';

export interface CreateVendorFormData {
  username: string;
}

export interface CreateVendorState {
}

export interface CreateVendorOwnProps {
}

export interface CreateVendorStateProps {
}

export interface CreateVendorDispatchProps {
}

export interface CreateVendorProps extends CreateVendorOwnProps, CreateVendorStateProps, CreateVendorDispatchProps {
}

class CreateVendor extends React.Component<CreateVendorProps & InjectedFormProps<CreateVendorFormData, CreateVendorProps>, CreateVendorState > {
  constructor(props: CreateVendorProps & InjectedFormProps<CreateVendorFormData, CreateVendorProps>, context: any) {
    super(props, context);
    this.state = {
    };
  }

  toggle = (name: any) => {
    this.setState((state) => ({
      [name]: !state[name]
    } as any));
  }

  render() {
    return (
      <Page>
        <Form as={ReduxForm} onSubmit={undefined}>
          <Grid padded="vertically">
            {/* Left Side */}
            <Grid.Column width={10}>
              <Card fluid>

                <Grid padded={true}>
                  <Grid.Row>
                    <Grid.Column width={16}>
                      <Header as="h2" style={{paddingBottom: '5px'}}>
                        <Header.Content style={{paddingBottom: '5px'}}>General</Header.Content>
                        <Header.Subheader style={{paddingBottom: '5px'}}>fill in general information about company</Header.Subheader>
                      </Header>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Column width={16}>
                    <Field
                      name="company"
                      placeholder="Company Name"
                      component={}
                      fluid={true}
                    />
                  </Grid.Column>

                  <Grid.Column width={16}>
                    <Field
                      name="address"
                      placeholder="Address"
                      component={}
                      fluid={true}
                    />
                  </Grid.Column>
                </Grid>
              </Card>
            </Grid.Column>

            {/* Right Side */}
            <Grid.Column>
              <Grid.Row>
                <Field
                  name="something"
                  placeholder="Something Else"
                  component={}
                  fluid={true}
                />
              </Grid.Row>
            </Grid.Column>
          </Grid>

        </Form>
      </Page>
    );
  }
}

function mapStateToProps({base: RootState, ownProps: CreateVendorOwnProps): CreateVendorStateProps {
  const formV = getFormValues('createVendor');
  console.log({ formValues: formV });
  return {
    initialValues: {
    }
  };
}

function mapDispatchToProps(dispatch: Dispatch<any>, ownProps: CreateVendorOwnProps): CreateVendorDispatchProps {
  return {
  };
}

const formComponent = reduxForm<CreateVendorFormData, CreateVendorProps>({
  form: 'createVendor',
  enableReinitialize: true
})(CreateVendor);
export default connect<CreateVendorStateProps, CreateVendorDispatchProps, CreateVendorOwnProps>(mapStateToProps, mapDispatchToProps)(formComponent);
