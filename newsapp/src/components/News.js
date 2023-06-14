import React, { Component } from 'react'
import NewsItem from './NewsItem'
import { logDOM } from '@testing-library/react';

export class News extends Component {

  constructor() {
    super();
    // console.log('Hello i am a contructor from news component');
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
  }

  async componentDidMount() {
    // console.log("componentDidMount");
    let url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cf66606b23f84c9b81b36809bffdd6e6&page=1&pageSize=20';
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
  }

  handlePrevClick = async () => {
    console.log("Previous Click");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cf66606b23f84c9b81b36809bffdd6e6&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  }

  handleNextClick = async () => {
    console.log("Next Click");
    if (this.state.page+1 > Math.ceil(this.state.totalResults / 20)) {

    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cf66606b23f84c9b81b36809bffdd6e6&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })
    }
  }

  render() {
    // console.log("render");
    return (
      <div className='container my-3' >
        <h2><i>NewsTrain - Top Headlines</i></h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-3" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""}
                imageUrl={element.urlToImage ? element.urlToImage : "https://thumbs.dreamstime.com/z/train-vintage-travelling-3257907.jpg"} newsUrl={element.url} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark mx-3 my-3" onClick={this.handlePrevClick} >&larr; Previous</button>
          <button type="button" className="btn btn-dark mx-3 my-3" onClick={this.handleNextClick} >Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
