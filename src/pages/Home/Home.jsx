import React, { Component } from 'react'
import CategoriesNav from '../../components/CategoriesNav/CategoriesNav'

export class Home extends Component {
  render() {
    return (
      <div className="flex-grow-1">
        <div>slide-show</div>
        <CategoriesNav />
        <div>Populer</div>
        <div>Yang baru</div>
        <div>Novel</div>
        <div>baca buku yuh</div>
      </div>
    )
  }
}

export default Home
