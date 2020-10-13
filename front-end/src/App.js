import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Getpdfs } from './modules/reducers/pdfEffects';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Form from './components/Form';
import Nav from './components/Nav';
import PdfReader from './components/PdfReader';

class App extends Component {
  componentDidMount() {
    const { getFiles } = this.props;
    getFiles();
  }

  render() {
    const value = [{
      title: 'No data',
      body: 'No uploaded Pdf file to be displayed, upload above',
    }];
    let results;
    const { getPdf } = this.props;

    if (getPdf.data.length <= 0) {
      results = value;
    }
    if (getPdf.data.length > 0) {
      results = getPdf.data;
    }
    return (
      <div className="App">
        <Nav name="Extractify" />
        <Form />

        {results.map(item => (
          <PdfReader itemData={item || value} key={item.title} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  getPdf: state.getPdf,

});

const mapDispatchToProps = dispatch => ({
  getFiles: () => {
    dispatch(Getpdfs());
  },
});
App.defaultProps = {
  getFiles: () => {},
  getPdf: {},

};
App.propTypes = {
  getFiles: PropTypes.func,
  getPdf: PropTypes.objectOf(PropTypes.array),

};
export default connect(mapStateToProps, mapDispatchToProps)(App);
