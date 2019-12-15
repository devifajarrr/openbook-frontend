import React, { Component } from 'react'
import style from './Register.module.css'
export class Register extends Component {
  render() {
    return (
        <div className={style.masuk}>
          <br></br>
          <br></br>
          <h1 className={style.titleMasuk}>Daftar</h1>

          <form method="#" action="#">
              <input type="text" name="#" placeholder="Email" className={style.formInput}></input>
              <br></br>
              <input type="Email" name="#" placeholder="Email" className={style.formInput}></input>
              <br></br>
              <input type="password" name="#" placeholder="Kata Sandi" className={style.formInput}></input>
             
              <br></br>
              <center><button className={style.buttonDaftar}>Masuk</button></center>

          </form>
          <br></br>
         
          
      
        </div>
        
    )
  }
}

export default Register
