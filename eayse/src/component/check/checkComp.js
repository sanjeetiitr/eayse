import React, { Component } from "react";
import { Row, Col, Button, Icon,Badge } from "antd";

export class CheckComp extends Component {
  render() {
    return (
      <Row>
        <Col
          className="check-ind-ey"
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 24, offset: 0 }}
          mg={{ span: 24, offset: 0 }}
          lg={{ span: 24, offset: 0 }}
          xl={{ span: 24, offset: 0 }}
        >
          <h4>Sichtbarer Schimmel</h4>
          <h6>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Cras mattis
            consectetur purus sit amet fermentum.
          </h6>
          <div className="act-btn-ey">
          <span>
            {/* <Col
            className=''
          xs={{ span: 3, offset: 0 }}
          sm={{ span: 3, offset: 0 }}
          mg={{ span: 3, offset: 0 }}
          lg={{ span: 3, offset: 0 }}
          xl={{ span: 3, offset: 0 }}
        >    */}
            <Button type="primary" shape="circle" icon="cross"  style={{
                marginRight : "1rem"
            }}/>
            {/* </Col>
        <Col
          xs={{ span: 3, offset: 0 }}
          sm={{ span: 3, offset: 0 }}
          mg={{ span: 3, offset: 0 }}
          lg={{ span: 3, offset: 0 }}
          xl={{ span: 3, offset: 0 }}
        >    */}
            <Button type="primary" shape="circle" icon="check" />
            {/* </Col> */}

          </span>
          <Badge count={4} style={{
              float : "right !important"
          }}>
                <Icon type="message" theme="filled" style={{
                    fontSize : "1.5rem",
                }}/>
            </Badge>
          </div>
        </Col>
      </Row>
    );
  }
}
