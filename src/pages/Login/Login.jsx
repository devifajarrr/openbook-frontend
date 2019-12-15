import React, { Component } from 'react'
import style from './Login.module.css'
export class Login extends Component {
  render() {
    return (
        <div className={style.masuk}>
          <br></br>
          <br></br>
          <h1 className={style.titleMasuk}>Masuk</h1>

          <form method="#" action="#">
              <input type="text" name="#" placeholder="Email" className={style.formInput}></input>
              <br></br>
              <input type="password" name="#" placeholder="Kata Sandi" className={style.formInput}></input>
              
              <h6><center> Lupa Kata Sandi?</center></h6>
              <br></br>
              <center><button className={style.buttonMasuk}>Masuk</button></center>

          </form>
          <br></br>
          <center>Belum daftar?Klik Ini</center>
          
      
        </div>
        
    )
  }
}

export default Login
