import React, { Component } from 'react'
import CategoriesNav from '../../components/CategoriesNav/CategoriesNav'
import CardSlider from '../../components/CardSlider/CardSlider'

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
        <div>baca buku yuh</div>
      </div>
    )
  }
}

export default Home
