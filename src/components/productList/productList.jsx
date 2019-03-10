import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import axios from 'axios';

import MobileCard from '../productCard/mobileCard';

class ProductList extends Component {
  state = {
    mobile: []
  };

  componentWillMount() {
    axios.get('/mobile.json').then(res => {
      const mobile = res.data;
      this.setState({ mobile });
    });
  }

  render() {
    const { mobile } = this.state;

    return (
      <Container>
        <Grid doubling columns={4} stretched>
          {mobile.map(mobi => (
            <MobileCard key={mobi.id} {...mobi} />
          ))}
        </Grid>
      </Container>
    );
  }
}

export default ProductList;
