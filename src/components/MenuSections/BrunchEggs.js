import React, { Component } from 'react'

export class BrunchEggs extends Component {
    render() {
        return (
            <div className='MenuSection'>
                <table>
                    <tr>
                        <th colspan="2"><b>Eggs</b></th>
                    </tr>
                    <tr>
                        <th colspan="2"><i>Poached eggs, served on homemade shokupan ‘English muffin’ with hollandaise & gochugaru</i></th>
                    </tr>
                    <tr>
                        <td>Benedict - Crispy pork belly</td>
                        <td className='price'>9.00</td>
                    </tr>
                    <tr>
                        <td>Forrester - Thai mushrooms & pak choi</td>
                        <td className='price'>7.50</td>
                    </tr>
                    <tr>
                        <td>Smoked haddock</td>
                        <td className='price'>9.00</td>
                    </tr>
                    <tr>
                        <td>Asparagus</td>
                        <td className='price'>8.00</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default BrunchEggs