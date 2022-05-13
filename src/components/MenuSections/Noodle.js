import React, { Component } from 'react'



export class Noodle extends Component {
    render() {
        return (
            <div className='MenuSection'>
                <table>
                    <tr>
                        <th colspan="2"><b>Noodle</b></th>
                    </tr>
                    <tr>
                        <th colspan="2"><i>Served with homemade ramen-style wheat noodles.<br /> Gluten-free rice noodles available</i></th>
                    </tr>
                    <tr>
                        <td><b>Pork belly tonkotsu ramen</b><br />Thin noodles, pork broth, shio tare, mayu, spicy crackling, pak choi, pickled ginger, spring onions, ½ ramen egg</td>
                        <td className='price'>15.00</td>
                    </tr>
                    <tr>
                        <td><b>Smoked tofu ramen</b><br />Thin noodles, veg broth, spicy miso tare, hispi, crispy chilli, spring onions, ½ ramen egg (v)(vg)</td>
                        <td className='price'>13.00</td>
                    </tr>
                    <tr>
                        <td><b>Panko free-range chicken mazemen</b><br />Wide noodles, curry tare, curried pork dripping, asparagus, smacked cucumber, free-range onsen egg</td>
                        <td className='price'>14.00</td>
                    </tr>
                    <tr>
                        <td><b>Crispy broccoli & aubergine mazemen</b><br />Wide noodles, mushroom & nori XO sauce, pak choi, pickled daikon, free-range onsen egg (v)(vg)</td>
                        <td className='price'>13.00</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Noodle