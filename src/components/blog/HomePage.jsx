import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import News from './News';
import Message from '../common/Message';
import { fetchHeadlines } from '../../helpers';


export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    this.doApiCall();
  }

  doApiCall() {
    fetchHeadlines().then((response) => {
      this.setState({
        articles: response.articles,
      });
      return true;
    }).catch(() => (false));
    return true;
  }

  render() {
    const {  errorMessage } = this.props;
    const { articles } = this.state;
    const categories = ['business', 'entertainment', 'general',
      'sports', 'health', 'science', 'technology'];
    return (
      <div>
        <div className="row">
          <div className="column column-100">
            <nav role="navigation">
              <label htmlFor="show-menu" className="show-menu">Category</label>
                <input type="checkbox" id="show-menu" role="button" />
                  <ul id="menu">
                    {categories.map((v, i) => {
                    return (
                      <li key={ i }>
                        <Link to={`category/${v}`}>{v.toUpperCase()}</Link>
                      </li>
                    )})
                    }
                </ul>
              </nav>  
          </div>
        </div>
        <div className="row">
          {articles.map((article, i) => { return <News article={article} key={ i } />; })}
        </div>
        <div>
          <Message message={errorMessage} />
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  errorMessage: PropTypes.string,
};

HomePage.defaultProps = {
  errorMessage: '',
};


export default HomePage;
