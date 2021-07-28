import { ChangeEvent, useState } from 'react';
import {
  Row, Button, Col, Menu, Dropdown, Input, Comment, Avatar, Tooltip, List, Form,
} from 'antd';
import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import moment from 'moment';
import './style.scss';
import reply from '../../assets/reply.svg';

const { TextArea } = Input;

const menu = (
  <Menu>
    <Menu.Item key="1">Option1</Menu.Item>
    <Menu.Item key="2">Option2</Menu.Item>
    <Menu.Item key="3">Option3</Menu.Item>
  </Menu>
);

// const hideReply = {};

const actions = [
  <span className="reply" key="comment-basic-reply-to">
    <img className="reply-image" src={reply} alt="reply" />
    <span>Reply</span>
  </span>,
];

const CommentList = ({ comments }: { comments: any }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={(props) => <Comment content {...props} />}
  />
);

const Editor = ({
  onChange, onSubmit, submitting, value,
}: { onChange: any, onSubmit: any, submitting: any, value: any }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </>
);

function QuestionAnswer() {
  const [state, setState] = useState({
    comments: [{}],
    submitting: false,
    value: '',
  });

  const handleSubmit = () => {
    if (!state.value) {
      return;
    }
    setState({
      ...state,
      submitting: true,

    });
    setTimeout(() => {
      setState({
        submitting: false,
        value: '',
        comments: [
          ...state.comments,
          {
            author: 'Dat Le',
            avatar: 'https://img.hoidap247.com/picture/question/20200508/large_1588936738888.jpg',
            content: <p>{state.value}</p>,
            datetime: moment().fromNow(),
          },
        ],
      });
    }, 1000);
  };

  const handleChange = (e: ChangeEvent<any>) => {
    setState({
      ...state,
      value: e.target.value,
    });
  };

  const { comments, submitting, value } = state;

  return (
    <>
      <div className="question-form">
        <Row justify="space-between">
          <Col span={8} xs={24} sm={12}>
            <h2>Question and Answer</h2>
          </Col>
          <Col span={8} xs={24} sm={12}>
            <Dropdown overlay={menu} trigger={['click']}>
              <Button className="drop-menu">
                Filter
                <DownOutlined />
              </Button>
            </Dropdown>
          </Col>
        </Row>
        <Row className="question-input" justify="space-between">
          <Input
            style={{ width: '96%', borderRadius: '8px' }}
            placeholder="Add a new post"
          />
          <Button>
            <PlusOutlined />
          </Button>

        </Row>
        <div className="comment">
          <Comment
            actions={actions}
            author={<a href="/#">Ngo Hoang The Duy</a>}
            avatar={(
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="avt"
              />
            )}
            content={(
              <p>
                Hi Doctors,
                <p>
                  I have a few problems that need to be resolved by the doctors.
                  &nbsp;Lately I've been having trouble sleeping.
                  I can't sleep well, wake up in the middle of the night
                  :&nbsp;and during work or lose focus. I would like to seek
                  advice from a doctor.
                </p>
              </p>
            )}
            datetime={(
              <p>
                <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                  {moment().fromNow()}
                </Tooltip>
              </p>
            )}
          >
            {comments.length > 0 && <CommentList comments={comments} />}
            <Comment
              avatar={(
                <Avatar src="https://img.hoidap247.com/picture/question/20200508/large_1588936738888.jpg" />
              )}
              content={(
                <Editor
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                  submitting={submitting}
                  value={value}
                />
              )}
            />
          </Comment>
        </div>
      </div>
    </>
  );
}

export default QuestionAnswer;
