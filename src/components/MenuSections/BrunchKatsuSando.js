import React, { Component } from 'react'



export class BrunchKatsuSando extends Component {
    render() {
        return (
            <div className='MenuSection'>
                <table>
                    <tr>
                        <th colspan="2"><b>Katsu Sando</b></th>
                    </tr>
                    <tr>
                        <th colspan="2"><i>Homemade shokupan sandwich, filled with tonkatsu sauce, kewpie mayo and slaw. <br />Served with dressed local leaves. Vegan version available</i></th>
                    </tr>
                    <tr>
                        <td>Panko free-range chicken breast</td>
                        <td className='price'>10.00</td>
                    </tr>
                    <tr>
                        <td>Panko aubergine</td>
                        <td className='price'>9.00</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default BrunchKatsuSando