import { useEffect, useRef, useState } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Checkbox, Popover } from 'antd';
import './style.scss';

const covid = require('corona-info');

const MessageAvatar = () => (
  <div className="message-avatar">
    <img
      src="https://media.istockphoto.com/vectors/-vector-id1010001882?k=6&m=1010001882&s=612x612&w=0&h=hjArrtcMrHNjzF0CIR75SCp1_02fra9JvZqZJt5oggI="
      alt=""
    />
  </div>
);

const TextMessage = ({ text }: { text: string | any }) => (
  <div className="message-text">
    {text}
  </div>
);

const ButtonMessage = ({ text, onClick }: { text: string, onClick: any }) => (
  <div className="message-button">
    <Button onClick={onClick}>{text}</Button>
  </div>
);

// eslint-disable-next-line react/require-default-props
const Message = ({ isBot = false, text }: { isBot?: boolean, text: string | any }) => (
  <>
    {
      isBot ? (
        <div className="bot-message">
          <MessageAvatar />
          <TextMessage text={text} />
        </div>
      ) : (
        <div className="user-message">
          <TextMessage text={text} />
        </div>
      )
    }
  </>
);

const DiagnoseMessage = ({ submitDiagnose }: { submitDiagnose: any }) => {
  const [commonResult, setCommonResult] = useState<string[]>([]);
  const [lessResult, setLessResult] = useState<string[]>([]);
  const [dangerousResult, setDangerousResult] = useState<string[]>([]);
  const [submit, setSubmit] = useState(false);

  const commonOpts = [
    { label: 'Fever', value: 'fever' },
    { label: 'Dry cough', value: 'cough' },
    { label: 'Get Tired', value: 'tired' },
  ];

  const lessCommonOpts = [
    { label: 'Ailment', value: 'ailment' },
    { label: 'Sore Throat', value: 'throat' },
    { label: 'Diarrhea', value: 'diarrhea' },
    { label: 'Headache', value: 'headache' },
  ];

  const dangerousOpts = [
    { label: 'Shortness of Breath', value: 'breath' },
    { label: 'Chest pain or Tightness', value: 'chest' },
    { label: 'Inability to Speak or Move', value: 'inability' },
  ];

  const onClick = () => {
    setSubmit(true);
    if (dangerousResult.length) {
      submitDiagnose('You have Dangerous symptoms. You should go and verify COVID-19.');
      return;
    }

    if (commonResult.length || lessResult.length) {
      submitDiagnose('You have few symptoms so should take care of your self.');
      return;
    }

    submitDiagnose('Great. You don\'t have any symptoms but you should remember to take care of your self.');
  };

  const onCommonChange = (values: any[]) => {
    setCommonResult(values);
  };

  const onLessChange = (values: any[]) => {
    setLessResult(values);
  };

  const onDangerousChange = (values: any[]) => {
    setDangerousResult(values);
  };

  return (
    <>
      <div className="bot-message">
        <MessageAvatar />
        <TextMessage text={(
          <>
            <div className="diagnose-checkbox">
              <div className="diagnose-title">The most common symptoms:</div>
              <Checkbox.Group
                disabled={submit}
                options={commonOpts}
                value={commonResult}
                onChange={onCommonChange}
              />
            </div>
            <div className="diagnose-checkbox">
              <div className="diagnose-title">The less common symptoms:</div>
              <Checkbox.Group
                disabled={submit}
                options={lessCommonOpts}
                value={lessResult}
                onChange={onLessChange}
              />
            </div>
            <div className="diagnose-checkbox">
              <div className="diagnose-title">The dangerous symptoms:</div>
              <Checkbox.Group
                disabled={submit}
                options={dangerousOpts}
                value={dangerousResult}
                onChange={onDangerousChange}
              />
            </div>
          </>
        )}
        />
      </div>
      {
        submit
          ? (
            <></>
          ) : (
            <ButtonMessage text="Diagnose" onClick={onClick} />
          )
      }
    </>
  );
};

const CovidInformationMessage = (
  {
    active,
    cases,
    deaths,
    recovered,
    updatedDate,
  } : {
    active: string,
    cases: string,
    deaths: string,
    recovered: string,
    updatedDate: string,
  },
) => (
  <Message
    isBot
    text={(
      <>
        <p>
          <b>World Coronavirus Statistic</b>&nbsp;
        </p>
        <p><b>Date:</b>&nbsp;{updatedDate}</p>
        <p><b>Active:</b>&nbsp;{active}</p>
        <p><b>Cases:</b>&nbsp;{cases}</p>
        <p><b>Deaths:</b>&nbsp;{deaths}</p>
        <p style={{ marginBottom: 0 }}><b>Recovered:</b>&nbsp;{recovered}</p>
      </>
    )}
  />
);

