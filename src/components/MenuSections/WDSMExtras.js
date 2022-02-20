import React, { Component } from 'react'



export class WDSMExtras extends Component {
    render() {
        return (
            <div className='MenuSection'>
                <table>
                    <tr>
                        <th colspan="2"><b>Extras</b></th>
                    </tr>
                    <tr>
                        <td><i>Add Korean fried chicken to any set meal (gf)</i></td>
                        <td className='price'>3.00</td>
                    </tr>
                    <tr>
                        <td><i>Add Korean fried cauliflower to any set meal (vg)(gf)</i></td>
                        <td className='price'>2.50</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default WDSMExtras