import React, { Component } from 'react'



export class BrunchBao extends Component {
    render() {
        return (
            <div className='MenuSection'>
                <table>
                    <tr>
                        <th colspan="2"><b>Bao</b></th>
                    </tr>
                    <tr>
                        <th colspan="2"><i>Freshly steamed bun</i></th>
                    </tr>
                    <tr>
                        <td>P.B.L.T. Smoked pork belly, lettuce, tomato, Marmite mayo</td>
                        <td className='price'>5.50</td>
                    </tr>
                    <tr>
                        <td>Smoked duck leg, smacked cucumber, Kewpie mayo</td>
                        <td className='price'>5.50</td>
                    </tr>
                    <tr>
                        <td>Salt & pepper broccoli, chillichup, pickled ginger (vg) </td>
                        <td className='price'>4.50</td>
                    </tr>
                    <tr>
                        <td>F.B.L.T. Folkestone Baycon, lettuce, tomato, Marmite mayo (vg) </td>
                        <td className='price'>4.50</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default BrunchBao
