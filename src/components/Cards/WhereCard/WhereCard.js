import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBlock, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';
import './WhereCard.css'
import InfoMap from '../../InfoMap'

const WhereCard = () => {
  return (
    <div>
      <Card>
        <CardBlock className="WhereCard__map_container">
          <InfoMap className="img-fluid" />
        </CardBlock>
        <CardBlock>
          <CardTitle>Dove?</CardTitle>
          <CardSubtitle>________</CardSubtitle>
        </CardBlock>
        <CardBlock>
          <CardText>Le nozze saranno celebrate presso il<br/><strong>Castello di Cavernago</strong><br/><i>Via Castello di Cavernago 18<br/>24050 Cavernago BG</i></CardText>
        </CardBlock>
      </Card>
    </div>
  );
};


export default WhereCard
