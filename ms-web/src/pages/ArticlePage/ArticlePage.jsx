import React from "react";
import { Grid, Row, Col, Carousel, Image } from 'react-bootstrap';
import './ArticlePage.css';

// const imageStyle = {
//   paddingTop: '20px',
//   paddingBottom: '20px',
//   display: 'block',
//   marginLeft: 'auto',
//   marginRight:'auto',
// };
//
// const equalColHeight = {
//   // display: "-webkit-box",
//   // display: "-webkit-flex",
//   // display: '-ms-flexbox',
//   // display: 'flex'
// };
//
// const headerRowStyle = {
//   backgroundColor: '#EAA451'
// };
//
// const categoryColStyle = {
//   backgroundColor: '#FFFFFF',
//   textAlign: "center"
// };
//
// const categoryDivStyle = {
//   verticalAlign: 'middle',
//   paddingTop: '20px',
//   paddingBottom: '20px'
// };
//
// const categoryBoxesStyle = {
//   color: '#9F9F9F',
//   fontSize: '10px',
//   fontStyle: 'Bold',
//   textAlign: 'center',
// };
//
// const whiteTextStyle = {
//   color: '#FFFFFF',
// };
//
// const bodyTitleStyle = {
//   color: '#EAA451',
//   paddingBottom: '20px',
//   textDecoration: 'underline'
// }


class ArticlePage extends React.Component {
  render() {
    return (
      <Grid fluid={true} className="noPadding">
          <Row className="headerRowStyle">
            <Col xs={12} md={2} lg={2}  className="equalColHeight">
              <Image className="imageStyle" src={require("./images/backArrow.png")} responsive/>
            </Col>
            <Col xs={12} md={4} lg={4} className='equalColHeight'>

              <Image className="imageStyle" src={require("./images/tacos.png")} responsive/>
            </Col>

            <Col xs={12} md={4} lg={4} className='equalColHeight'>
              <h2 className="whiteTextStyle" >
                Tacos at Grand Central
              </h2>
              <h4 className="whiteTextStyle" >
                DOWNTOWN LOS ANGELES
              </h4>
              <h6 className="whiteTextStyle">
                Check out one of downtown Los Angeles’ biggest attractions, and the home of many foodstagrams.
              </h6>
              <div className="categoryDivStyle">
                <Row>
                  <Col xs={12}>
                    <div className="categoryBoxesStyle">$0-15</div>
                    <div className="categoryBoxesStyle">6-10 miles</div>
                    <div className="categoryBoxesStyle">0-3 hours</div>
                  </Col>
                  {/*}<Col className="categoryColStyle" sm={3} smOffset={1} md={2} mdOffset={2} lg={2} lgOffset={2}>
                    <p className="categoryBoxesStyle">$0-15</p>
                  </Col>

                  <Col className="categoryColStyle" sm={3} smOffset={1} md={2} mdOffset={2} lg={2} lgOffset={2}>
                    <p className="categoryBoxesStyle">6-10 miles</p>

                  </Col>

                  <Col className="categoryColStyle" sm={3} smOffset={1} md={2} mdOffset={2} lg={2} lgOffset={2}>
                    <p className="categoryBoxesStyle">0-3 hours</p>
                  </Col>*/}
                </Row>
              </div>
            </Col>
            <Col sm={2} md={2} lg={2} className="equalColHeight">

            </Col>
          </Row>
          <Row>
          <Col sm={2} md={2} lg={2}>

          </Col>
          <Col sm={8} md={8} lg={8}>
            <h3 className="bodyTitleStyle">
              What to do
            </h3>
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
