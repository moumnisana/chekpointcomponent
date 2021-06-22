import React from "react";
import { Card } from "react-bootstrap";
import profilPhoto from "../../image/profilPhoto.jpg";
const ProfilePhoto = () => {
  return <Card.Img   variant="top" src={profilPhoto} style={{ borderRadius: "4px" }}/>
  
};
export default ProfilePhoto;