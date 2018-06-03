import React from "react";
import { Grid, Row, Col, Carousel, Image } from 'react-bootstrap';
import './ArticlePage.css';

class ArticlePage extends React.Component {
  render() {
    return (
      <Grid fluid={true} className="noPadding">
          <Row className="headerRowStyle">
            <Col xs={0} md={2} lg={2}  className="">
              <div className="boxOne"></div>
              <div className="whiteDiv rightShift"></div>
            </Col>
            <Col xs={12} md={3} lg={3} className=' headerImageDiv'>
                <Image className="headerImage" src={require("./images/food.png")} responsive/>
                <div className="whiteDiv inline"></div>
            </Col>

            <Col xs={12} md={4} lg={4}>
              <h2 className="title" >
                Tacos at Grand Central
              </h2>
              <div className="location_div">
                <Image className="pin" src={require("./images/pin.png")} responsive/>
                <h6 className="location" >
                    LOS ANGELES
                </h6>
              </div>
              <div className="categoryDivStyle">
                <Row>
                  <Col xs={12}>
                    <div className="categoryBoxesStyle">$$</div>
                    <div className="categoryBoxesStyle categoryTripTime">full day</div>
                    <div className="categoryBoxesStyle">10 mi</div>
                  </Col>
                </Row>
              </div>
              <p className="oneLiner">
                Check out one of downtown Los Angeles’ biggest attractions, and the home of many foodstagrams.
              </p>

            </Col>
            <Col sm={3} md={3} lg={3} className="">

            </Col>
          </Row>
          <Row>
          <Col sm={2} md={2} lg={2}>

          </Col>
          <Col className="body" sm={8} md={8} lg={8}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi enim velit, aliquam ac posuere ac, pulvinar quis elit. Nam viverra dolor vitae nibh imperdiet venenatis. Etiam at posuere nisi. Sed condimentum nulla at rutrum faucibus. Pellentesque id nibh dui. Pellentesque laoreet viverra felis. Cras turpis ligula, molestie nec feugiat ut, varius vel mauris. Donec ut vehicula dolor, sit amet consequat augue. Aliquam fringilla iaculis lacus dictum gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            <Row>
              <Col sm={4} md={4} lg={4}>
                <Image className="imageStyle" src={require("./images/temp1.png")} responsive/>
              </Col>
              <Col sm={4} md={4} lg={4}>
                <Image className="imageStyle" src={require("./images/temp2.png")} responsive/>
              </Col>
              <Col sm={4} md={4} lg={4}>
                <Image className="imageStyle" src={require("./images/temp1.png")} responsive/>
              </Col>
            </Row>
            <p>
              Vestibulum lacus eros, rutrum quis urna vel, facilisis ornare lectus. Donec feugiat varius eleifend. Donec sem nisl, tristique quis semper eu, gravida id eros. Quisque tempus egestas massa sit amet lacinia. Duis eget tempor quam. Nunc sit amet quam eros. Aliquam venenatis lorem sit amet diam auctor, cursus varius enim hendrerit.
              Integer vitae mauris mauris. Proin imperdiet ex vitae metus mattis luctus. Fusce fringilla felis pharetra auctor ullamcorper. Phasellus sed mauris dolor. Donec mattis et urna in accumsan. Duis quam lacus, dictum ut velit vitae, scelerisque dictum risus. Donec mattis purus eu feugiat volutpat. Fusce in nulla nec orci luctus pellentesque. Duis in tincidunt odio. Proin sed lobortis purus. Sed rhoncus maximus risus vel posuere.
            </p>
            <Image className="imageStyle" src={require("./images/temp4.png")} responsive/>
            <h3 className="bodyTitleStyle">
              How to get there
            </h3>
            <p>
              First, hop on the Rapid 12 towards Palms at Westwood Plaza, right by Ackerman Union. Make sure you have 50¢ handy.
            </p>
            <Image className="imageStyle" src={require("./images/map1.png")} responsive/>
            <p>
              Next, you're going to take the Expo Line towards downtown until its terminus, where you'll switch to any Union Station bound metro on the lower platform. Once you get to Pershing Square, Grand Central Market is only a short walk away.
            </p>
            <Image className="imageStyle" src={require("./images/map2.png")} responsive/>
            <h3 className="bodyTitleStyle">
              While you're here
            </h3>
            <p>
            Blah blah blah blah blah.
            </p>
          </Col>


          <Col sm={2} md={2} lg={2}>

          </Col>
        </Row>
      </Grid>
    );
  }
}

export default ArticlePage;
