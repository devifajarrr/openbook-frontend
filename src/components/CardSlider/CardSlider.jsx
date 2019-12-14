import React, { Component } from 'react'
import Slider from 'react-slick'
import Container from 'react-bootstrap/Container'
import { NextArrow, PrevArrow } from '../SlickArrows/SlickArrows'
import ItemCard from '../ItemCard/ItemCard'
export class CardSlider extends Component {
  constructor() {
    super()
    this.state = {
      buku: [
        {
          judul: 'Nanti kita cerita tentang hari ini',
          pengarang: 'Marchella FP',
          harga: 6900000,
        },
        {
          judul: 'Nanti kita cerita tentang hari ini',
          pengarang: 'Marchella FP',
          harga: 6900000,
        },
        {
          judul: 'Nanti kita cerita tentang hari ini',
          pengarang: 'Marchella FP',
          harga: 6900000,
        },
        {
          judul: 'Nanti kita cerita tentang hari ini',
          pengarang: 'Marchella FP',
          harga: 6900000,
        },
        {
          judul: 'Nanti kita cerita tentang hari ini',
          pengarang: 'Marchella FP',
          harga: 6900000,
        },
        {
          judul: 'Nanti kita cerita tentang hari ini',
          pengarang: 'Marchella FP',
          harga: 6900000,
        },
      ],
    }
  }
  render() {
    const bukuMap = this.state.buku.map((buku, i) => {
      return (
        <div key={i}>
          <ItemCard buku={buku} />
        </div>
      )
    })
    const settings = {
      dots: false,
      infinite: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
    }
    return (
      <Container {...this.props}>
        <h3>{this.props.title}</h3>
        <Slider {...settings}>{bukuMap}</Slider>
      </Container>
    )
  }
}

export default CardSlider
