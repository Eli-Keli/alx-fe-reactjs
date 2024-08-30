import { Route, Routes, Link } from "react-router-dom";

const ProfileDetails = () => <h2>Profile Details</h2>;
const ProfileSettings = () => <h2>Profile Settings</h2>;

const Profile = () => {
    return (
        <div>
            <h1 style={{
                fontWeight: "bold",
                textDecoration: "none",
                color: "white",
                padding: "10px",
                backgroundColor: "black"
            }}>Profile</h1>
            <nav style={{
                display: "flex",
                gap: "10px",
                justifyContent: "space-around"
            }}>
                <ul style={{
                    listStyleType: "none",
                    padding: "0",
                    display: "flex"
                }}>
                    <li style={{
                        fontWeight: "bold",
                        textDecoration: "none",
                        marginRight: "20px"
                    }}>
                        <Link to="">Details</Link>
                    </li>
                    <li>
                        <Link to="settings">Settings</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="" element={<ProfileDetails />} />
                <Route path="settings" element={<ProfileSettings />} />
            </Routes>
        </div>
    );
};

export default Profile;