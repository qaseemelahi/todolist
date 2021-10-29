/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import { ListProps } from './ListProps'
import Button from '../Button/Button'
import { css } from '@emotion/react'
const List: FC<ListProps> = ({ header, elements, clickHandlers }) => (
    <table css={[style.list, style.container]}>
        <thead>
            <tr css={style.list}>
                <th css={[style.tableHead, style.list]}>
                    {header}
                </th>
            </tr>
        </thead>
        <tbody>
            {elements.map((item: string, index: number) => (
                <tr css={style.list} key={item + index}>
                    <td css={style.list}>{item}</td>
                    <td>
                        <Button onClick={() => clickHandlers(item)} type={'warning'}>
                            Delete
                        </Button>
                    </td>

                </tr>
            ))}
        </tbody>
    </table>
)

export default List
const style = {
    container: css({
        width: "100%",
        marginBottom: 30,

    }),
    tableHead: css({
        textAlign: "left",
    }),
    list: css({
        fontSize: 14,
        padding: 10,
        fontFamily: "sans-serif",
        borderCollapse: "collapse",
        border: " 1px solid gray",
    }),


}