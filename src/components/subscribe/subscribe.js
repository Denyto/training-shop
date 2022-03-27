import { useState } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { sendEmail } from '../../redux/actions';
import MailLoader from '../loader/mailLoader';

function Subscribe(e) {
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

  function sendToServer() {
    dispatch(sendEmail(document.querySelector('.subscribe__title').value));
    setIsDisable(true);
    document.querySelector('.subscribe__title').value = '';
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
          </div>
          <div
            data-test-id="main-subscribe-mail-button"
            className={classNames('subscribe__item', { disable: isDisable })}
            onClick={sendToServer}
          >
            {isMailSendLoading && <MailLoader></MailLoader>}
            <h3 className={classNames('subscribe__title', { disable: isDisable })}>SUBSCRIBE</h3>
          </div>
        </div>
        <div className="subscribe__men"></div>
      </div>
    </aside>
  );
}

export default Subscribe;
