import React from 'react';
import { useDispatch } from 'react-redux';
import { Field, Form, Formik } from 'formik';

import { setCustomCard } from 'redux/cards/actions';

interface Props {
  setShowModal: (isShow: boolean) => void;
  showModal: boolean;
}

interface MyFormValues {
  input: string;
  textArea: string;
}

const Modal: React.FC<Props> = ({
  showModal,
  setShowModal,
}: Props) => {
  const dispatch = useDispatch();
  const initialValues: MyFormValues = { input: '', textArea: '' };
  const onSubmit = (input: string, textArea: string) => {
    dispatch(setCustomCard(input, textArea));
    setShowModal(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => onSubmit(values.input, values.textArea)}
    >
      {({ values, handleSubmit }) => (
        <div
          className={showModal ? 'modal-background' : 'modal active'}
          onClick={() => setShowModal(false)}
        >
          <Form className="modal" onSubmit={handleSubmit}>
            <div className="modal-title">Add custom dish</div>
            <Field
              className="input-dish-title"
              type="text"
              placeholder="Dish title"
              value={values.input}
              name="input"
            ></Field>
            <Field
              className="textarea-dish-description"
              as="textarea"
              name="textArea"
              placeholder="Dish description..."
              value={values.textArea}
            ></Field>
            <button className="add-dish-button" type="submit">
              Add custom dish
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default Modal;
