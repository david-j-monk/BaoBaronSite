import React, { Component } from 'react'



export class Snacks extends Component {
    render() {
        return (
            <div className='MenuSection'>
                <table>
                    <tr >
                        <th colspan="2"><b>Snacks</b></th>
                    </tr>
                    <tr>
                        <td>Miso roasted cashews</td>
                        <td className='price'>3.00</td>
                    </tr>
                    <tr>
                        <td>Seaweed crackers</td>
                        <td className='price'>2.50</td>
                    </tr>
                    <tr>
                        <td>Cauli leaf kimchi</td>
                        <td className='price'>2.50</td>
                    </tr>
                    <tr>
                        <td>Crackling</td>
                        <td className='price'>3.00</td>
                    </tr>
                    <tr>
                        <td>Smacked cucumber</td>
                        <td className='price'>3.00</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Snacks
