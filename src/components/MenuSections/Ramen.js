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
                        <th colspan="2"><i>all served with homemade ramen style wheat noodles, spring onions and ½ free range soy egg.<br /> Gluten free available</i></th>
                    </tr>
                    <tr>
                        <td>Pork belly, bone broth, shio tare, mayu, spicy crackling, fennel</td>
                        <td className='price'>15.00</td>
                    </tr>
                    <tr>
                        <td>Soy & sake braised venison, bone broth, Marmite tare, negi oil, mushroom, pak choi</td>
                        <td className='price'>15.25</td>
                    </tr>
                    <tr>
                        <td>Crown Prince & mushroom, vegetable broth, miso tare, negi oil, cavolo nero, crispy shallots (v)(vg)</td>
                        <td className='price'>13.00</td>
                    </tr>
                    <tr>
                        <td>Beetroot & celeriac, vegetable broth, soy tare, XO sauce, January King cabbage (v)(vg)</td>
                        <td className='price'>12.50</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Ramen