import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { fetchDocumentsBegin, fetchDocumentsSuccess, fetchDocumentsFail } from "./store/documents/documents.action";
import { fetchLayoutsBegin, fetchLayoutsSuccess, fetchLayoutsFail } from "./store/layouts/layouts.action";
import Form from "./components/Form/Form";
import Card from "./layouts/Card/Card";

const App = ({dispatch, schemas}) => {

  const fetchDocuments = () => {
    dispatch(fetchDocumentsBegin());
    axios.get('http://localhost:8080/api/documents')
    .then(({data}) => {
      const { fields } = data.data.schema;
      dispatch(fetchDocumentsSuccess(fields));
    })
    .catch(err => dispatch(fetchDocumentsFail(err.message)))
  };

  const fetchLayouts = () => {
    dispatch(fetchLayoutsBegin());
    axios.get('http://localhost:8080/api/layouts')
    .then(({data}) => {
      const { header } = data.data;
      dispatch(fetchLayoutsSuccess(header));
    })
    .catch(err => dispatch(fetchLayoutsFail(err.message)))
  };

  useEffect(() => {
    fetchDocuments();
    fetchLayouts();
  }, [])

  return (
    <Card>
      <Form/>
    </Card>
  )
};

const mapStateToProps = state => ({
  schemas: state.document.schema.fields
});

export default connect(mapStateToProps)(App);