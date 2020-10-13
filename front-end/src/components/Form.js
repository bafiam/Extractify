import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Addpdf, Getpdfs } from "../modules/reducers/pdfEffects";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileCount: 0,
      files: [],
      names: [],
      addStatus: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { names, fileCount, files } = this.state;
    if (names.includes(event.target.files[0].name)) {
      this.setState({ addStatus: "Pdf already selected" });
    } else {
      this.setState({
        fileCount: fileCount + 1,
        files: [...files, event.target.files[0]],
        names: [...names, event.target.files[0].name],
        addStatus: "Pdf added",
      });
    }
  }

  handleSubmit(event) {
    const { files } = this.state;
    const { addFiles } = this.props;
    event.preventDefault();
    addFiles(files);

    setTimeout(() => {
      this.props.getFiles();
      this.setState({
        fileCount: 0,
        files: [],
        names: [],
        addStatus: "",
      });
    }, 4000);
  }

  render() {
    const { addStatus, fileCount, value, files } = this.state;
    let status;
    if (addStatus === "Pdf already selected") {
      status = (
        <div className="alert alert-danger" role="alert">
          {addStatus}
        </div>
      );
    }
    if (addStatus === "Pdf added") {
      status = (
        <div className="alert alert-success" role="alert">
          {addStatus}
        </div>
      );
    }
    const { postPdf } = this.props;
    let notification;
    if (postPdf.pdfSaved === true && postPdf.successResponse.length > 1) {
      notification = (
        <div className="alert alert-success" role="alert">
          {postPdf.successResponse}
        </div>
      );
    }
    if (postPdf.pdfSaved === false && postPdf.errorResponse.length > 1) {
      notification = (
        <div className="alert alert-warning" role="alert">
          {postPdf.errorResponse}
        </div>
      );
    }

    return (
      <div className="container">
        <h4>Number of Uploaded file :{fileCount}</h4>
        {status}
        <ul className="list-group mb-3">
          {files.map((item, idx) => (
            <li className="list-group-item" key={idx + 1}>
              <span className="badge badge-primary badge-pill mr-3">
                {idx + 1}{" "}
              </span>
              {item.name}
            </li>
          ))}
        </ul>
        {notification}
        <form
          onSubmit={this.handleSubmit}
          encType="multipart/form-data"
          method="post"
        >
          <div className="upload mb-3 ">
            <div className="input-group mb-3  w-50">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroupFileAddon01">
                  Upload
                </span>
              </div>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="inputGroupFile01"
                  aria-describedby="inputGroupFileAddon01"
                  value={value}
                  onChange={this.handleChange}
                  name="pdf-file"
                />
                <label className="custom-file-label" htmlFor="inputGroupFile01">
                  Choose file
                </label>
              </div>
            </div>
          </div>

          <input type="submit" className="btn btn-success" value="Submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  postPdf: state.postPdf,
});
const mapDispatchToProps = (dispatch) => ({
  addFiles: (value) => {
    dispatch(Addpdf(value));
  },
  getFiles: () => {
    dispatch(Getpdfs());
  },
});

Form.defaultProps = {
  addFiles: () => {},
  // getFiles: () => {},
  postPdf: {},
};
Form.propTypes = {
  addFiles: PropTypes.func,
  getFiles: PropTypes.func,
  postPdf:PropTypes.shape({
      pdfSaved: PropTypes.bool,
      successResponse: PropTypes.string,
      errorResponse: PropTypes.string,
    })
  
};
const sendFile = connect(mapStateToProps, mapDispatchToProps)(Form);
export default sendFile;
