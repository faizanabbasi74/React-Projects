import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, name } = this.props;
    return (
      <div className='my-3'>
        <span class="badge text-bg-danger">{name}</span>
        <div className="card" style={{ backgroundColor: 'lightgrey' }}>
          <img src={imageUrl} className="card-img-top" alt="..." width={286} height={161} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toUTCString()}</small></p>
            <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem

