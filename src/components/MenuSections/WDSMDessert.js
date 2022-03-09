import React, { Component } from 'react'



export class Dessert extends Component {
    render() {
        return (
            <div className='MenuSection'>
                <table>
                    <tr>
                        <th colspan="2"><b>DESSERT</b></th>
                    </tr>
                    <tr>
                        <td>Deep fried bao-nut, ube ice cream, miso caramel (vg)</td>
                    </tr>
                    <tr>
                        <td>Chocolate torte, blood orange sorbet (vg)(gf)</td>
                    </tr>
                    <tr>
                        <td>Spiced sticky toffee pudding, miso butterscotch, Taywell vegan vanilla ice cream (gf)(vg)</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Dessert