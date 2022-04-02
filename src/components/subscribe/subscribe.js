import { useState } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { sendEmail } from '../../redux/actions';
import MailLoader from '../loader/mailLoader';

function Subscribe(e) {
  const dispatch = useDispatch();
  const [isDisable, setIsDisable] = useState(true);

  const { isMailSendLoading, isMailSendSuccess, isMailError } = useSelector((state) => {
    return {
      isMailSendLoading: state.emailSubscribeForm.emailForm.isMailSendLoading,
      isMailSendSuccess: state.emailSubscribeForm.emailForm.isMailSendSuccess,
      isMailError: state.emailSubscribeForm.emailForm.isMailError,
    };
  });


  function checkEmail(e) {
    setIsDisable(
      !/^(?:[a-z0-9]+(?:[-_.]?[a-z0-9]+)?@[a-z0-9_.-]+(?:\.?[a-z0-9]+)?\.[a-z]{2,5})$/i.test(
        e.target.value
      )
    );
  }

  function sendToServer() {
    dispatch(
      sendEmail(
        document.querySelector('.subscribe__title').value,
        () => (document.querySelector('.subscribe__title').value = ''),
        () => setIsDisable(false),
      )
    );
    setIsDisable(true);
  }

  return (
    <aside className="subscribe">
      <div className="subscribe__wrapper">
        <div className="subscribe__women"></div>
        <div className="subscribe__center">
          <p>SPECIAL OFFER</p>
          <div className="subscribe__item">
            <h3>SUBSCRIBE</h3>
            <h3>
              AND&nbsp;<span>GET 10% OFF</span>
            </h3>
          </div>
          <div className="subscribe__item">
            <input
              type="text"
              data-test-id="main-subscribe-mail-field"
              className="subscribe__title"
              placeholder="Enter your email"
              onChange={checkEmail}
            ></input>
            {isMailSendSuccess && <p>Почта отправлена успешно</p>}
            {isMailError && <p style={{ color: 'red' }}>Произошел сбой</p>}
          </div>
          <button
            data-test-id="main-subscribe-mail-button"
            disabled={isDisable}
            className={classNames('subscribe__item', { disable: isDisable })}
            onClick={sendToServer}
          >
            SUBSCRIBE
            {isMailSendLoading && <MailLoader></MailLoader>}         
          </button>
        </div>
        <div className="subscribe__men"></div>
      </div>
    </aside>
  );
}

export default Subscribe;
