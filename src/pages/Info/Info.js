import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import InfoCard from '../../components/Cards/InfoCard'
import WhereCard from '../../components/Cards/WhereCard'
import CastleCard from '../../components/Cards/CastleCard'
import './Info.css'

const Info = () => (
  <Container className="Info__container">
    <Row>
      <Col lg="3" md="3" sm="6" xs="12">
        <InfoCard title="Martimonio Lore & Vale" subtitle="________" text="Siamo felici di annunciare che ci sposiamo. Invitiamo le nostre famiglie e i nostri amici a condividere con noi questo importante momento della nostra vita." />
      </Col>
      <Col lg="3" md="3" sm="6" xs="12">
        <InfoCard title="Quando?" subtitle="________" text="Ci sposeremo Domenica 24 Settembre, alle ore 16:30." />
        <InfoCard title="Lista Nozze" subtitle="________" text="Non faremo una lista nozze, ma dopo il matrimonio partiremo per il viaggio di nozze 😜." />
      </Col>
      <Col lg="3" md="3" sm="6" xs="12">
        <WhereCard />
      </Col>
      <Col lg="3" md="3" sm="6" xs="12">
        <CastleCard />
      </Col>
    </Row>
  </Container>
)

export default Info
