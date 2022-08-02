import React, { Component } from 'react'



export class Rice extends Component {
    render() {
        return (
            <div className='MenuSection'>
                <table>
                    <tr>
                        <th colspan="2"><b>Rice Bowls</b></th>
                    </tr>
                    <tr>
                        <th colspan="2"><i>Served with jasmine rice, kimchi, pickles, pak choi, slaw, local leaves and a fried free-range egg</i></th>
                    </tr>
                    <tr>
                        <td>Korean fried chicken (gf) </td>
                        <td className='price'>15.00</td>
                    </tr>
                    <tr>
                        <td>Korean fried cauliflower (gf)(v)(vg)</td>
                        <td className='price'>14.00</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Rice