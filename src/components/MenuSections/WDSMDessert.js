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
                        <td>Half bao nut and vanilla ice cream (vg)</td>
                        <td className='price'>3.00</td>
                    </tr>
                    <tr>
                        <td>Chocolate torte (vg)(gf)</td>
                        <td className='price'>4.00</td>
                    </tr>
                    <tr>
                        <td>Scoop of ice cream/sorbet</td>
                        <td className='price'>1.50</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Dessert