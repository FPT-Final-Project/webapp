import { InfoCircleTwoTone, VideoCameraTwoTone } from '@ant-design/icons';
import { Card, Col, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import quizService from '../../../services/quiz.service';
import './style.scss';

const Doctor = ({ name, major, avatar }: {name: any, major: any, avatar: string}, loadingApi: any, history: any) => {
  return (
    <Col span={8} xs={24} sm={12} xl={8} lg={12}>
      <Card loading={loadingApi} cover={<img alt="example" src={avatar || 'doctorPsy.png'} height="300" />} actions={[<VideoCameraTwoTone onClick={() => history.push('/app/dashboard')} width="10px" />, <InfoCircleTwoTone />]}>
        <Meta
          title={name.toUpperCase() || 'Doctor'}
          description={major?.toUpperCase() || 'PSYCHOLOGY'}
        />
      </Card>
    </Col>
  );
};
const SuggestionPage = () => {
  const quizResult = useSelector((state: any) => state.quiz.quizzesScore);
  const [doctors, setDoctors] = useState([]);
  const [loadingApi, setLoadingApi] = useState(true);
  const history = useHistory();
  useEffect(() => {
    // eslint-disable-next-line consistent-return
    const recommendDoctorApi = async () => {
      try {
        const data: any = await quizService.recommendDoctor(quizResult);
        if (data.length) {
          setDoctors(data);
          setLoadingApi(false);
        }
      } catch (error) {
        setLoadingApi(true);
      }
    };
    recommendDoctorApi();
  }, []);
  return (
    <>
      <div className="suggestion-form">
        <Row gutter={[16, 16]}>
          {doctors.map((doctor) => Doctor(doctor, loadingApi, history))}
        </Row>
      </div>
    </>
  );
};

export default SuggestionPage;
