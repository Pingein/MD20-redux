import React, { useState } from 'react'
import styles from './SortableTable.module.css'



interface SortableTableParams<T> {
    header: string[]
    [rows: string]: string[]
}

const SortableTable = ({header, rows}:SortableTableParams<Object>) => {
    return (
        <table>
            <thead>
                <tr>
                    {header.map(headerItem => {
                        return (
                            <td key={headerItem}>{headerItem}</td>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                    {rows.map(row => {
                        return <tr>
                            {row.keys.map(key => {
                                return <td>{row[key]}</td>
                            })}
                            {/* {row.map((item) => {
                                return <td>item</td>
                            })} */}
                        </tr>
                    })}
            </tbody>
        </table>
    )
}


export default SortableTable