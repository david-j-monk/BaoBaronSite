import React, { Component } from 'react'



export class XiaoChi extends Component {
    render() {
        return (
            <div className='MenuSection'>
                <table>
                    <tr>
                        <th colspan="2"><b>XiaoChi</b></th>
                    </tr>
                    <tr>
                        <th colspan="2"><i>(Zow chee) Small dishes</i></th>
                    </tr>
                    <tr>
                        <td>Korean fried chicken (gf)</td>
                        <td className='price'>5.50</td>
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
                        <td>Stock pot carrots, marmite tare</td>
                        <td className='price'>3.75</td>
                    </tr>
                    <tr>
                        <td>Crispy sprouts, pickled ginger, soy tare, furikake (gf)(vg)</td>
                        <td className='price'>3.95</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default XiaoChi