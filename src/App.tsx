/** @jsxImportSource @emotion/react */
import { Component } from 'react'
import Button from './components/Button/Button'
import List from './components/List/List'
import { css } from '@emotion/react'

type TodoState = {
  value: string;
  items: string[];
};
export class App extends Component<{}, TodoState> {
  state: TodoState = {
    value: "",
    items: [],

  };
  onChangeText = (e: React.FormEvent<HTMLInputElement>) => this.setState({ value: e.currentTarget.value })
  onClickList = () => this.state.value && this.setState({
    items: [...this.state.items, this.state.value],
    value: '',
  })
  onDeleteItem = (listItem: string) => this.setState({
    items: this.state.items.filter((item: string) => listItem.localeCompare(item) !== 0),
  })

  render() {
    // console.log(this.state);
    const { state, onClickList, onChangeText, onDeleteItem } = this;
    const { value, items } = state;
    return (
      <>
        <List clickHandlers={(listItem: string) => onDeleteItem(listItem)} header="Some title" elements={items} />
        <Button onClick={onClickList} type="primary">Click me!</Button>
        <input value={value} css={style} placeholder={'Add item'} onChange={onChangeText} />
      </>
    )
  }
}
const style = css({
  padding: 10,
  marginLeft: 10,
});
export default App