const ChatBotContent = () => {
  const [start, setStart] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    container?.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const onClickCovidInformation = (mgs: any[]) => {
    covid.findData({ country: 'all' }).then(({
      active,
      cases,
      deaths,
      recovered,
      updatedDate,
    }: {
      active: string,
      cases: string,
      deaths: string,
      recovered: string,
      updatedDate: string,
    }) => {
      const newMessages = [
        <Message text="Yes" />,
        <CovidInformationMessage
          active={active}
          cases={cases}
          deaths={deaths}
          recovered={recovered}
          updatedDate={updatedDate}
        />,
        <Message
          isBot
          text={(
            <>
            For more statistics:
              <a
                style={{ display: 'block' }}
                href="https://www.worldometers.info/coronavirus/"
                target="_blank"
                rel="noreferrer"
              >https://www.worldometers.info/coronavirus/
              </a>
            </>
          )}
        />,
      ];

      setTimeout(() => setMessages(mgs.slice(0, mgs.length - 1).concat(newMessages[0])), 500);
      setTimeout(() => setMessages(mgs.slice(0, mgs.length - 1).concat(...newMessages.slice(0, 2))), 1500);
      setTimeout(() => setMessages(mgs.slice(0, mgs.length - 1).concat(...newMessages)), 2500);
    });
  };

  const submitDiagnose = (value: string) => {
    const nextMessages = [
      <Message text="Diagnose" />,
      <Message isBot text={value} />,
      <Message
        isBot
        text={(
          <div>
            For more information, regularly check the WHO coronavirus pages.&nbsp;
            <a
              href="https://www.who.int/covid-19"
              target="_blank"
              rel="noopener noreferrer"
            >
            https://www.who.int/covid-19
            </a>
          </div>
        )}
      />,
      <Message
        isBot
        text="Do you want to see the COVID-19 Information ?"
      />,
      <ButtonMessage text="Yes" onClick={() => onClickCovidInformation(nextMessages)} />,
    ];

    setTimeout(() => setMessages([...messages, nextMessages[0]]), 500);
    setTimeout(() => setMessages([...messages, ...nextMessages.slice(0, 2)]), 1500);
    setTimeout(() => setMessages([...messages, ...nextMessages.slice(0, 3)]), 2500);
    setTimeout(() => setMessages([...messages, ...nextMessages.slice(0, 4)]), 3500);
    setTimeout(() => setMessages([...messages, ...nextMessages]), 4500);
  };

  return (
    <div ref={container} className="chatbot-content">
      {
        !start
          ? (
            <div className="chatbot-get-diagnosed">
              <Button onClick={() => setStart(true)}>Get Diagnosed</Button>
            </div>
          ) : (
            <div className="chatbot-messages">
              <DiagnoseMessage submitDiagnose={submitDiagnose} />
              {
                messages.map((m: any, index: number) => <div key={index}>{m}</div>)
              }
              <div ref={container} />
            </div>
          )
      }
    </div>
  );
};

const ChatBot = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="wrapper-chatbot">
      <Popover
        overlayClassName="wrap-inner-chatbot"
        trigger="click"
        placement="topRight"
        visible={visible}
        title={(
          <div className="chatbot-title">
            <div>
              <img
                className="chatbot-title-img"
                src="https://media.istockphoto.com/vectors/-vector-id1010001882?k=6&m=1010001882&s=612x612&w=0&h=hjArrtcMrHNjzF0CIR75SCp1_02fra9JvZqZJt5oggI="
                alt=""
              />
              <p>COVID-19 Diagnose</p>
            </div>
            <div className="btn-close" onClick={() => setVisible(false)}>
              <FontAwesomeIcon icon={faTimes} size="1x" />
            </div>
          </div>
        )}
        content={(
          <ChatBotContent />
        )}
      >
        <div className="chatbot" onClick={() => setVisible(!visible)}>
          <img
            className="chatbot-img"
            src="https://media.istockphoto.com/vectors/-vector-id1010001882?k=6&m=1010001882&s=612x612&w=0&h=hjArrtcMrHNjzF0CIR75SCp1_02fra9JvZqZJt5oggI="
            alt=""
          />
        </div>
      </Popover>
    </div>
  );
};

export default ChatBot;
