import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBlock, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';
import './CastleCard.css'
import InfoMap from '../../InfoMap'

const WhereCard = () => {
  return (
    <div>
      <Card>
        <CardBlock className="CastleCard__map_container">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Castello_Cavernago_vista.jpg/560px-Castello_Cavernago_vista.jpg" className="img-fluid" />
        </CardBlock>
        <CardBlock>
          <CardTitle>Il Castello</CardTitle>
          <CardSubtitle>________</CardSubtitle>
        </CardBlock>
        <CardBlock>
          <CardText>L'origine della struttura risale al 1243 quando i canonici della cattedrale di Bergamo entrarono in possesso di un'antica costruzione nella stessa località.<br/><small><a href="https://it.wikipedia.org/wiki/Castello_di_Cavernago" target="_blank">da Wikipedia</a></small></CardText>
        </CardBlock>
      </Card>
    </div>
  );
};


export default WhereCard
