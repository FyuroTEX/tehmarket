import React from 'react';
import { Card, Icon, Image, Grid } from 'semantic-ui-react';

const MobileCard = mobi => {
  const { brand, model, image, price } = mobi;
  return (
    <Grid.Column>
      <Card>
        <Image src={image} style={{ maxHeight: '25vh' }} centered />
        <Card.Content>
          <Card.Header style={{ fontSize: 'calc(6px + 1vh)' }}>
            {brand}
          </Card.Header>
          <Card.Meta>
            <span className="date" style={{ fontSize: 'calc(8px + 0.6vh)' }}>
              {model}
            </span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Icon name="usd" />
          {price}&nbsp;грн
        </Card.Content>
      </Card>
    </Grid.Column>
  );
};

export default MobileCard;
