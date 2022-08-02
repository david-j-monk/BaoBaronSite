import React, { Component } from 'react'



export class BrunchRice extends Component {
    render() {
        return (
            <div className='MenuSection'>
                <table>
                    <tr>
                        <th colspan="2"><b>Rice Bowls</b></th>
                    </tr>
                    <tr>
                        <th colspan="2"><i>Served with jasmine rice, kimchi, pickles, slaw & local leaves</i></th>
                    </tr>
                    <tr>
                        <td>Korean fried chicken, pak choi, fried free range egg (gf) </td>
                        <td className='price'>15.00</td>
                    </tr>
                    <tr>
                        <td>Korean fried cauliflower, pak choi, fried free range egg (gf)(v)(vg)</td>
                        <td className='price'>14.00</td>
                    </tr>
                    <tr>
                        <td>Smoked haddock kedgeree, curry tare, ramen egg (gf) </td>
                        <td className='price'>13.00</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default BrunchRice