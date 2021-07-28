/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { IUser } from '../../../types/user';
import './style.scss';

interface Props {
  user: IUser | undefined;
}

const ProfileUser: React.FC<Props> = () => {
  return (
    <div className="wrap-content">
      {/* root */}
      <div className="root" />
      <div className="headerProfile">
        <div className="headerProfile__banner" />
        <div className="headerProfile__info">
          <div className="info info__image">
            <div className="info__image--transform" />
          </div>
          <div className="info infoName">
            <div className="info__title">John Edison</div>
            <div className="infoName__editButton">Edit Profile</div>
          </div>
          <div className="info infoEmail">
            <div className="info__title">Email</div>
            <div className="infoEmail__text">theduy83434@gmail.com</div>
          </div>
          <div className="info infoPhone">
            <div className="info__title">Phone Number</div>
            <div className="infoPhone__text">0963 483 959</div>
          </div>
        </div>
      </div>
      <div className="container">
        <form>
          <div className="container__title">
            <div className="container__title--text">Personal Information</div>
            <div className="container__title--btn">
              <button className="btn-edit">Icon Edit</button>
            </div>
          </div>
          <div className="form-item">
            <div className="divide divide-left">
              <div className="image-profile" />
              <button className="divide-left__edit">edit</button>
            </div>
            <div className="divide divide-right">
              <div className="form-item__sub">
                <label htmlFor="">First Name:</label>
                <input type="text" name="" id="" />
              </div>
              <div className="form-item__sub">
                <label htmlFor="">Last Name:</label>
                <input type="text" name="" id="" />
              </div>
              <div className="form-item__sub">
                <label htmlFor="">Age: </label>
                <input type="text" name="" id="" />
              </div>
              <div className="form-item__sub">
                <label htmlFor="">Job:</label>
                <input type="text" name="" id="" />
              </div>
              <div className="form-item__sub">
                <label htmlFor="">Gender:</label>
                <input type="text" name="" id="" />
              </div>
            </div>
          </div>

          <div className="container__title">
            <div className="container__title--text">Contact Detail</div>
            <div className="container__title--btn" />
          </div>
          <div className="form-item">
            <div className="divide divide-left" />
            <div className="divide divide-right">
              <div className="form-item__sub">
                <label htmlFor="">Email:</label>
                <input type="text" name="" id="" />
              </div>
              <div className="form-item__sub">
                <label htmlFor="">Phone Number:</label>
                <input type="text" name="" id="" />
              </div>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ProfileUser;
