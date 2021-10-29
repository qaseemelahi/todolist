/** @jsxImportSource @emotion/react */

import { Component } from 'react'
import { ListProps } from './ListProps'
import Button from '../Button/Button'
import { css } from '@emotion/react'
export default class List extends Component<ListProps> {
    render() {
        const { header, elements, clickHandlers } = this.props

        return (
            <table css={[style.list, style.container]}>
                <thead>
                    <tr>
                        <th css={[style.tableHead, style.list]}>
                            {header}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {elements.map((item: string, index: number) => (
                        <tr key={item + index}>
                            <td css={[style.list, style.tableData]}>
                                {item}
                                <Button onClick={() => clickHandlers(item)} type={'warning'}>
                                    Delete
                                </Button>
                            </td>


                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}
const style = {
    container: css({
        width: "100%",
        marginBottom: 30,
    }),
    tableHead: css({
        textAlign: "left",
    }),
    list: css({
        padding: 15,
        fontFamily: "sans-serif",
        borderCollapse: "collapse",
        border: " 1px solid gray",
    }),
    tableData: css({
        display: 'flex',
        justifyContent: 'space-between'
    })

}