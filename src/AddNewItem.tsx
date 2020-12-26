import React, { useState } from 'react';
import { AddItemButton } from './styles';
import NewItemForm from './NewItemForm';

interface AddNewItemProps {
  onAdd: (text: string) => void,
  toggleButtonText: string,
  dark?: boolean
}

const AddNewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false);
  const { onAdd, toggleButtonText, dark } = props;

  const onAddAttribute = (text: string) => {
    onAdd(text);
    setShowForm(false);
  }

  if (showForm) {
    return (
      <NewItemForm onAdd={onAddAttribute} />
    );
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  )
}

export default AddNewItem;