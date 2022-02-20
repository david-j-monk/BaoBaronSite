import React, { Component } from 'react'



export class Dessert extends Component {
    render() {
        return (
            <div className='MenuSection'>
                <table>
                    <tr>
                        <th colspan="2"><b>Dessert</b></th>
                    </tr>
                    <tr>
                        <td>Deep fried bao-nut, ube ice cream, miso caramel (vg)</td>
                        <td className='price'>4.50</td>
                    </tr>
                    <tr>
                        <td>Chocolate torte, blood orange sorbet (gf)(vg)</td>
                        <td className='price'>5.25</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Dessert