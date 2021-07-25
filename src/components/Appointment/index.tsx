import React, { useState } from 'react';

interface Props {}

const Appointment: React.FC = (_props : Props) => {
  const [state, setState] = useState('aa');
  return (
    <div>
      <p>{`${state}`}</p>
      <p>Hoang Long Pham, </p>
    </div>
  );
};

export default Appointment;
