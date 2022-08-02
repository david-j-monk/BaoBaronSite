import React, { Component } from 'react'

export class BrunchNoodle extends Component {
    render() {
        return (
            <div className='MenuSection'>
                <table>
                    <tr>
                        <th colspan="2"><b>Noodle</b></th>
                    </tr>
                    <tr>
                    <th colspan="2"><i>Served with homemade ramen-style wheat noodles.<br /> Gluten-free rice noodles available</i></th>
                    </tr>
                    <tr>
                        <td><b>Pork belly tonkotsu ramen</b><br />Thin noodles, pork broth, shio tare, mayu, spicy crackling, radish, pickled ginger, spring onions, ½ ramen egg</td>
                        <td className='price'>15.00</td>
                    </tr>
                    <tr>
                        <td><b>Smoked tofu ramen</b><br />Thin noodles, veg broth, spicy miso tare, hispi, crispy chilli, spring onions, ½ ramen egg (v)(vg)</td>
                        <td className='price'>13.00</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default BrunchNoodle