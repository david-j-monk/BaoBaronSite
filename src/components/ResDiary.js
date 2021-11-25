import React, { Component } from 'react'

export class ResDiary extends Component {
  componentDidMount() {


    dispatchEvent(new Event('load'));
  }

  render() {
    return (
      <div>
        <input id="rdwidgeturl" name="rdwidgeturl" value="https://booking.resdiary.com/widget/Standard/TheBaoBaron/30129?includeJquery=false" type="hidden" />
        <div id="rd-widget-frame"></div>
      </div>
    )
  }
}

export default ResDiary
