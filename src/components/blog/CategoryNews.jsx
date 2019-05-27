import React, { Component } from 'react';
import PropTypes from 'prop-types';
import News from './News';
import { fetchNews } from '../../helpers';
import backIcon from '../../assets/images/left-arrow.svg';

export class CategoryNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      cat: '',
    };
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    this.doApiCall();
  }

  goBack() {
    this.props.history.goBack();

  }

  doApiCall() {
    const { match } = this.props;
    this.setState({ cat: match.params.id });
    fetchNews(match.params.id).then((response) => {
      this.setState({
        articles: response.articles,
      });
    }).catch(() => (false));
    return true;
  }

  render() {
    const { cat } = this.state;
    const { articles } = this.state;
    return (
      <div className="newsList">
        <a onClick={this.goBack} href="#" className="cat-name" >
          <img className="back-link"  src={backIcon} height="25" width="25" />
          {cat.toUpperCase()}
        </a>
        <div className="articles row">
          {articles.map((article, i) => { return <News article={article} key={i} />; })}
        </div>
      </div>
    );
  }
}

CategoryNews.propTypes = {
  match: PropTypes.objectOf(PropTypes.shape({})),
};

CategoryNews.defaultProps = {
  match: [],
};
export default CategoryNews;
