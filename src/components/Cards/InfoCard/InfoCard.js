import React from 'react'
import { Card, CardImg, CardText, CardBlock, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap'
import './InfoCard.css'

const InfoCard = ({ title="", subtitle="", text="" }) => {
  return (
    <div>
      <Card className="InfoCard">
        <CardBlock>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{subtitle}</CardSubtitle>
        </CardBlock>
        <CardBlock>
          <CardText>{text}</CardText>
        </CardBlock>
      </Card>
    </div>
  );
};


export default InfoCard
