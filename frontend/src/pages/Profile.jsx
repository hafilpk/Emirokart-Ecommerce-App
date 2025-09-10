import { useEffect, useState } from "react";
import API from "../services/api";
import { Card, Spinner, Alert } from "react-bootstrap";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    API.get("/accounts/profile/")
      .then((res) => setProfile(res.data))
      .catch(() => setError("You must be logged in to view this page."));
  }, []);

  if (error) return <Alert variant="danger">{error}</Alert>;
  if (!profile) return <Spinner animation="border" />;

  return (
    <Card className="p-4 mx-auto" style={{ maxWidth: "500px" }}>
      <h2 className="text-center mb-4">Profile</h2>
      <p><strong>Username:</strong> {profile.username}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Phone:</strong> {profile.phone || "N/A"}</p>
      <p><strong>Address:</strong> {profile.address || "N/A"}</p>
    </Card>
  );
}
