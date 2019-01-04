import React, { Component, Fragment } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import ContentGallery from '../../SmartComponents/ContentGallery/ContentGallery';
import { fetchSelectedPortfolio, fetchPortfolioItemsWithPortfolio } from '../../redux/Actions/PortfolioActions';
import MainModal from '../Common/MainModal';
import { hideModal, showModal } from '../../redux/Actions/MainModalActions';
import AddProductsToPortfolio from '../../SmartComponents/Portfolio/AddProductsToPortfolio';
import PortfolioFilterToolbar from '../../PresentationalComponents/Portfolio/PortfolioFilterToolbar';
import PortfolioActionToolbar from '../../PresentationalComponents/Portfolio/PortfolioActionToolbar';
import PortfolioItem from './PortfolioItem';
import NoMatch from '../../PresentationalComponents/Shared/404Route';
import './portfolio.scss';

class Portfolio extends Component {
    state = {
      portfolioId: '',
      isKebabOpen: false,
      isOpen: false,
      filteredItems: []
    };

  fetchData = (apiProps) => {
    this.props.fetchSelectedPortfolio(apiProps);
    this.props.fetchPortfolioItemsWithPortfolio(apiProps);
  }

  componentDidMount() {
    this.fetchData(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchData(this.props.match.params.id);
    }
  }

    onClickEditPortfolio = () => {
      this.props.showModal({
        open: true,
        itemdata: this.props,
        closeModal: this.props.hideModal
      }, 'editportfolio');

      this.setState({
        ...this.state,
        isOpen: !this.state.isOpen
      });
    };

    filterItems = (filterValue) => {
      let filteredItems = [];
      if (this.props.portfolioItems && this.props.portfolioItems.portfolioItems) {
        filteredItems = this.props.portfolioItems.portfolioItems;
        filteredItems = filteredItems.filter((item) => {
          let itemName = item.name.toLowerCase();
          return itemName.indexOf(
            filterValue.toLowerCase()) !== -1;
        });
      }

      return filteredItems;
    };

    setViewMode = (mode = null, reloadData = false) => {
      this.setState({
        ...this.state,
        viewMode: mode
      });
      if (reloadData) {
        this.props.fetchPortfolioItemsWithPortfolio(this.props.match.params.id);
      }
    };

    renderProducts = ({ title, filteredItems, addProductsRoute }) => (
      <Fragment>
        <PortfolioFilterToolbar/>
        { (!this.props.isLoading) &&
          <div style={ { marginTop: '15px', marginLeft: '25px', marginRight: '25px' } }>
            <PortfolioActionToolbar title={ title }
              onClickEditPortfolio={ this.onClickEditPortfolio }
              filterItems={ this.filterItems }
              addProductsRoute={ addProductsRoute }
            />
          </div>
        }
        <ContentGallery { ...filteredItems } />
        <MainModal/>
      </Fragment>
    )

    renderAddProducts = ({ portfolioRoute }) => (
      <AddProductsToPortfolio
        portfolio={ this.props.portfolio }
        portfolioRoute={ portfolioRoute }
      />
    );

    render() {
      const portfolioRoute = this.props.match.url;
      const addProductsRoute = `${this.props.match.url}/add-products`;
      let filteredItems = {
        items: this.props.portfolioItems.map(item => <PortfolioItem key={ item.id } { ...item }/>),
        isLoading: this.props.isLoading
      };

      let title = this.props.portfolio ? this.props.portfolio.name : '';

      if (this.props.isLoading) {
        return <div>Loading</div>;
      }

      return (
        <Switch>
          <Route exact path="/portfolios/:id" render={ props => this.renderProducts({ addProductsRoute, filteredItems, title, ...props }) } />
          <Route exact path="/portfolios/:id/add-products" render={ props => this.renderAddProducts({ portfolioRoute, ...props }) } />
          <Route component={ NoMatch } />
        </Switch>
      );
    }
}

const mapStateToProps = ({ portfolioReducer: { selectedPortfolio, portfolioItems, isLoading }}) => ({
  portfolio: selectedPortfolio,
  portfolioItems,
  isLoading: !selectedPortfolio || isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchPortfolioItemsWithPortfolio: apiProps => dispatch(fetchPortfolioItemsWithPortfolio(apiProps)),
  fetchSelectedPortfolio: apiProps => dispatch(fetchSelectedPortfolio(apiProps)),
  hideModal: () => dispatch(hideModal()),
  showModal: (modalProps, modalType) => {
    dispatch(showModal({ modalProps, modalType }));
  }
});

Portfolio.propTypes = {
  isLoading: propTypes.bool,
  fetchPortfolioItemsWithPortfolio: propTypes.func,
  fetchSelectedPortfolio: propTypes.func,
  showModal: propTypes.func,
  hideModal: propTypes.func,
  onClickEditPortfolio: propTypes.func,
  match: propTypes.object,
  portfolio: propTypes.shape({
    name: propTypes.string,
    id: propTypes.string.isRequired
  }),
  portfolioItems: propTypes.array
};

Portfolio.defaultProps = {
  portfolioItems: []
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Portfolio));