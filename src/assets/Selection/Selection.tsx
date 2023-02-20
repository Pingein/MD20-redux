import React, { useState } from 'react'
import styles from './Selection.module.css'


interface SelectionParams {
    placeholder: string
    options: string[]
    labels?: string[]
}

const Selection = ({placeholder, options, labels}:SelectionParams) => {
    let labelsIndex = -1
    return (
        <select onChange={(e) => {
            (e.currentTarget.childNodes[0] as HTMLOptionElement).disabled = true
          }}>
            <option value="">{placeholder}</option>
            {options.map(option => {
                labelsIndex += 1
                return (
                    <option key={option} value={option}>{labels ? labels[labelsIndex] : option}</option>
                )
            })}
        </select>
    )
}


export default Selection