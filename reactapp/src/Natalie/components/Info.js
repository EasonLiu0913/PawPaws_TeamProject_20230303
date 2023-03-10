import React from "react";
import styled from "styled-components";

function Info() {
  return (
    <Infocard>
      <Infoheader>
        <h3>活動資訊</h3>
      </Infoheader>
      <Infomation>
        <h5>台南寵物展｜台南成大寵物展</h5>
        <p>2021-01-22(五)~2021-01-25(一)</p>
        <p>成功大學中正堂體育館（台南市東區大學路1號）</p>
        <Btn>我要報名</Btn>
        <Btn>我要收藏</Btn>
      </Infomation>
    </Infocard>
  );
}
const Infocard = styled.div`
  min-width: 30%;
  height: fit-content;
  border-radius: 1rem;
  margin: 1rem;
  background: #fff;
`;
const Infoheader = styled.div`
  padding: 1rem;
  border-radius: 1rem 1rem 0 0;
  height: 15%;
  width: 100%;
  background: #8dd9ce;
  h3 {
    font-weight: 600;
    color: #fff;
    align-items: center;
  }
`;
const Infomation = styled.div`
  padding: 1rem;
  text-align: center;
  p {
    margin: 0;
  }
`;
const Btn = styled.div`
  padding: 1rem;
  margin: 1rem;
  border: 5px #8dd9ce;
  border-radius: 15px;
  background-color: #8dd9ce;
  font-weight: 600;
  color: #fff;
  text-align: center;
`;
export default Info;
