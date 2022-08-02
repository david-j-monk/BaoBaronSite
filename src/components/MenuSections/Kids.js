import React, { Component } from 'react'



export class Kids extends Component {
    render() {
        return (
            <div className='MenuSection'>
                <table>
                    <tr>
                        <td colspan="2"><i>Served with mayo dip, veggie sticks, fruit and a choice of apple or orange juice</i></td>
                        <td className='price'><i>7.50</i></td>
                    </tr>
                    <tr>
                        <td className='kids_option_instruction'>Pick your crispy thing...</td>
                        <td>
                            <tr className='kids_option'>Crispy chicken goujon</tr>
                            <tr className='kids_option'>Crispy broccoli (vg)</tr>
                            <tr className='kids_option'>Crispy fish goujon</tr>
                        </td>
                    </tr>
                    <tr>
                        <td className='kids_option_instruction'>Put it with...</td>
                        <td>
                        <tr className='kids_option'>A fluffy bao bun</tr>
                        <tr className='kids_option'>Slippery wheat or rice noodles (vg)</tr>
                        <tr className='kids_option'>Steamy rice (vg)(gf)</tr>
                        <tr className='kids_option'>Shokupan sandwich</tr>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Kids
