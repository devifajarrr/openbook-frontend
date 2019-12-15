import React from 'react'
import BSNavbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { NavLink as Link } from 'react-router-dom'
import style from './Navbar.module.css'
import cx from 'classnames'

const Navbar = () => {
  return (
    <div>
      <BSNavbar variant="light" className={cx(style.nav, 'shadow-sm px-md-3')}>
        <Link to="/">
          <img
            src="/assets/img/logo.png"
            alt="openbook"
            className="navbar-brand"
            height="45"
          />
        </Link>
        <Form inline className="ml-auto">
          <div className={cx(style.searchBox, 'mr-2')}>
            <Form.Control placeholder="Cari buku..." className="border-0" />
            <Link to="/search" className={style.searchIcon}>
              <FontAwesomeIcon icon={faSearch} />
            </Link>
          </div>
        </Form>
        <Nav>
          
          <Link className="nav-link mr-1" to="/Tentang" >
            Tentang
          </Link>
          <Link className="nav-link mr-1" to="/Login">
            Masuk
          </Link>
          <Link
            className={cx(style.daftarBtn, 'nav-link btn btn-primary')}
            to="/Register"
          >
            Daftar
          </Link>
        </Nav>
      </BSNavbar>
    </div>
  )
}

export default Navbar
