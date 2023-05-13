import React from "react";
import services from "../services";
import Card from "./Card";
import Button from "./Button";

export default function App() {
  return (
    <div>
      <h4 className="collaborate m-5">Let's Collaborate</h4>
      {services.map((service)=>(
        <Card key={service.id} h2={service.h2} h3={service.h3} src={service.src} p={service.p}/>
      ))}
      <Button />
    </div>
  );
}
