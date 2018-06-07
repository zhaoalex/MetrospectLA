import React from "react"
import { Grid, Row, Col, Carousel, Image } from 'react-bootstrap'
import { makeApiRequest } from 'apihandler.js'
import { LogoPin } from 'components/public';
import './ArticlePage.css'

class ArticlePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      neighborhood: '',
      summary: '',
      short_description: '',
      content1: '',
      content2: '',
      directions: '',
      image1: null,
      image2: null,
      image3: null,
      image4: null,
      map1: null,
      map2: null
    };

    const id = props.match && props.match.params && props.match.params.id;

    makeApiRequest(`/api/article/${id}`)
      .then(data => {
        console.log(data.hits.hits[0]);
        const { title, neighborhood, summary, short_description, content1, content2, directions, image1, image2, image3, image4, map1, map2 } = data.hits.hits[0]._source;
        this.setState({
          title,
          neighborhood,
          summary,
          short_description,
          content1,
          content2,
          directions,
          image1,
          image2,
          image3,
          image4,
          map1,
          map2
        })
      })
  }

  render() {
    return (
      <Grid fluid className="noPadding">
          <Row className="headerRowStyle">
            <Col xs={0} md={2} lg={2}  className="">
              <div className="boxOne"></div>
              <div className="whiteDiv rightShift"></div>
            </Col>
            <Col xs={12} md={3} lg={3} className="headerImageDiv">
                <Image className="headerImage" src={this.state.image1} responsive/>
                <div className="whiteDiv inline"></div>
            </Col>

            <Col xs={12} md={4} lg={4}>
              <h2 className="title">
                {this.state.title}
              </h2>
              <div className="location_div">
                <LogoPin width={20} height={20} color="white" />
                <h6 className="location">
                    {this.state.neighborhood}
                </h6>
              </div>
              <div className="categoryDivStyle">
                <Row>
                  <Col xs={12}>
                    <div className="categoryBoxesStyle">{this.state.summary.price}</div>
                    <div className="categoryBoxesStyle categoryTripTime">{this.state.summary.time}</div>
                    <div className="categoryBoxesStyle">{this.state.summary.distance}</div>
                  </Col>
                </Row>
              </div>
              <p className="oneLiner">
                {this.state.short_description}
              </p>

            </Col>
            <Col sm={3} md={3} lg={3} className="">

            </Col>
          </Row>
          <Row className="article-contents">
          <Col sm={2} md={2} lg={2}>

          </Col>
          <Col className="body" sm={8} md={8} lg={8}>
            <p>
              {this.state.content1}
            </p>
            <Row>
              <Col sm={6} md={6} lg={6}>
                <Image className="imageStyle" src={this.state.image2} responsive/>
              </Col>
              <Col sm={6} md={6} lg={6}>
                <Image className="imageStyle" src={this.state.image3} responsive/>
              </Col>
            </Row>
            <p>
              {this.state.content2}
            </p>
            <Image className="imageStyle" src={this.state.image4} responsive/>
            <h3 className="bodyTitleStyle">
              How to get there
            </h3>
            <p>
              {this.state.directions}
            </p>
            <Image className="imageStyle" src={this.state.map1} responsive/>
            <Image className="imageStyle" src={this.state.map2} responsive/>
            <h3 className="bodyTitleStyle">
              While you're here
            </h3>
            <p>
              Check these places out too!
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
