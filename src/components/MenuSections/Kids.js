import React, { Component } from 'react'



export class Kids extends Component {
    render() {
        return (
            <div className='MenuSection'>
                <table>
                <tr>
                    <th colspan="2"><i>all come with mayo dip, crudités, fruit and a choice of apple or orange juice</i></th>
                    </tr>
                    <tr>
                        <td>Chicken breast bao</td>
                        <td className='price'>7.50</td>
                    </tr>
                    <tr>
                        <td>Crispy broccoli bao(vg)</td>
                        <td className='price'>7.50</td>
                    </tr>
                    <tr>
                        <td>Chicken breast, jasmine rice</td>
                        <td className='price'>7.50</td>
                    </tr>
                    <tr>
                        <td>Crispy broccoli, jasmine rice (vg)</td>
                        <td className='price'>7.50</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Kids
