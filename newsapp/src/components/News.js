import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Josh Pennington,Irene Nasser",
      "title": "Russia targets Kyiv with largest drone attack of conflict, killing one - CNN",
      "description": "Russia launched its largest drone attack of the conflict yet on Ukraine’s capital Kyiv, leaving one person dead and sparking fires across the city.",
      "url": "https://www.cnn.com/2023/05/28/europe/russian-drones-attack-ukraine-kyiv-intl-hnk/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230527233922-03-kyiv-russia-air-strike-0528.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-05-28T16:00:00Z",
      "content": "Russia launched its largest drone attack of the conflict yet on Ukraines capital Kyiv, leaving one person dead and sparking fires across the city.\r\nUkraines Ministry of Defence said Russia unleashed … [+1837 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Indian Olympic wrestlers detained as latest protest escalates - BBC",
      "description": "Delhi police are being criticised for the way they shut down a march to the new parliament building.",
      "url": "https://www.bbc.com/news/world-asia-65739465",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/9361/production/_129892773_c5337227d1ab1810be71c93d8ed6b50d36de95c2.jpg",
      "publishedAt": "2023-05-28T15:23:58Z",
      "content": "Media caption, Watch: Indian police drag away and detain protesting wrestlers\r\nTwo Olympic wrestlers have been detained by police in India during the latest protest against the alleged sexual abuse o… [+3328 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Motorsport.com"
      },
      "author": "Jake Boxall-Legge",
      "title": "F1 Monaco GP: Verstappen survives late rain to win as Alonso gambles - Motorsport.com",
      "description": "Max Verstappen overcame a sudden downpour at the Monaco Grand Prix to claim his fourth Formula 1 victory of 2023, beating Fernando Alonso by 27.9s.",
      "url": "https://www.motorsport.com/f1/news/monaco-verstappen-win-rain-alonso-gamble/10474812/",
      "urlToImage": "https://cdn-4.motorsport.com/images/amp/27vA4Ge0/s6/max-verstappen-red-bull-racing.jpg",
      "publishedAt": "2023-05-28T15:12:21Z",
      "content": "The Dutchman converted pole position successfully despite having to contend with the rigours of a wet race among the final third of the race, extending his stint on the medium tyres to cover off the … [+3805 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": null,
      "title": "Turkey votes in election runoff, Erdogan well placed to sustain rule - Reuters.com",
      "description": "President Tayyip Erdogan appeared to be headed for victory in Turkey's runoff election on Sunday, with data from both state-run Anadolu agency and opposition ANKA news agency giving him an edge with about 93% of the ballot boxes counted.",
      "url": "https://www.reuters.com/world/middle-east/erdogan-positioned-extend-rule-turkey-runoff-election-2023-05-27/",
      "urlToImage": "https://www.reuters.com/resizer/eiCVeq2CRh3foF4_g2_4tKzdyG4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/BKKVNOMFXNLOXE3IK5UZG4QY2I.jpg",
      "publishedAt": "2023-05-28T15:05:00Z",
      "content": "ANKARA, May 28 (Reuters) - President Tayyip Erdogan appeared to be headed for victory in Turkey's runoff election on Sunday, with data from both state-run Anadolu agency and opposition ANKA news agen… [+3052 chars]"
    }]

  constructor() {
    super();
    // console.log('Hello i am a contructor from news component');
    this.state = {
      articles: this.articles,
      loading: false,
    }
  }
  render() {
    return (
      <div className='container my-3' >
        <h2><i>NewsTrain - Top Headlines</i></h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-3" key={element.url}>
              <NewsItem title={element.title} description={element.description}
                imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default News
