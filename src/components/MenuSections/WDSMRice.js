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
                        <td>Free range chicken katsu curry & jasmine rice</td>
                        <td className='price'>10.00</td>
                    </tr>
                    <tr>
                        <td>Vegetable katsu curry & jasmine rice (vg)</td>
                        <td className='price'>9.50</td>
                    </tr>
                    <tr>
                        <td>Cod cheek and butternut squash, tarkari curry & rice (gf)</td>
                        <td className='price'>10.00</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Rice