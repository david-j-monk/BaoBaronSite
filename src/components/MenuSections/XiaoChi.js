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
                        <td className='price'>6.50</td>
                    </tr>
                    <tr>
                        <td>Korean fried cauliflower (gf)(vg)</td>
                        <td className='price'>5.00</td>
                    </tr>
                    <tr>
                        <td>Jasmine rice (gf)(vg)</td>
                        <td className='price'>3.00</td>
                    </tr>
                    <tr>
                        <td>Edamame, Maldon salt (gf)(vg)</td>
                        <td className='price'>4.50</td>
                    </tr>
                    <tr>
                        <td>Pak choi, asparagus, mushroom & nori XO (gf)(vg)</td>
                        <td className='price'>4.50</td>
                    </tr>
                    <tr>
                        <td>Panko cod cheeks, Kewpie mayo, pickled daikon</td>
                        <td className='price'>8.50</td>
                    </tr>
                    <tr>
                        <td>White cabbage slaw, furikake (v)(vg)</td>
                        <td className='price'>3.00</td>
                    </tr>
                    <tr>
                        <td>Sesame tiger prawn toast, pickled ginger</td>
                        <td className='price'>7.50</td>
                    </tr>
                    <tr>
                        <td>Charred hispi cabbage, ssamjang (v)(vg)</td>
                        <td className='price'>4.50</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default XiaoChi