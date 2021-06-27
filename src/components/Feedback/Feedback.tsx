import { useState } from 'react';
import './Feedback.scss';
import { Rate, Input, Button } from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const {TextArea} = Input;

function Feedback() {
  const [state, setState] = useState({ value: 0 });
  const handleChange = (value: any) => setState({ value });

  const { value } = state;

  return (
    <div className="feedback-form">
      <h2>How satisfied are you overall with the support of your team Doctor's Psycare ?</h2>
      <Rate tooltips={desc} onChange={handleChange} value={value} style={{fontSize :'30px'}} />
      <div className="feedback-text">
        <TextArea className="feedback-text-area" placeholder="Please tell us your reasons for giving this score status here..." rows={5} />
      </div>

      <Button className="btn-feedback">
          Send Feedback
      </Button>
    </div>
  );
}

export default Feedback;
