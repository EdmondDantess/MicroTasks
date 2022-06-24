import React from 'react';


export const NewComponent = () => {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]


    return (
        <table>
            <thead>
            <tr>
                <th colSpan={2}>Top cars</th>
            </tr>
            </thead>
            <tbody>
            {topCars.map((objectFromArray, index) => {
                return (
                    <tr key={index + 1}>
                        <td>
                            {objectFromArray.manufacturer}
                        </td>
                        <td>
                            {objectFromArray.model}
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}