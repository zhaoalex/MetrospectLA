import React, { Component } from "react";
import { Grid, Row, Col, Carousel, Image } from 'react-bootstrap';
import styles from './ArticlePage.css';

const imageStyle = {
  paddingTop: '20px',
  paddingBottom: '20px'
};

const headerRowStyle = {
  backgroundColor: '#EAA451'
};

const categoryColStyle = {
  backgroundColor: '#FFFFFF',
};

const categoryDivStyle = {
  verticalAlign: 'middle',
  paddingTop: '20px',
  paddingBottom: '20px'
};

const categoryBoxesStyle = {
  color: '#9F9F9F',
  fontSize: '10px',
  fontStyle: 'Bold',
  horizontalAlign: 'center',
};

const whiteTextStyle = {
  color: '#FFFFFF',
};

const bodyTitleStyle = {
  color: '#EAA451',
  paddingBottom: '20px',
  textDecoration: 'underline'
}


export default class ArticlePage extends Component {



  render() {
    return (
      <Grid fluid={true}>
          <Row style={headerRowStyle}>
            <Col sm={2} md={2} lg={2}>
              <Image style={imageStyle} src={require("./images/article/backArrow.png")} responsive/>
            </Col>
            <Col sm={4} md={4} lg={4}>

              <Image style={imageStyle} src={require("./images/article/tacos.png")} responsive/>
            </Col>

            <Col sm={4} md={4} lg={4} >
              <h2 style={whiteTextStyle}>
                Tacos at Grand Central
              </h2>
              <h4 style={whiteTextStyle}>
                DOWNTOWN LOS ANGELES
              </h4>
              <div style={whiteTextStyle}>
                Check out one of downtown Los Angeles’ biggest attractions, and the home of many foodstagrams.
              </div>
              <div style={categoryDivStyle}>
                <Row>
                  <Col style={categoryColStyle} sm={3} smOffset={1} md={3} mdOffset={1} lg={3} lgOffset={1}>
                    <text style={categoryBoxesStyle}> $0-15 </text>
                  </Col>

                  <Col style={categoryColStyle} sm={3} smOffset={1} md={3} mdOffset={1} lg={3} lgOffset={1}>
                    <text style={categoryBoxesStyle}> 6-10 miles </text>

                  </Col>

                  <Col style={categoryColStyle} sm={3} smOffset={1} md={3} mdOffset={1} lg={3} lgOffset={1}>
                    <text style={categoryBoxesStyle}>0-3 hours </text>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col sm={2} md={2} lg={2}>

            </Col>
          </Row>
          <Row>
          <Col sm={2} md={2} lg={2}>

          </Col>
          <Col sm={8} md={8} lg={8}>
            <h3 style={bodyTitleStyle}>
              What to do
            </h3>
            <text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi enim velit, aliquam ac posuere ac, pulvinar quis elit. Nam viverra dolor vitae nibh imperdiet venenatis. Etiam at posuere nisi. Sed condimentum nulla at rutrum faucibus. Pellentesque id nibh dui. Pellentesque laoreet viverra felis. Cras turpis ligula, molestie nec feugiat ut, varius vel mauris. Donec ut vehicula dolor, sit amet consequat augue. Aliquam fringilla iaculis lacus dictum gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </text>
            <Row>
              <Col sm={4} md={4} lg={4}>
                <Image style={imageStyle} src={require("./images/article/temp1.png")} responsive/>
              </Col>
              <Col sm={4} md={4} lg={4}>
                <Image style={imageStyle} src={require("./images/article/temp2.png")} responsive/>
              </Col>
              <Col sm={4} md={4} lg={4}>
                <Image style={imageStyle} src={require("./images/article/temp1.png")} responsive/>
              </Col>
            </Row>
            <text>
              Vestibulum lacus eros, rutrum quis urna vel, facilisis ornare lectus. Donec feugiat varius eleifend. Donec sem nisl, tristique quis semper eu, gravida id eros. Quisque tempus egestas massa sit amet lacinia. Duis eget tempor quam. Nunc sit amet quam eros. Aliquam venenatis lorem sit amet diam auctor, cursus varius enim hendrerit.
              Integer vitae mauris mauris. Proin imperdiet ex vitae metus mattis luctus. Fusce fringilla felis pharetra auctor ullamcorper. Phasellus sed mauris dolor. Donec mattis et urna in accumsan. Duis quam lacus, dictum ut velit vitae, scelerisque dictum risus. Donec mattis purus eu feugiat volutpat. Fusce in nulla nec orci luctus pellentesque. Duis in tincidunt odio. Proin sed lobortis purus. Sed rhoncus maximus risus vel posuere.
            </text>
            <Image style={imageStyle} src={require("./images/article/temp4.png")} responsive/>
            <h3 style={bodyTitleStyle}>
              How to get there
            </h3>
            <text>
              First, hop on the Rapid 12 towards Palms at Westwood Plaza, right by Ackerman Union. Make sure you have 50¢ handy.
            </text>
            <Image style={imageStyle} src={require("./images/article/map1.png")} responsive/>
            <text>
              Next, you're going to take the Expo Line towards downtown until its terminus, where you'll switch to any Union Station bound metro on the lower platform. Once you get to Pershing Square, Grand Central Market is only a short walk away.
            </text>
            <Image style={imageStyle} src={require("./images/article/map2.png")} responsive/>
            <h3 style={bodyTitleStyle}>
              While you're here
            </h3>

          </Col>


          <Col sm={2} md={2} lg={2}>

          </Col>
        </Row>
      </Grid>
    );
  }
}
