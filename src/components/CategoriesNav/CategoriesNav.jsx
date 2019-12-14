import React, { Component } from 'react'
import Button from 'react-bootstrap/button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import style from './CategoriesNav.module.css'
import cx from 'classnames'
export class CategoriesNav extends Component {
  constructor() {
    super()
    this.state = {
      categories: [
        {
          name: 'komik',
          url: '/#komix',
        },
        {
          name: 'komik',
          url: '/#komix',
        },
        {
          name: 'komik',
          url: '/#komix',
        },
        {
          name: 'komik',
          url: '/#komix',
        },
        {
          name: 'komik',
          url: '/#komix',
        },
      ],
    }
  }
  render() {
    const mapCategories = this.state.categories.map((data, i) => {
      return (
        <Col key={i} className="p-1">
          <Button className={cx(style.item, 'w-100')}>{data.name}</Button>
        </Col>
      )
    })
    return (
      <Container>
        <Row>{mapCategories}</Row>
      </Container>
    )
  }
}

export default CategoriesNav
