import React, { Component } from 'react'



export class BrunchDessert extends Component {
    render() {
        return (
            <div className='MenuSection'>
                <table>
                    <tr>
                        <th colspan="2"><b>DESSERT</b></th>
                    </tr>
                    <tr>
                        <td>Deep fried bao-nut, mirabelle plum sorbet, yuzu caramel (vg) </td>
                        <td className='price'>4.50</td>
                    </tr>
                    <tr>
                        <td>Chocolate torte, sesame ice cream (gf)(vg)</td>
                        <td className='price'>5.25</td>
                    </tr>                   
                     <tr>
                        <td>Sticky toffee pudding, miso butterscotch, ginger ice cream (gf)(vg)</td>
                        <td className='price'>5.25</td>
                    </tr>
                    <tr>
                        <td>2 scoops of ice cream or sorbet (please ask for today’s flavours)</td>
                        <td className='price'>2.5</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default BrunchDessert