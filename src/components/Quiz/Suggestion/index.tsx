/* eslint-disable react/destructuring-assignment */
import { InfoCircleTwoTone, VideoCameraTwoTone } from '@ant-design/icons';
import { Card, Col, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import quizService from '../../../services/quiz.service';
import './style.scss';

const Doctor = (
  doctor: any,
  loadingApi: any,
  history: any,
) => (
  <Col key={doctor._id} span={8} xs={24} sm={12} xl={8} lg={12}>
    <Card
      loading={loadingApi}
      cover={<img alt="example" src={doctor.avatar || 'doctorPsy.png'} height="300" />}
      actions={[
        <VideoCameraTwoTone
          className="icon-suggestion"
          onClick={() => history.push('/app/doctor')}
          width="10px"
        />,
        <InfoCircleTwoTone
          className="icon-suggestion"
          onClick={() => history.push({
            pathname: `/app/doctor/${doctor._id}/profile`,
            state: { doctor },
          })}
        />,
      ]}
    >
      <Meta
        title={doctor.name.toUpperCase() || 'Doctor'}
        description={doctor.major?.toUpperCase() || 'PSYCHOLOGY'}
      />
    </Card>
  </Col>
);

const SuggestionPage = () => {
  const quizResult = useSelector((state: any) => state.quiz.quizzesScore);
  const [doctors, setDoctors] = useState([]);
  const [loadingApi, setLoadingApi] = useState(true);
  const history = useHistory();

  useEffect(() => {
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
        <div className="banner-suggestion">
          <div className="banner-suggestion__h2">Suggestion From Doctor's PsyCare</div>
          <div className="banner-suggestion__description">Please choose one of the doctors below to make an appointment and give the most useful advice.</div>
        </div>
        <Row gutter={[16, 16]}>
          {doctors.map((doctor) => Doctor(doctor, loadingApi, history))}
        </Row>
      </div>
    </>
  );
};

export default SuggestionPage;
