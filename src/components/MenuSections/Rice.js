import React, { Component } from 'react'



export class Rice extends Component {
    render() {
        return (
            <div className='MenuSection'>
                <table>
                    <tr>
                        <th colspan="2"><b>Rice</b></th>
                    </tr>
                    <tr>
                        <th colspan="2"><i>served with jasmine rice and pickles</i></th>
                    </tr>
                    <tr>
                        <td>Free-range chicken breast katsu curry, local salad leaves</td>
                        <td className='price'>13.00</td>
                    </tr>
                    <tr>
                        <td>Sweet potato, cauliflower & broccoli, katsu curry, local salad leaves (vg)</td>
                        <td className='price'>11.50</td>
                    </tr>
                    <tr>
                        <td>Korean fried chicken bibimbap, pak choi & free range fried egg (gf)</td>
                        <td className='price'>13.00</td>
                    </tr>
                    <tr>
                        <td>Korean fried cauliflower bibimbap, pak choi & free range fried egg (gf)(v)(vg) </td>
                        <td className='price'>12.00</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Rice