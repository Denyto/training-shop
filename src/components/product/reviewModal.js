import { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import * as Yup from 'yup';
import Rating from '@mui/material/Rating';
import { sendReview } from '../../redux/actions';
import MailLoader from '../loader/mailLoader';

function ReviewModal({ id, call }) {
  const dispatch = useDispatch();

  const [raitingValue, setRaitingValue] = useState(1);
  const [isDisable, setIsDisable] = useState(true);

  const { isLoading, isError } = useSelector((state) => {
    return {
      isLoading: state.reviewForm.reviewForm.isReviewSendLoading,
      isError: state.reviewForm.reviewForm.isError,
    };
  });

  const initialValues = {
    name: '',
    text: '',
  };

  function onSubmit(values) {
    setIsDisable(false);
    values = {
      ...values,
      raiting: raitingValue,
      id: id,
    };
    dispatch(
      sendReview(
        values,
        () => call(),
        // () => setIsOpen(false),
        () => window.location.reload(),
        () => setIsDisable(true)
      )
    );
  }

  const validationSchema = Yup.object({
    name: Yup.string().required(),
    text: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <>
      <div
        onClick={(e) => e.target.classList.contains('open') && call()}
        className="review-modal open"
        // className={classNames('review-modal', { open: isOpen })}
        // onClick={(e) => e.target.classList.contains('open') && setIsOpen(false)}
      >
        <div className="review-body" data-test-id="review-modal">
          <form onSubmit={formik.handleSubmit}>
            <p>Write a review</p>
            <div className="review-raiting">
              <Rating
                name="simple-controlled"
                size="large"
                value={raitingValue}
                onChange={(event, newValue) => {
                  setRaitingValue(newValue);
                }}
              />
            </div>
            <input
              type="text"
              placeholder="??????"
              id="name"
              data-test-id="review-name-field"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
            ></input>
            <div className="review-error">
              {formik.touched.name && formik.errors.name ? '?????????????? ??????' : ''}
            </div>
            <textarea
              type="textarea"
              placeholder="??????????????????????"
              id="text"
              data-test-id="review-text-field"
              onChange={formik.handleChange}
              value={formik.values.text}
              onBlur={formik.handleBlur}
              maxLength="350"
            ></textarea>
            <div className="review-error">
              {formik.touched.text && formik.errors.text ? '?????????????? ??????????' : ''}
            </div>
            <button
              type="submit"
              disabled={!isDisable || !formik.isValid}
              className={classNames({ disabled: !isDisable || !formik.isValid })}
              data-test-id="review-submit-button"
            >
              {isLoading && <MailLoader></MailLoader>}
              SEND
            </button>
            <div className="review-error">{isError && '???????????? ?????? ???????????????? ????????????!'}</div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ReviewModal;
