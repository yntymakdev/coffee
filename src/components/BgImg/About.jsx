import React from "react";
import cofe from "../../image/coffee_header.jpg";
const About = () => {
  return (
    <div>
      <h1>ABOUT US</h1>
      <br />
      <br />

      <div className="box2">
        <div style={{ display: "flex", alignItems: "center" }} className="box">
          <img
            style={{
              width: "650px",
              //   marginLeft: "-760px",
              borderRadius: "10px",
              height: "550px",
            }}
            src={cofe}
            alt=""
          />
          <div className="text">
            <h1 style={{ padding: "2pc 0" }}>
              Похоже, вы столкнулись с проблемой при попытке создать проект с
              именем «coffee_project», поскольку каталог с таким именем уже
              существует и не пуст. <br /> <br />
              Если вы пытаетесь создать новый проект с таким именем, у вас есть
              несколько вариантов: Выберите другое имя для своего проекта. тся
              вам правильным?
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
