import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CustomInput from "../../components/customSelectDropdown";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);
  const [loading, setLoading] = useState(false);

  if(!user) {
    navigate(`/login?message=You are not permited to visit the 'Profile' page until you are logged in!`);
  }

  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    setProfileData({
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      email: user?.email || "",
      phone: user?.phone || "",
    });
  }, [user]);

  const handleProfileChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const isValidEmail = /\S+@\S+\.\S+/.test(profileData.email);
  const isValidPhone = /^\d{10,15}$/.test(profileData.phone);


  const isProfileFormValid = profileData.firstName && profileData.lastName && isValidEmail && isValidPhone;
  const isPasswordFormValid = passwordData.oldPassword && passwordData.newPassword && passwordData.confirmPassword && passwordData.newPassword === passwordData.confirmPassword;

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log("Updating Profile:", profileData);
    } catch (error) {
      console.error("Profile update failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (!isPasswordFormValid) {
      alert("Please fill all fields correctly.");
      return;
    }
    console.log("Changing Password:", passwordData);
  };

  return (
    <section className="page-content">
      <div className="container">
        <div className="shop-page">
          <div className="row">
            {/* Profile Update Form */}
            <div className="col-lg-9">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Bio-Data</h5>
                </div>
                <div className="card-body card-body-height">
                  <form onSubmit={handleProfileSubmit}>
                    <CustomInput label="First Name" id="firstName" type="text" name="firstName" value={profileData.firstName} onChange={handleProfileChange} />
                    <CustomInput label="Last Name" id="lastName" type="text" name="lastName" value={profileData.lastName} onChange={handleProfileChange} />
                    <CustomInput label="Email Address" id="email" type="email" name="email" value={profileData.email} onChange={handleProfileChange} />
                    <CustomInput label="Phone Number" id="phone" type="tel" name="phone" value={profileData.phone} onChange={handleProfileChange} />

                    <button type="submit" className="btn lnk-default w-100 mt-3" disabled={!isProfileFormValid || loading}>
                      {loading ? "Updating Profile..." : "Update Profile"}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Change Password Form */}
            <div className="col-lg-3">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Change Password</h5>
                </div>
                <div className="card-body card-body-height">
                  <form onSubmit={handlePasswordSubmit}>
                    <CustomInput label="Old Password" id="oldPassword" type="password" name="oldPassword" value={passwordData.oldPassword} onChange={handlePasswordChange} />
                    <CustomInput label="New Password" id="newPassword" type="password" name="newPassword" value={passwordData.newPassword} onChange={handlePasswordChange} />
                    <CustomInput label="Confirm Password" id="confirmPassword" type="password" name="confirmPassword" value={passwordData.confirmPassword} onChange={handlePasswordChange} />

                    <button type="submit" className="btn lnk-default w-100 mt-3" disabled={!isPasswordFormValid || loading}>
                      {loading ? "Changing Password..." : "Change Password"}
                    </button>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
