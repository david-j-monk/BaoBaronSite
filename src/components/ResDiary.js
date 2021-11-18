import React, { Component } from 'react'

export class ResDiary extends Component {
  render() {
    return (
      <div>
        <div id="rd-widget-frame" style="max-width: 600px; margin: auto;"></div>

<input id="rdwidgeturl" name="rdwidgeturl" value="https://booking.resdiary.com/widget/Standard/TheBaoBaron/30129?includeJquery=false" type="hidden">
<script type="text/javascript" src="https://booking.resdiary.com/bundles/WidgetV2Loader.js"></script>
      </div>
    )
  }
}

export default ResDiary
