import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styles from "./Form.module.scss";
import Button from "../../layouts/Button/Button";
import validateHandler from "../../utils/validate";
import Modal from "../Modal/Modal";
import Input from "../../layouts/Input/Input";
import {
  setValidateError,
  clearValidateError,
} from "../../store/validate/validate.action";

const FormData = ({
  dispatch,
  headers,
  documents,
  fetchError,
  isLoading,
  validateError,
}) => {
  const [prompt, setPrompt] = useState({
    error: "",
    validate: "",
    save: ""
  })
  const [fieldsValue, setFieldsValue] = useState([]);

  const onCloseHandler = () => {
    setPrompt({
      error: "",
      validate: "",
      save: ""
    })
    dispatch(clearValidateError());
  };

  useEffect(() => {
    if (fetchError) {
      setPrompt(prevState => {
        return {
          ...prevState,
          error: fetchError
        }
      });
    }
    if (validateError) {
      setPrompt(prevState => {
        return {
          ...prevState,
          validate: validateError
        }
      })
    };
  }, [fetchError, validateError]);

  const onChangeHandler = ({ id, type, value }) => {
    if (!fieldsValue.length) {
      setFieldsValue((prevState) => {
        return [...prevState, { id, type, value }];
      });
      return;
    }

    if (fieldsValue.some((field) => field.id === id)) {
      const index = fieldsValue.findIndex((field) => field["id"] === id);
      const fields = [...fieldsValue];
      fields[index]["value"] = value;
      setFieldsValue(fields);
      return;
    }

    setFieldsValue((prevState) => {
      return [...prevState, { id, value, type }];
    });
  };

  const checkInputValidity = (validate) => {
    const { isValid, message } = validate;
    if (!isValid) {
      setFieldsValue([]);
      return dispatch(setValidateError(message));
    }

    setPrompt(prevState => {
      return {
        ...prevState,
        save: "Save Successfully"
      }
    })
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    validateHandler(fieldsValue, checkInputValidity);
  };

  const onRenderForm = () => {
    if (documents && headers && headers[0]) {
      const { columns } = headers[0]["rows"][0];
      const fields = documents.filter((doc) => {
        if (columns.some(({ fieldId }) => fieldId === doc._id)) {
          return doc
        }
      })

      return (
        <>
          <div className={styles["form_wrapper"]}>
            {
              fields.map(({ label, ...item }) => {
                return (
                  <Input
                    key={item._id}
                    label={label}
                    input={item}
                    onChange={onChangeHandler}
                  />
                );
              })
            }
          </div>
          <Button type="submit" label="Save" />
        </>
      );
    }

    return <p className={styles["form_empty"]}>unknown error occurred</p>;
  };

  return (
    <form className={styles["form"]} onSubmit={onSubmitHandler}>
      {
        (prompt.error || prompt.validate || prompt.save)
        &&
        (
          <Modal onClose={onCloseHandler}>
            {prompt.error || prompt.validate || prompt.save}
          </Modal>
        )
      }

      {isLoading ? <p>Loading....</p> : onRenderForm()}
    </form>
  );
};

const mapStateToProps = (state) => ({
  documents: state.document.schema.fields,
  headers: state.layout.header,
  fetchError: state.document.error,
  isLoading: state.document.isLoading,
  validateError: state.validate.validateMessage,
});

export default connect(mapStateToProps)(FormData);
