/* eslint-disable max-len */
import React, { useState } from 'react';
import './style.scss';
import { Rate, Input, Button } from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const { TextArea } = Input;

const Feedback: React.FC = () => {
  const [state, setState] = useState({ value: 0 });
  const handleChange = (value: any) => setState({ value });

  const { value } = state;

  return (
    <div className="wrap-feedback">
      <div className="banner-feedback">
        <div className="banner-feedback__h2">Feedback Form</div>
        <div className="banner-feedback__description">Give your honest opinion of what you think</div>
      </div>
      <div className="feedback-form">
        <div className="feedback-title">How satisfied are you overall with the support of your team Doctor's Psycare ?</div>
        <Rate tooltips={desc} onChange={handleChange} value={value} style={{ fontSize: '30px' }} />
        <div className="feedback-text">
          <TextArea
            className="feedback-text-area"
            placeholder="Please tell us your reasons for giving this score status here..."
            rows={5}
          />
        </div>

        <Button className="btn-feedback">
          Send Feedback
        </Button>
      </div>
    </div>
  );
};

export default Feedback;
