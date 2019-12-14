import React, { Component } from 'react'

export class NotFound extends Component {
  render() {
    return (
      <div className="flex-grow-1 text-center mt-5">
        <h1>
          404 not found{' '}
          <span role="img" aria-labelledby="nangid">
            😭
          </span>
        </h1>
      </div>
    )
  }
}

export default NotFound
