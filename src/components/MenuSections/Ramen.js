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
                        <th colspan="2"><i>served with homemade ramen style wheat noodles, spring onions and ½ free range soy cured egg. Gf available<br /> Gluten free available</i></th>
                    </tr>
                    <tr>
                        <td>Pork belly, bone broth, shio tare, mayu, spicy crackling, fennel</td>
                        <td className='price'>15.00</td>
                    </tr>
                    <tr>
                        <td>Marmite & sake braised beef short-rib, bone broth, shoyu tare, XO sauce, broccoli</td>
                        <td className='price'>15.50</td>
                    </tr>
                    <tr>
                        <td>Butternut squash & mushroom, veg broth, spicy miso tare, negi oil, pak choi, crispy shallots (v)(vg)</td>
                        <td className='price'>13.00</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Ramen