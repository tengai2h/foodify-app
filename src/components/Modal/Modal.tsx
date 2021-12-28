import React from 'react';
import { useDispatch } from 'react-redux';
import { Field, Formik } from 'formik';

import { setCustomCard } from 'redux/cards/actions';

interface Props {
  setShowModal: () => void;
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
    setShowModal();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ values }) => (
        <div
          className={showModal ? 'modal-background' : 'modal active'}
          onClick={setShowModal}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
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
            <button
              className="add-dish-button"
              onClick={() => onSubmit(values.input, values.textArea)}
            >
              Add custom dish
            </button>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Modal;
