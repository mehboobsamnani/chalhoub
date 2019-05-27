import React, { Component } from 'react';
import moment from 'moment';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import placeholder from '../../assets/images/placeholder.jpg';


export class News extends Component {
  constructor(props) {

    super(props);

  }

  render() {
  const { article, scrollPosition } = this.props;
  const d = moment(article.publishedAt);
  
  return (
    <div className="article column column-50">
      { article !== null && article !== {}
        && (
          <div className="post">
            <div className="module">
              <div className="thumbnail">
                <LazyLoadImage
                effect="blur"
                  alt={article.title} 
                  src={article.urlToImage}
                  scrollPosition={scrollPosition}
                  height='100%'
                  placeholderSrc={placeholder}
                />
                <div className="date">
                  <div>{d.format('D')}</div>
                  <div>{d.format('MMM')}</div>
                </div>
              </div>
              <div className="content">
                <div className="category">{article.source.name}</div>
                <h1 className="title">{article.title}</h1>
                <div className="description">{article.description}</div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
  }
};
News.defaultProps = {
  article: {},
};

export default trackWindowScroll(News);
