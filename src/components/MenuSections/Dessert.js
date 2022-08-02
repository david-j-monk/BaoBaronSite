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
                        <td>Deep fried bao-nut, mirabelle plum sorbet, yuzu caramel (vg)</td>
                        <td className='price'>5.00</td>
                    </tr>
                    <tr>
                        <td>Chocolate torte, sesame ice cream (gf)(vg</td>
                        <td className='price'>6.00</td>
                    </tr>
                    <tr>
                        <td>Sticky toffee pudding, miso butterscotch, ginger ice cream (gf)(vg) 5</td>
                        <td className='price'>6.00</td>
                    </tr>
                    <tr>
                        <td>2 scoops of ice cream or sorbet (please ask for today’s flavours)</td>
                        <td className='price'>3.00</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Dessert