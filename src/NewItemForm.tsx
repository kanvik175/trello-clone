import React, { useState } from 'react';
import { NewItemFormContainer, NewItemButton, NewItemInput } from './styles';
import useFocus from './utils/useFocus';

interface NewItemFormProps {
  onAdd: (text: string) => void;
}

const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("");

  const inputRef = useFocus();

  const handleAddText = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onAdd(text);
    }
  }

  return (
    <NewItemFormContainer>
      <NewItemInput ref={inputRef} value={text} onKeyPress={handleAddText} onChange={e => setText(e.target.value)} />
      <NewItemButton onClick={() => onAdd(text)}>
        Create
      </NewItemButton>
    </NewItemFormContainer>
  );
}

export default NewItemForm;