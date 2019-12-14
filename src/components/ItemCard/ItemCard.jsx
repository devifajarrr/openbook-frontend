import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import cx from 'classnames'
import style from './ItemCard.module.css'
export class ItemCard extends Component {
  render() {
    let props = { ...this.props }
    props.className = cx(
      'border-0 shadow-sm m-2',
      style.cardMenu,
      this.props.className
    ) //not a good practice but okay
    return (
      <Card {...props}>
        <Card.Img variant="top" src="/assets/img/images.jpeg" />
        <Card.Body className="p-2">
          <h6 className="font-weight-bold">{props.buku.judul}</h6>
          <h6 className="small text-gray-700">{props.buku.pengarang}</h6>
          <h6 className={style.harga}>Rp {props.buku.harga}</h6>
        </Card.Body>
      </Card>
    )
  }
}

export default ItemCard
