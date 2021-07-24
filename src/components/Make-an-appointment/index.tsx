/* eslint-disable max-len */
import './style.scss';
import {
  Row, Button, Select, Avatar,
} from 'antd';
import { VideoCameraOutlined } from '@ant-design/icons';

const { Option } = Select;

const MakeAnAppoinment = () => (
  <div className="make-an-appointment">
    <Row>
      <div className="appointment-right">
        <h1>Make An Appointment</h1>
        <Row>
          <div className="drop-down">
            <h3>Specialty</h3>
            <Select
              className="select"
              defaultValue="Depression"
            >
              <Option value="1">Depression</Option>
              <Option value="2">Option2</Option>
              <Option value="3">Option3</Option>
            </Select>
          </div>
          <div className="drop-down">
            <h3>Doctor</h3>
            <Select
              className="select"
              defaultValue="Dr. Henry Kiese "
            >
              <Option value="1">Dr. Henry Kiese </Option>
              <Option value="2">Dr. Maria Anna</Option>
              <Option value="3">Dr. Henry Kiese</Option>
            </Select>
          </div>
          <div className="drop-down">
            <h3>Gender</h3>
            <Select
              className="select"
              defaultValue="Male"
            >
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </div>
        </Row>

        <div className="doctor-schedule">
          <Row>
            <div className="doctor-details">
              <Row>
                <div className="avt-doctor">
                  <Avatar
                    size={{
                      xs: 30, sm: 62, md: 75, lg: 95, xl: 110, xxl: 130,
                    }}
                    src="https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
                  />
                </div>
                <div className="doctor-content">
                  <h2>Dr. Maria Anna</h2>
                  <p>Over 15 years of intensive work experience in the field of psychology, mental health</p>
                </div>
              </Row>
              <Button>View details</Button>
            </div>

            <div className="schedule">
              <Select
                className="select-day"
                defaultValue="Webnesday - 26/5"
              >
                <Option value="thursday">Thursday - 27/5</Option>
                <Option value="friday">Friday - 28/5</Option>
                <Option value="saturday">Saturday - 29/5</Option>
              </Select>
              <h3>CONSULTATION SCHEDULE</h3>
              <div className="btn-schedule">
                <Row>
                  <Button>
                    <VideoCameraOutlined />
                    08:00 - 09:00 am
                  </Button>
                  <Button>
                    <VideoCameraOutlined />
                    09:30 - 10:30 am
                  </Button>
                </Row>
                <Row>
                  <Button>
                    <VideoCameraOutlined />
                    02:00 - 03:00 pm
                  </Button>
                  <Button>
                    <VideoCameraOutlined />
                    03:30 - 04:30 pm
                  </Button>
                </Row>
              </div>
              <h3>CONSULTING PRICE : 50$</h3>
              <p>Costs Incurred     :5$</p>
            </div>
          </Row>
        </div>

        <div className="doctor-schedule">
          <Row>
            <div className="doctor-details">
              <Row>
                <div className="avt-doctor">
                  <Avatar
                    size={{
                      xs: 30, sm: 62, md: 75, lg: 95, xl: 110, xxl: 130,
                    }}
                    src="https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg"
                  />
                </div>
                <div className="doctor-content">
                  <h2>Dr. Henry</h2>
                  <p>Over 15 years of intensive work experience in the field of psychology, mental health</p>
                </div>
              </Row>
              <Button>View details</Button>
            </div>

            <div className="schedule">
              <Select
                className="select-day"
                defaultValue="Webnesday - 26/5"
              >
                <Option value="thursday">Thursday - 27/5</Option>
                <Option value="friday">Friday - 28/5</Option>
                <Option value="saturday">Saturday - 29/5</Option>
              </Select>
              <h3>CONSULTATION SCHEDULE</h3>
              <div className="btn-schedule">
                <Row>
                  <Button>
                    <VideoCameraOutlined />
                    08:00 - 09:00 am
                  </Button>
                  <Button>
                    <VideoCameraOutlined />
                    09:30 - 10:30 am
                  </Button>
                </Row>
                <Row>
                  <Button>
                    <VideoCameraOutlined />
                    02:00 - 03:00 pm
                  </Button>
                  <Button>
                    <VideoCameraOutlined />
                    03:30 - 04:30 pm
                  </Button>
                </Row>
              </div>
              <h3>CONSULTING PRICE : 50$</h3>
              <p>Costs Incurred     :5$</p>
            </div>
          </Row>
        </div>

        <div className="doctor-schedule">
          <Row>
            <div className="doctor-details">
              <Row>
                <div className="avt-doctor">
                  <Avatar
                    size={{
                      xs: 30, sm: 62, md: 75, lg: 95, xl: 110, xxl: 130,
                    }}
                    src="https://myteledoc.app/wp-content/uploads/2020/09/happy-young-female-doctor-smiling-and-looking-at-c-WDEKYYG.jpg"
                  />
                </div>
                <div className="doctor-content">
                  <h2>Dr. Akali</h2>
                  <p>Over 15 years of intensive work experience in the field of psychology, mental health</p>
                </div>
              </Row>
              <Button>View details</Button>
            </div>
            <div className="schedule">
              <Select
                className="select-day"
                defaultValue="Webnesday - 26/5"
              >
                <Option value="thursday">Thursday - 27/5</Option>
                <Option value="friday">Friday - 28/5</Option>
                <Option value="saturday">Saturday - 29/5</Option>
              </Select>
              <h3>CONSULTATION SCHEDULE</h3>
              <div className="btn-schedule">
                <Row>
                  <Button>
                    <VideoCameraOutlined />
                    08:00 - 09:00 am
                  </Button>
                  <Button>
                    <VideoCameraOutlined />
                    09:30 - 10:30 am
                  </Button>
                </Row>
                <Row>
                  <Button>
                    <VideoCameraOutlined />
                    02:00 - 03:00 pm
                  </Button>
                  <Button>
                    <VideoCameraOutlined />
                    03:30 - 04:30 pm
                  </Button>
                </Row>
              </div>
              <h3>CONSULTING PRICE : 50$</h3>
              <p>Costs Incurred     :5$</p>
            </div>
          </Row>
        </div>
      </div>

      <div className="peak-time">
        <h1>Peak Time</h1>
      </div>
    </Row>
  </div>
);
export default MakeAnAppoinment;
