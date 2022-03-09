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
                        <td>Pork belly, apple & fennel slaw, miso cashews, Granny Smith & chilli ketchup (contains nuts) </td>
                        <td className='price'>5.50</td>
                    </tr>
                    <tr>
                        <td>Free range chicken katsu curry, pickled ginger, crispy chicken skin</td>
                        <td className='price'>5.50</td>
                    </tr>
                    <tr>
                        <td>Local beef brisket bulgogi, Chinkiang onions, gochujang mayo</td>
                        <td className='price'>5.50</td>
                    </tr>
                    <tr>
                        <td>Salt & pepper broccoli, roast onion, sesame mayo, Lao Gan Ma (vg)</td>
                        <td className='price'>4.50</td>
                    </tr>
                    <tr>
                        <td>Portobello mushroom satay, pickled ginger, crispy shallot (vg)(contains peanuts)</td>
                        <td className='price'>4.50</td>
                    </tr>
                    <tr>
                        <td>Sweet potato croquette, daikon, tonkatsu sauce (vg)</td>
                        <td className='price'>4.50</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Bao
