import React from 'react';
import { useParams } from 'react-router-dom';

interface Props {}

const DoctorDetail: React.FC<Props> = () => {
  const doctorId = useParams<{ doctorId: string }>();

  return (
    <div>
      <h1>Doctor Detail</h1>
    </div>
  );
};

export default DoctorDetail;
