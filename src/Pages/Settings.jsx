import React, { useState, useEffect, useContext } from "react";
import "./Css/Settings.css";
import { AuthContext } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Settings = () => {
  const { username, setUsername, userPhoto, setUserPhoto } =
    useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [photoPreview, setPhotoPreview] = useState(userPhoto);
  const [about, setAbout] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("user"));
    if (storedData) {
      setEmail(storedData.email || "");
      const nameparts = storedData.displayName.split(" ");

      setFirstname(nameparts[0] || "");
      setLastname(nameparts[1] || "");
      setAbout(storedData.about || "");
    }
    if(storedData.photoUrl){
      setPhotoPreview(storedData.photoUrl);
      setUserPhoto(storedData.photoUrl)
    }
  }, []);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setPhotoPreview(previewURL);
      setUserPhoto(previewURL);
    }
    const storedUser= JSON.parse(localStorage.getItem("user")||{});
    storedUser.photoUrl =photoPreview;
    localStorage.setItem('user' ,JSON.stringify(storedUser))
  };
 

  const handleSaveChanges = () => {
    const fullname = `${firstname} ${lastname}`;
    setUsername(fullname);
    const updatedUser = {
      ...JSON.parse(localStorage.getItem("user")),
      displayName: fullname,
      photoUrl: photoPreview,
      about: about,
    };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    navigate('/');
  
  };

  return (
    <div className="settings-page">
      <div className="profile-icon-top">
        <div className="profile-icon-main">
          <div className="avatar-wrapper">

          {userPhoto ? (
            <img src={photoPreview} alt="User Avatar" className="avatar" />
          ) : (
            username.charAt(0).toUpperCase()
          )}
          </div>
        </div>
       <input
  type="file"
  id="upload-photo"
  accept="image/*"
  style={{ display: 'none' }}
  onChange={handlePhotoChange}
/>

<label htmlFor="upload-photo" className="change-photo-btn">
  Change Image
</label>



      </div>
      <div className="settings-form">
        <div className="settings-form-name">
          <label>
            First name
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </label>
          <label>
            Last name
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </label>
        </div>
        <div className="settings-form-email">
          <label>
            Email
            <input
              style={{ width: "77%" }}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled
            />
          </label>
        </div>

        <label>Password</label>
        <Link to={"/changePassword"}>
          <button
            className="change-password-btn"
            style={{ marginRight: "380px" }}
          >
            Change Password
          </button>
        </Link>
        <label style={{ marginTop: "10px" }}>
          About you
          <p style={{ fontSize: "15px", color: "#777" }}>short bio</p>
          <textarea style={{ width: "70%", height: "50px" }} value={about}>
            {(e) => setAbout(e.target.value)}
          </textarea>
        </label>
        <button
          style={{ width: "30%" }}
          onClick={handleSaveChanges}
          className="save-btn"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;
