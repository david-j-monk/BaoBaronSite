import React, { Component } from 'react'



export class Bibimbap extends Component {
    render() {
        return (
            <div className='MenuSection'>
                <table>
                    <tr>
                        <th colspan="2"><b>Bibimbap</b></th>
                    </tr>
                    <tr>
                        <th colspan="2"><i>Gluten free Korean style rice bowl with Jasmine rice</i></th>
                    </tr>
                    <tr>
                        <td>Korean fried chicken, cucumber sunomono, slaw, pak choi & free range fried egg</td>
                        <td className='price'>12.50</td>
                    </tr>
                    <tr>
                        <td>Korean fried cauliflower, cucumber sunomono, slaw, pak choi & free range fried egg (v)(vg)</td>
                        <td className='price'>11.50</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Bibimbap