import React, { Component } from 'react'



export class Bao extends Component {
    render() {
        return (
            <div className='MenuSection'>
                <table>
                    <tr >
                        <th colspan="2"><b>Bao</b></th>
                    </tr>
                    <tr>
                        <th colspan="2"><i>Freshly steamed bun</i></th>
                    </tr>
                    <tr>
                        <td>Pork rendang, sambal nanas, crispy chicken skin</td>
                        <td className='price'>5.50</td>
                    </tr>
                    <tr>
                        <td>Panko free-range chicken, tonkatsu sauce, cabbage slaw</td>
                        <td className='price'>5.50</td>
                    </tr>
                    <tr>
                        <td>Smoked duck leg, smacked cucumber, Kewpie mayo</td>
                        <td className='price'>5.50</td>
                    </tr>
                    <tr>
                        <td>Salt & pepper broccoli, chillichup, pickled ginger (vg)</td>
                        <td className='price'>4.50</td>
                    </tr>
                    <tr>
                        <td>Thai Portobello mushroom, Marmite mayo, crispy shallot (vg)</td>
                        <td className='price'>4.50</td>
                    </tr>
                    <tr>
                        <td>Panko aubergine, cauli leaf kimchi, sesame mayo (vg)</td>
                        <td className='price'>4.50</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Bao
