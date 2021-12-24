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
                        <td>Pork belly, apple & fennel slaw, miso cashews (contains nuts)</td>
                        <td className='price'>5.00</td>
                    </tr>
                    <tr>
                        <td>Herb-fed chicken satay, pickled ginger, crispy shallot (contains nuts)</td>
                        <td className='price'>5.00</td>
                    </tr>
                    <tr>
                        <td>Venison haunch bulgogi, Chinkiang onions, gochujang mayo</td>
                        <td className='price'>5.00</td>
                    </tr>
                    <tr>
                        <td>Salt & pepper broccoli, roast onion, sesame mayo, Lao Gan Ma (vg)</td>
                        <td className='price'>4.50</td>
                    </tr>
                    <tr>
                        <td>Oyster mushroom satay, pickled ginger, crispy shallot (vg)</td>
                        <td className='price'>4.50</td>
                    </tr>
                    <tr>
                        <td>Crown Prince, miso & chilli croquette, daikon, tonkatsu (vg)</td>
                        <td className='price'>4.50</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Bao
