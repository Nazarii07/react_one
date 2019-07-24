import React from 'react'

export default function Select(props) {
    return (
        <div className="item">
            <select value={props.value} onChange={props.handleChange}>
                <option value="uah">UAH</option>
                <option value="usd">USD</option>
                <option value="rur">RUR</option>
                <option value="btc">BTC</option>
            </select>
        </div>
    )
}
