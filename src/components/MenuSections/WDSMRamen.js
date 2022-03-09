import React, { Component } from 'react'



export class Ramen extends Component {
    render() {
        return (
            <div className='MenuSection'>
                <table>
                    <tr>
                        <th colspan="2"><b>Ramen</b></th>
                    </tr>
                    <tr>
                        <th colspan="2"><i>served with homemade wheat noodles, ½ free range soy cured egg & spring onions (gf available)</i></th>
                    </tr>
                    <tr>
                        <td>Pork belly, bone broth, shoyu tare, pak choi</td>
                    </tr>
                    <tr>
                        <td>Butternut squash, veg broth, spicy miso tare, pak choi (vg)</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Ramen