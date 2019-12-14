import React, { Component } from 'react'
import CategoriesNav from '../../components/CategoriesNav/CategoriesNav'
import CardSlider from '../../components/CardSlider/CardSlider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export class Home extends Component {
  render() {
    return (
      <div className="flex-grow-1">
        <div>slide-show</div>
        <CategoriesNav />
        <CardSlider title="Populer" />
        <CardSlider title="Yang baru nich" />
        <CardSlider title="Novel romantis ea" />
        <CardSlider title="Komik jahat" />
        <Container className="mt-3">
          <Row>
            <Col md={5} className="text-center">
              <img
                src="/assets/img/moco-buku.svg"
                alt="baca buku lol"
                className="w-100"
              />
            </Col>
            <Col className="pr-5">
              <h1
                style={{
                  fontWeight: 900,
                  color: 'var(--primary)',
                }}
              >
                Baca Buku Yuh...
              </h1>
              <h6 style={{ fontWeight: 'normal' }} className="text-justify">
                Jadi kemaren gw beli buku trus Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. A cras sed velit vitae elit in.
                Pretium fames proin pellentesque elementum. Ornare sed duis quis
                sed. Aenean ac posuere elementum, loborti Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Autem nostrum in ad aut odio
                nihil provident amet, culpa itaque? Nisi qui enim rerum laborum
                eius assumenda tempore. Ex, accusantium alias?
              </h6>
              <img src="/assets/img/logo.png" alt="logo" className="mt-4" />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Home
