import React, { Component } from 'react'



export class XiaoChi extends Component {
    render() {
        return (
            <div className='MenuSection'>
                <table>
                    <tr>
                        <th colspan="2"><b>Xiao Chi</b></th>
                    </tr>
                    <tr>
                        <th colspan="2"><i>(Zow chee) Small dishes</i></th>
                    </tr>
                    <tr>
                        <td>Korean fried chicken (gf)</td>
                        <td className='price'>6.00</td>
                    </tr>
                    <tr>
                        <td>Korean fried cauliflower (gf)(vg)</td>
                        <td className='price'>4.50</td>
                    </tr>
                    <tr>
                        <td>Jasmine rice (gf)(vg)</td>
                        <td className='price'>2.50</td>
                    </tr>
                    <tr>
                        <td>Edamame, Maldon salt (gf)(vg)</td>
                        <td className='price'>4.00</td>
                    </tr>
                    <tr>
                        <td>Pak Choi, XO sauce (gf)(vg)</td>
                        <td className='price'>4.00</td>
                    </tr>
                    <tr>
                        <td>Purple sprouting broccoli, ginger goma dressing</td>
                        <td className='price'>4.00</td>
                    </tr>
                    <tr>
                        <td>Mackerel fillet, miso & pomegranate molasses dressing, pickles (gf)</td>
                        <td className='price'>6.50</td>
                    </tr>
                    <tr>
                        <td>Salted cod cheeks, cauliflower leaf kimchi</td>
                        <td className='price'>5.50</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default XiaoChi