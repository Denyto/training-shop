import { Link } from 'react-router-dom';
import { useState } from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { sendFooterEmail } from '../../redux/actions';
import MailLoader from '../loader/mailLoader';

function FooterTop() {
  const dispatch = useDispatch();
  const [isDisable, setIsDisable] = useState(true);

  const { isMailSendLoading, isMailSendSuccess, isMailError } = useSelector((state) => {
    return {
      isMailSendLoading: state.emailFooterForm.emailForm.isMailSendLoading,
      isMailSendSuccess: state.emailFooterForm.emailForm.isMailSendSuccess,
      isMailError: state.emailFooterForm.emailForm.isMailError,
    };
  });

  function checkEmail(e) {
    setIsDisable(
      !/^(?:[a-z0-9]+(?:[-_.]?[a-z0-9]+)?@[a-z0-9_.-]+(?:\.?[a-z0-9]+)?\.[a-z]{2,5})$/i.test(
        e.target.value
      )
    );
  }

  function sendToServer(e) {
    dispatch(
      sendFooterEmail(
        document.querySelector('.footer__subscribe__title').value,
        () => (document.querySelector('.footer__subscribe__title').value = ''),
        () => setIsDisable(false)
      )
    );
    setIsDisable(true);
  }
  return (
    <div className="footer-top">
      <div className="wrapper footer-top__wrapper">
        <div className="footer-top__left">
          <p>BE IN TOUCH WITH US:</p>
        </div>
        <form>
          <input
            type="text"
            className="footer__subscribe__title"
            placeholder="Enter your email"
            onChange={checkEmail}
            data-test-id="footer-mail-field"
          ></input>
          <button
            className={classNames({ disable: isDisable })}
            disabled={isDisable}
            onClick={sendToServer}
            data-test-id="footer-subscribe-mail-button"
          >
            JOIN US
            {isMailSendLoading && <MailLoader></MailLoader>}
          </button>
          {isMailSendSuccess && <p className="emailstatus">Почта отправлена успешно</p>}
          {isMailError && (
            <p className="emailstatus" style={{ color: 'red' }}>
              Произошел сбой
            </p>
          )}
        </form>
        <ul className="footer-top__social">
          <li>
            <Link
              to="https://www.facebook.com"
              className="footer-top__social__facebook"
              target="blank"
            ></Link>
          </li>
          <li>
            <Link
              to="https://www.twitter.com"
              target="blank"
              className="footer-top__social__twitter"
            ></Link>
          </li>
          <li>
            <Link
              to="https://www.instagram.com/"
              target="blank"
              className="footer-top__social__instagram"
            ></Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com"
              target="blank"
              className="footer-top__social__noname"
            ></Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterTop;
