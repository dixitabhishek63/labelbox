import React, { Component } from 'react';
import ClassificationForm from './classification-options';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import { SegmentImage } from './segment-image';
import { rectangleIcon, polygonIcon } from './icons';

export class LabelingScreen extends Component {
  state = {}
  render() {
    if (!this.props.imageUrl) {
      return (<div>Loading...</div>);
    }

    const onSubmit = (label) => {
      this.props.onSubmit(this.state.label);
      this.setState({label: undefined});
    };

    const onSkip = () => {
      this.props.onSkip();
      this.setState({label: undefined});
    };

    let drawPolygon;
    let drawRectangle;

    return (
      <Card>
        <CardContent>
          <div>
            <SegmentImage
              imageUrl={this.props.imageUrl}
              style={{width: '100%'}}
              drawPolygonFunction={(drawPolygonFunc) => drawPolygon = drawPolygonFunc}
              drawRectangleFunction={(drawRectangleFunc) => drawRectangle = drawRectangleFunc}
            />
          </div>
          <div className="form-controls">
            <div>Outline the car using the polygon tool</div>
          </div>
        </CardContent>
        <CardActions style={{justifyContent: 'flex-end'}}>
          <Button
            raised={true}
            color="primary"
            disabled={!this.state || !this.state.label}
            onClick={onSubmit}
          >Submit</Button>
        </CardActions>
      </Card>
    );
  }
}
