import React,{ Component } from "react";
import { Row, Col } from "antd";
import WrappedNormalLoginForm from "./login";

export class LoginView extends Component {
  render() {
    return (
      <Row type="flex" justify="center" className='login-ey' style={{
        height : '100vh'
      }}>
        <Col
        className="login-p1-ey"
          xs={{ span: 12, offset: 2 }}
          sm={{ span: 12, offset: 2 }}
          mg={{ span: 12, offset: 2 }}
          lg={{ span: 12, offset: 2 }}
          xl={{ span: 12, offset: 2 }}
        >
          <h1>Treten Sie dem Termin <br/>zur Abnahme bei</h1>
          <h4>
            Eingeladen von: Herr Kastner
            <br />
            Thema: Schimmelschaden
            <br />
            Straße: Postillonstraße 17
            <br />
            PLZ & Ort: 80637 München
          </h4>
        </Col>
        <Col
        className='login-sub-ey'
          xs={{ span: 7, offset: 0 }}
          sm={{ span: 7, offset: 0 }}
          mg={{ span: 7, offset: 0 }}
          lg={{ span: 7, offset: 0 }}
          xl={{ span: 7, offset: 0 }}
        >
          <WrappedNormalLoginForm />
          <h4 style={{
            textAlign : "right",
            paddingTop : '5rem'
          }}>B&O Gruppe</h4>
          <h4 style={{
            textAlign : "right"
          }}>Powered By Eayse</h4>
        </Col>
      </Row>
    );
  }
}
