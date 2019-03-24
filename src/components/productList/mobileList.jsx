import React, { Component } from 'react';
import { Container, Grid, Dimmer, Loader } from 'semantic-ui-react';
import axios from 'axios';

import MobileCard from '../productCard/mobileCard';

class ProductList extends Component {
  state = {
    mobile: [],
    isLoading: false
  };

  componentWillMount() {
    this.setState({ isLoading: true });
    axios.get('/mobile.json').then(res => {
      const mobile = res.data;
      this.setState({ mobile: mobile, isLoading: false });
    });
  }

  render() {
    const { mobile } = this.state;
    const { isLoading } = this.state;
    return (
      <Container
        // style={{ marginTop: '5em' }}
      >
        <Grid doubling columns={4} stretched>
          {isLoading ? (
            <Dimmer active inverted>
              <Loader size="big" content="Loading..." />
            </Dimmer>
          ) : (
            mobile.map(mobi => <MobileCard key={mobi.id} {...mobi} />)
          )}
        </Grid>
      </Container>
    );
  }
}

export default ProductList;
