import { Link } from 'react-router-dom';
import { useState } from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { sendEmail } from '../../redux/actions';
import MailLoader from '../loader/mailLoader';

function FooterTop() {
  const dispatch = useDispatch();
  const [isDisable, setIsDisable] = useState(true);

  const { isMailSendLoading, isMailSendSuccess } = useSelector((state) => {
    return {
      isMailSendLoading: state.emailForm.emailForm.isMailSendLoading,
      isMailSendSuccess: state.emailForm.emailForm.isMailSendSuccess,
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
    dispatch(sendEmail(document.querySelector('.subscribe__title').value));
    setIsDisable(true);
    document.querySelector('form input').value = '';
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
            className="subscribe__title"
            placeholder="Enter your email"
            onChange={checkEmail}
            data-test-id="footer-mail-field"
          ></input>
          <button
            className={classNames({ disable: isDisable })}
            onClick={sendToServer}
            data-test-id="footer-subscribe-mail-button"
          >
            {isMailSendLoading && <MailLoader></MailLoader>}
            <p className={classNames({ disable: isDisable })}>JOIN US</p>
          </button>
          {isMailSendSuccess && <p className="emailstatus">Почта отправлена успешно</p>}
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
