import React from 'react';
import Column from './Column';
import { AppContainer } from './styles';
import AddNewItem from './AddNewItem';
import { useAppState } from './AppStateContext';
import CustomDragLayer from './CustomDragLayer';

const App = () => {

  const { state, dispatch } = useAppState();

  const onAdd = (text: string): void => {
    dispatch({
      type: 'ADD_LIST',
      payload: text
    });
  }

  return (
    <AppContainer>
      <CustomDragLayer />
      {state.lists.map((list, i) => {
        return <Column text={list.text} key={list.id} index={i} id={list.id} />
      })}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={onAdd} />
    </AppContainer>
  )
}

export default App;
