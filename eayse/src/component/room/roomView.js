import React, { Component } from "react";
import { Row, Col, Button,Icon } from "antd";
import { CheckComp } from "../check/checkComp";
// import WrappedNormalLoginForm from "./login";

export class RoomView extends Component {
  render() {
    return (
      <Row
        type="flex"
        justify="center"
        className=""
        style={{
          height: "100vh",
          backgroundColor: "black"
        }}
      >
        <Col
          className="check-list-ey"
          xs={{ span: 6, offset: 1 }}
          sm={{ span: 6, offset: 1 }}
          mg={{ span: 6, offset: 1 }}
          lg={{ span: 6, offset: 1 }}
          xl={{ span: 6, offset: 1 }}
        >
          <h2>Abnahmeprotokoll Schimmelschaden <span style={{
              float: 'right'
          }}><Icon type="shrink" /></span></h2>
          <h4>
            Postillonstraße 17
            <br />
            80637 München
          </h4>
          <div
          style={{
              maxHeight : "50vh",
              overflowY : "scroll"
          }}
          >
          <CheckComp/>
          <CheckComp/>
          <CheckComp/>
          <CheckComp/>
          </div>
          <Button className="btn-check-ey">Bestätigen & Abschließen</Button>
        </Col>
        <Col
          className=""
          xs={{ span: 6, offset: 1 }}
          sm={{ span: 6, offset: 1 }}
          mg={{ span: 6, offset: 1 }}
          lg={{ span: 6, offset: 1 }}
          xl={{ span: 6, offset: 1 }}
        />
        <Col
          className="login-sub-ey"
          xs={{ span: 7, offset: 0 }}
          sm={{ span: 7, offset: 0 }}
          mg={{ span: 7, offset: 0 }}
          lg={{ span: 7, offset: 0 }}
          xl={{ span: 7, offset: 0 }}
        >
          {/* <WrappedNormalLoginForm /> */}
          <h4
            style={{
              textAlign: "right",
              paddingTop: "5rem"
            }}
          >
            B&O Gruppe
          </h4>
          <h4
            style={{
              textAlign: "right"
            }}
          >
            Powered By Eayse
          </h4>
        </Col>
      </Row>
    );
  }
}
