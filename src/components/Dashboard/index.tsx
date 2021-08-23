import '../../../node_modules/antd/dist/antd.css';
import './style.scss';
import { Table } from 'antd';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { IRootState } from '../../stores/store';
import doctorAction from '../../stores/actions/doctor.action';
import appointmentAction from '../../stores/actions/appointment.action';
import { IAppointment } from '../../types/appointment';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [mounted, setMounted] = useState(false);
  const [listAppointmentToday, setListAppointmentToday] = useState<IAppointment[]>([]);
  const [totalAppointments, setTotalAppointments] = useState(0);

  const { user, doctors } = useSelector(
    (state : IRootState) => ({
      user: state.authentication.user,
      doctors: state.doctor.doctors,
    }),
  );

  const columns = [
    {
      title: "Room's Name",
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: "Partner's Name",
      dataIndex: user?.role === 'doctor' ? 'patientName' : 'doctorName',
      key: 'partnerName',
    },
    {
      title: 'Time open',
      dataIndex: 'startOfAppointment',
      sorter: (a: any, b: any) => (a.startOfAppointment - b.startOfAppointment),
      render: (startOfAppointment: string) => moment(startOfAppointment, 'X').format('DD/MM/YYYY HH:mm'),
    },
    {
      title: 'Time close',
      dataIndex: 'endOfAppointment',
      key: 'endOfAppointment',
      sorter: (a: any, b: any) => (a.endOfAppointment - b.endOfAppointment),
      render: (endOfAppointment: string) => moment(endOfAppointment, 'X').format('DD/MM/YYYY HH:mm'),
    },
  ];

  useEffect(() => {
    dispatch<any>(doctorAction.getDoctors());
    dispatch<any>(appointmentAction.getTotalAppointments()).then((res:any) => setTotalAppointments(res));
    dispatch<any>(appointmentAction.getAppointments())
      .then((res: any) => {
        if (!mounted && res) {
          setListAppointmentToday((res || [])
            .filter((l: IAppointment) => {
              return l.startOfAppointment <= +moment().endOf('day').format('X') && l.startOfAppointment >= +moment().startOf('day').format('X');
            }));
        }
      });

    return () => {
      setMounted(true);
    };
  }, []);

  return (
    <div className="wrap-dashboard">
      <div className="header-top">
        <div className="header-top__h3">Welcome, <span>{user?.name}</span></div>
        <div className="header-top__description">To have a stable psychological health, our PsyCare will give you the best counselling service for you.</div>
      </div>
      <div className="wrap-block">
        <div className="wrap-block__section">
          <div className="bottom-icon">
            <svg
              id="Layer_1"
              height="100%"
              width="100%"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            ><g><path d="m461.814 57.09h-6.859v-14.14c0-8.284-6.716-15-15-15s-15 6.716-15 15v14.14h-43.978v-14.14c0-8.284-6.716-15-15-15s-15 6.716-15 15v14.14h-43.977v-14.14c0-8.284-6.716-15-15-15s-15 6.716-15 15v14.14h-42v-14.14c0-8.284-6.716-15-15-15s-15 6.716-15 15v14.14h-43.978v-14.14c0-8.284-6.716-15-15-15s-15 6.716-15 15v14.14h-43.977v-14.14c0-8.284-6.716-15-15-15s-15 6.716-15 15v14.14h-6.859c-27.673 0-50.186 22.513-50.186 50.185v326.589c0 27.673 22.513 50.186 50.186 50.186h411.628c27.672 0 50.186-22.513 50.186-50.186v-326.589c0-27.672-22.513-50.185-50.186-50.185zm-411.628 30h6.859v14.14c0 8.284 6.716 15 15 15s15-6.716 15-15v-14.14h43.978v14.14c0 8.284 6.716 15 15 15s15-6.716 15-15v-14.14h43.977v14.14c0 8.284 6.716 15 15 15s15-6.716 15-15v-14.14h42v14.14c0 8.284 6.716 15 15 15s15-6.716 15-15v-14.14h43.978v14.14c0 8.284 6.716 15 15 15s15-6.716 15-15v-14.14h43.978v14.14c0 8.284 6.716 15 15 15s15-6.716 15-15v-14.14h6.859c11.13 0 20.186 9.055 20.186 20.186v29.814h-452.001v-29.814c0-11.131 9.055-20.186 20.186-20.186zm411.628 366.96h-411.628c-11.131 0-20.186-9.055-20.186-20.186v-266.774h452v266.774c0 11.131-9.055 20.186-20.186 20.186z" /><path d="m349.203 265.741h-48.266v-48.27c0-8.284-6.716-15-15-15h-59.866c-8.284 0-15 6.716-15 15v48.27h-48.274c-8.284 0-15 6.716-15 15v59.867c0 8.284 6.716 15 15 15h48.274v48.27c0 8.284 6.716 15 15 15h59.866c8.284 0 15-6.716 15-15v-48.27h48.266c8.284 0 15-6.716 15-15v-59.867c0-8.284-6.716-15-15-15zm-15 59.866h-48.266c-8.284 0-15 6.716-15 15v48.27h-29.866v-48.27c0-8.284-6.716-15-15-15h-48.274v-29.867h48.274c8.284 0 15-6.716 15-15v-48.27h29.866v48.27c0 8.284 6.716 15 15 15h48.266z" /></g>
            </svg>
          </div>
          <div className="wrap-block__section--right">
            <div className="section--h2">Appointments</div>
            <div className="bottom-number">{totalAppointments}</div>
          </div>
        </div>
        <div className="wrap-block__section">
          <div className="bottom-icon">
            <svg
              id="Capa_1"
              height="100%"
              viewBox="0 0 512 512"
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
            ><path d="m455.762 344.633-107.143-50.266c10.639-12.983 18.482-28.073 22.921-44.267 20.41-4.58 35.71-22.84 35.71-44.61 0-20.23-13.21-37.44-31.46-43.44v-42.26c0-66.05-53.74-119.79-119.79-119.79s-119.79 53.74-119.79 119.79v42.26c-18.25 6-31.46 23.21-31.46 43.44 0 21.77 15.3 40.03 35.71 44.61 4.438 16.194 12.282 31.285 22.921 44.267l-107.143 50.266c-34.163 16.028-56.238 50.767-56.238 88.503v78.864h512v-78.864c0-37.736-22.075-72.475-56.238-88.503zm-289.552-224.843c0-49.51 40.28-89.79 89.79-89.79s89.79 40.28 89.79 89.79v27.15c-36.23-13.62-51.11-38.3-51.77-39.43l-10.88-19.71-13.98 17.9c-.31.4-29.79 37.18-102.95 53.4zm-31.46 85.7c0-8.67 7.05-15.72 15.72-15.72h15.74c59.55-11.93 95.64-36.69 113.31-52.17 11.77 12.99 33.04 31.06 66.27 40.96v11.21h15.74c8.67 0 15.72 7.05 15.72 15.72s-7.05 15.72-15.72 15.72h-14.91l-2.13 12.47c-7.37 43.2-44.59 74.55-88.49 74.55s-81.12-31.35-88.49-74.55l-2.13-12.47h-14.91c-8.67 0-15.72-7.05-15.72-15.72zm158.949 126.644-37.699 57.881-37.698-57.881c12.071 4.001 24.794 6.096 37.698 6.096s25.627-2.094 37.699-6.096zm-159.366 149.866c-11.028 0-20-8.972-20-20s8.972-20 20-20 20 8.972 20 20-8.972 20-20 20zm-104.333-48.864c0-26.156 15.3-50.234 38.98-61.343l50.354-23.623v66.132c-20.264 6.386-35 25.352-35 47.698 0 7.109 1.501 13.871 4.187 20h-58.521zm150.146 48.864c2.686-6.129 4.187-12.891 4.187-20 0-22.346-14.736-41.312-35-47.698v-80.206l26.382-12.377 80.285 123.265 80.285-123.266 24.381 11.438v60.338c-24.095 5.731-42.075 27.42-42.075 53.244v35.262zm168.445 0v-35.262c0-13.641 11.097-24.738 24.738-24.738h4.674c13.641 0 24.739 11.098 24.739 24.738v35.262zm133.409 0h-49.258v-35.262c0-25.823-17.98-47.513-42.076-53.244v-46.264l52.354 24.561c23.68 11.111 38.98 35.189 38.98 61.345z" />
            </svg>
          </div>
          <div className="wrap-block__section--right">
            <div className="section--h2">Team of Doctors</div>
            <div className="bottom-number">{doctors?.length}</div>
          </div>
        </div>
        <div className="wrap-block__section">
          <div className="bottom-icon">
            <svg
              id="_x31__x2C_5"
              height="100%"
              viewBox="0 0 24 24"
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
            ><circle cx="9" cy="5" fill="#eceff1" r="4.25" /><path d="m.75 20.25v-3.75c0-2.067 1.682-3.75 3.75-3.75h9c2.068 0 3.75 1.683 3.75 3.75v3.75z" fill="#eceff1" /><path d="m9 10c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm0-8.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z" /><path d="m6.5 21h-5.75c-.414 0-.75-.336-.75-.75v-3.5c0-2.619 2.131-4.75 4.75-4.75h8.5c1.295 0 2.544.534 3.425 1.465.285.301.271.775-.029 1.061-.301.283-.776.271-1.061-.029-.599-.633-1.45-.996-2.335-.996h-8.5c-1.792 0-3.25 1.458-3.25 3.25v2.75h5c.414 0 .75.336.75.75s-.336.749-.75.749z" /><path d="m14.5 24c-.269 0-.517-.144-.651-.378l-1.784-3.122h-2.315c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h2.75c.269 0 .518.145.651.378l1.278 2.236 2.39-5.179c.119-.257.373-.426.656-.436.293.013.548.143.683.391l2.787 5.109h2.305c.414 0 .75.336.75.75s-.336.751-.75.751h-2.75c-.274 0-.527-.15-.658-.391l-2.286-4.19-2.375 5.146c-.118.255-.368.423-.648.435-.012 0-.022 0-.033 0z" />
            </svg>
          </div>
          <div className="wrap-block__section--right">
            <div className="section--h2">Patients</div>
            <div className="bottom-number">{(doctors?.length || 0) + 20}</div>
          </div>
        </div>
        <div className="wrap-block__section">
          <div className="bottom-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="100%"
              height="100%"
            ><g id="_22-guarantee" data-name="22-guarantee"><g id="linear_color" data-name="linear color"><path d="M392,292H316V249c0-8.791,0-23.5-7.644-36.562C298.864,196.222,281.249,188,256,188a12,12,0,0,0-12,12v61.6l-21.483,34.91L196,313.831V304a12,12,0,0,0-12-12H104a12,12,0,0,0-12,12V496a12,12,0,0,0,12,12h80a11.978,11.978,0,0,0,10.246-5.778A43.714,43.714,0,0,0,216,508H376a35.973,35.973,0,0,0,30.151-55.635,37.017,37.017,0,0,0,3.314-2.92,35.948,35.948,0,0,0,4.686-45.08,37.017,37.017,0,0,0,3.314-2.92,35.957,35.957,0,0,0,1.35-49.432A36,36,0,0,0,392,292ZM172,484H116V316h56Zm212.5-3.525A11.959,11.959,0,0,1,376,484H216a20.023,20.023,0,0,1-20-20V342.5l43.562-28.448a12.15,12.15,0,0,0,5.262-7.99l21.4-34.768A12,12,0,0,0,268,265V212.9c21.979,3.739,24,18.617,24,36.1v55a12,12,0,0,0,12,12h88a12,12,0,0,1,0,24H368a12,12,0,0,0,0,24h24a12,12,0,0,1,0,24H368a12,12,0,0,0,0,24h16a12,12,0,0,1,0,24H368a12,12,0,0,0,0,24h8a12,12,0,0,1,8.5,20.475Z" /><circle cx="144" cy="465" r="12" /><path d="M207.674,106.421l-7.3,42.551a12,12,0,0,0,17.412,12.649L256,141.532l38.212,20.089c8.372,4.767,19.357-3.2,17.412-12.649l-7.3-42.551L335.24,76.287a12,12,0,0,0-6.65-20.468l-42.723-6.208L266.761,10.9a12,12,0,0,0-21.522,0L226.133,49.611,183.41,55.819a12,12,0,0,0-6.65,20.468Zm28.153-33.967a12,12,0,0,0,9.035-6.564L256,43.322,267.138,65.89a12,12,0,0,0,9.035,6.564l24.9,3.619L283.056,93.639a12,12,0,0,0-3.451,10.621l4.254,24.8-22.275-11.709a12,12,0,0,0-11.168,0l-22.275,11.709,4.254-24.8a12,12,0,0,0-3.451-10.621L210.923,76.073Z" /><path d="M503.034,182.392l-34.539-25.9,1.755-43.137a12,12,0,0,0-18.9-10.3L416.048,127.9l-40.483-15a12,12,0,0,0-15.636,14.787l12.719,41.256-26.774,33.867a12,12,0,0,0,9.232,19.441l43.166.651,23.936,35.93c5.114,8.213,18.516,6.441,21.342-2.773l13.959-40.853,41.567-11.661a12,12,0,0,0,3.958-21.154ZM444.952,193.8a12,12,0,0,0-8.114,7.674L428.7,225.291l-13.952-20.944A12,12,0,0,0,404.943,199l-25.163-.38,15.608-19.741a12,12,0,0,0,2.053-10.978l-7.414-24.048,23.6,8.744a12,12,0,0,0,11.076-1.44l20.58-14.483-1.023,25.145a12,12,0,0,0,4.791,10.088l20.134,15.1Z" /><path d="M156.894,222.252c9.646.168,15.458-12.073,9.232-19.441l-26.774-33.867,12.719-41.256A12,12,0,0,0,136.435,112.9l-40.483,15-35.3-24.845a12,12,0,0,0-18.9,10.3l1.755,43.137-34.539,25.9a12,12,0,0,0,3.958,21.154l41.567,11.661L68.45,256.06c2.826,9.216,16.229,10.984,21.342,2.773l23.936-35.93Zm-59.643-17.9L83.3,225.291l-8.137-23.813a12,12,0,0,0-8.114-7.674l-24.231-6.8,20.134-15.1a12,12,0,0,0,4.791-10.088l-1.023-25.145L87.3,151.158a12,12,0,0,0,11.076,1.44l23.6-8.744L114.559,167.9a12,12,0,0,0,2.053,10.978l15.608,19.741-25.163.38A12,12,0,0,0,97.251,204.347Z" /></g></g>
            </svg>
          </div>
          <div className="wrap-block__section--right">
            <div className="section--h2">Success Rate</div>
            <div className="bottom-number">90%</div>
          </div>
        </div>
      </div>
      <div className="wrap-appointment">
        <div className="wrap-appointment__select">
          <div className="wrap-topHead">
            <div className="apm-title">Appointments Today</div>
            <button className="btn-viewall" onClick={() => history.push('/app/appointment')}>View All Your Appointments</button>
          </div>
          <Table columns={columns} dataSource={listAppointmentToday} rowKey="_id" />
        </div>
        <div className="wrap-appointment__topDoctors">
          <div className="topDoctors-title">
            <div className="topDoctors-title__top">Top 3 Doctors</div>
            <div className="topDoctors-title__description">List of top 3 best doctors in PsyCare</div>
          </div>

          <div className="list-top">
            {
              (doctors || []).slice(0, 3).map((doctor: any, index: any) => {
                return (
                  <div className="list-top__item" key={index}>
                    <div className="list-top__item--name">
                      {doctor.name}
                    </div>
                    <div className="list-top__item--rate">
                    ⭐️5
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
