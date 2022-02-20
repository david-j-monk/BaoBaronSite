import React, { Component } from 'react'



export class Ramen extends Component {
    render() {
        return (
            <div className='MenuSection'>
                <table>
                    <tr>
                        <th colspan="2"><b>Ramen</b></th>
                    </tr>
                    <tr>
                        <td>Szechuan pulled pork, bone broth, shoyu tare, pak choi, wheat noodles</td>
                        <td className='price'>12.00</td>
                    </tr>
                    <tr>
                        <td>Butternut squash, veg broth, spicy miso tare, pak choi, wheat noodles (vg)</td>
                        <td className='price'>11.00</td>
                    </tr>
                    <tr>
                        <td><i>Add free range soy cured egg</i></td>
                        <td className='price'>1.00</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Ramen