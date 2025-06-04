import React, { useState } from "react";
import "./Css/ChangePassword.css";
import { useNavigate } from "react-router-dom";
const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
const navigate = useNavigate();
  const handleChangePassword = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");

    if (!storedUser || !storedUser.password) {
      alert("No user found or password not set");
      return;
    }

    if (storedUser.password !== currentPassword) {
      alert("Current password is incorrect");
      return;
    }

    if (!newPassword || !confirmPassword) {
      alert("New password and confirm password cannot be empty");
      return;
    }

    if (newPassword.length < 6 || confirmPassword.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match");
      return;
    }

    // Save new password
    storedUser.password = newPassword;
    localStorage.setItem("user", JSON.stringify(storedUser));
    alert("Password changed successfully");

    // Reset fields
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="change-password-container">
      <h2>Change Password</h2>
      <form className="change-password-form" onSubmit={handleChangePassword}>
        <input
          type="password"
          placeholder="Current Password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={{
            border: confirmPassword
              ? newPassword === confirmPassword
                ? "2px solid green"
                : "2px solid red"
              : "1px solid #ccc",
          }}
        />
        
      <button
        type="submit"
        onClick={()=>navigate('/settings')}
        style={{ padding: "10px", backgroundColor: "#4CAF50", color: "white" }}
      >
        Save New Password
      </button>
      </form>

      {confirmPassword && newPassword !== confirmPassword && (
        <p style={{ color: "red", fontSize: "14px" }}>Passwords do not match</p>
      )}

      {confirmPassword && newPassword === confirmPassword && (
        <p style={{ color: "green", fontSize: "14px" }}>Passwords match</p>
      )}

    </div>
  );
};

export default ChangePassword;
