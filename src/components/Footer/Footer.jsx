import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import style from './Footer.module.css'
import cx from 'classnames'
import Container from 'react-bootstrap/Container'
const Footer = () => {
  return (
    <Container fluid className={cx('mt-md-5', style.footer)}>
      <Row>
        <Col md="4">
          <img
            src="/assets/img/logo-alt.png"
            alt="logo openbook"
            className={style.logo}
          />
          <p className="mt-2 text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            odio omnis pariatur, velit repellat beatae dolore necessitatibus
            veniam culpa ipsum? Dolor fugiat repudiandae, necessitatibus ducimus
            maxime autem consectetur quidem ullam.
          </p>
        </Col>
        <Col md="2" className="pl-md-5">
          <p className={style.title}>Tim open book</p>
          <div className="my-1">
            <a href="#link" className={style.link}>
              Tentang kami
            </a>
          </div>
          <div className="my-1">
            <a href="#link" className={style.link}>
              Kerjasama
            </a>
          </div>
          <div className="my-1">
            <a href="#link" className={style.link}>
              Bantuan
            </a>
          </div>
          <div className="my-1">
            <a href="#link" className={style.link}>
              Kebijakan privasi
            </a>
          </div>
        </Col>
        <Col md="3">
          <p className={style.title}>Ketringan</p>
          <div className="d-flex align-items-center mb-3">
            <img src="/assets/img/icons/email.svg" alt="email" />
            <a
              href="mailto:mantap@gmail.com"
              className={cx('ml-2', style.link)}
            >
              mantap@gmail.com
            </a>
          </div>
          <div className="d-flex align-items-center mb-3">
            <img src="/assets/img/icons/wa.svg" alt="email" />
            <a
              href="mailto:mantap@gmail.com"
              className={cx('ml-2', style.link)}
            >
              81923801982301
            </a>
          </div>
        </Col>
        <Col md="3">
          <p className={style.title}>Temukan kami</p>
          <div>
            <img
              className={style['social-icon']}
              src="/assets/img/icons/fb.svg"
              alt="fb"
            />
            <img
              className={style['social-icon']}
              src="/assets/img/icons/twitter.svg"
              alt="twitter"
            />
            <img
              className={style['social-icon']}
              src="/assets/img/icons/linkedin.svg"
              alt="linkedin"
            />
            <img
              className={style['social-icon']}
              src="/assets/img/icons/ig.svg"
              alt="ig"
            />
          </div>
          <Row className="mt-3">
            <Col sm="1" className="d-none d-sm-block">
              <img src="/assets/img/icons/location.svg" alt="location" />
            </Col>
            <Col>
              <p>
                Jl. Telekomunikasi, Sukapura Kec. Dayeuhkolot, Bandung, Jawa
                Barat 40257 Indonesia
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="text-center">
          <p className="mb-1">
            Made with love by raisoturu © 2019. All Right Reserved
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
