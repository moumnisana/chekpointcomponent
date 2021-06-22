import logo from './logo.svg';
import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card , Button} from "react-bootstrap";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";


function App() {
  return (
    <div className=" d-flex justify-content-center"
    style={{ marginTop: "150px" }}>
      <Card className="card" /*style={{ width: "300px", borderRadius: "4px" }} className="shadow"*/>
        <ProfilePhoto className='image'/>
        <FullName className='title'/>
        <Address />
        <Button className='butt'variant="primary">Go somewhere</Button>
      </Card>
      
    </div>
  );
}

export default App;
