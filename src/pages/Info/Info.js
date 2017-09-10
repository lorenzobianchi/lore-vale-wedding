import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import InfoCard from '../../components/Cards/InfoCard'
import WhereCard from '../../components/Cards/WhereCard'
import CastleCard from '../../components/Cards/CastleCard'
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import { Button } from 'reactstrap'
import './Info.css'

class Info extends React.Component {
  state = {
    isShowingModal: false,
  }
  handleClick = () => this.setState({isShowingModal: true})
  handleClose = () => this.setState({isShowingModal: false})
  render() {
    return  (
        <Container className="Info__container">
          <Row>
            <Col lg="3" md="6" sm="6" xs="12">
              <InfoCard
                title="Martimonio Lore & Vale"
                subtitle="________"
                text="Siamo felici di annunciare che ci sposiamo. Invitiamo le nostre famiglie e i nostri amici a condividere con noi questo importante momento della nostra vita."
              />
            </Col>
            <Col lg="3" md="6" sm="6" xs="12">
              <InfoCard
                title="Quando?"
                subtitle="________"
                text="Ci sposeremo Domenica 24 Settembre, alle ore 16:30."
              />
              <InfoCard
                title="Lista Nozze"
                subtitle="________"
                text="Non faremo una lista nozze, ma dopo il matrimonio partiremo per il viaggio di nozze 😜."
                button={<Button color="info" onClick={this.handleClick}>info</Button>}/>
            </Col>
            <Col lg="3" md="6" sm="6" xs="12">
              <WhereCard />
            </Col>
            <Col lg="3" md="6" sm="6" xs="12">
              <CastleCard />
            </Col>
          </Row>
          {
            this.state.isShowingModal &&
            <ModalContainer onClose={this.handleClose}>
              <ModalDialog onClose={this.handleClose}>
                <h1>Lista Nozze</h1>
                <p>Dopo il matrimonio partiremo per il viaggio di nozze 😜..<br /> Se volete contribuire potete fare un bonifico a questo IBAN:<br /> <b>IT83 S085 1453 4000 0000 0507 136</b><br /> mettendo come causale il vostro nome. GRAZIE</p>
              </ModalDialog>
            </ModalContainer>
          }
        </Container>
     )
  }
}

export default Info
