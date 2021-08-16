import { useEffect, useRef, useState } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Checkbox, Popover } from 'antd';
import './style.scss';

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

const Message = ({ isBot }: { isBot: boolean }) => (
  <>
    {
      isBot ? (
        <div className="bot-message">
          <MessageAvatar />
          <TextMessage text="Duy thật sự ngốc nghếch" />
        </div>
      ) : (
        <div className="user-message">
          <TextMessage text="Duy thật sự ngốc nghếch" />
        </div>
      )
    }
  </>
);

const DiagnoseResult = ({ result }: { result: number }) => (
  <>
  </>
);

const DiagnoseMessage = ({ submitDiagnose }: { submitDiagnose: any }) => {
  const [commonResult, setCommonResult] = useState<string[]>([]);
  const [lessResult, setLessResult] = useState<string[]>([]);
  const [dangerousResult, setDangerousResult] = useState<string[]>([]);

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
    if (dangerousResult.length && (commonResult.length || lessResult.length)) {
      const message = <TextMessage text="You should verify COVID-19" />;
      submitDiagnose(message);
      // return;
    }

    // if (commonResult.length + )
    // setMessages(messages.concat([]));
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
              <Checkbox.Group options={commonOpts} value={commonResult} onChange={onCommonChange} />
            </div>
            <div className="diagnose-checkbox">
              <div className="diagnose-title">Less Common</div>
              <Checkbox.Group options={lessCommonOpts} value={lessResult} onChange={onLessChange} />
            </div>
            <div className="diagnose-checkbox">
              <div className="diagnose-title">Dangerous</div>
              <Checkbox.Group options={dangerousOpts} value={dangerousResult} onChange={onDangerousChange} />
            </div>
          </>
        )}
        />
      </div>
      <ButtonMessage text="Diagnose" onClick={onClick} />
    </>
  );
};

const ChatBotContent = () => {
  const [start, setStart] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    container?.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const submitDiagnose = (value: any) => {
    setMessages(messages.concat(value));
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
