import React, { useRef } from 'react';
import { useDrop } from 'react-dnd';
import { useItemDrag } from './useItemDrag';
import { useAppState } from './AppStateContext';
import { CardDragItem } from './DragItem';
import { CardContainer } from './styles';

interface CardProps {
  text: string;
  columnId: string;
  isPreview?: boolean;
  index: number;
  id: string;
}

const Card = ({text, columnId, isPreview, index, id}: CardProps): React.ReactElement => {

  const { dispatch } = useAppState();

  const ref = useRef<HTMLDivElement>(null);

  const { drag } = useItemDrag({
    type: 'CARD',
    id,
    index,
    text,
    columnId
  })

  const [, drop] = useDrop({
    accept: 'CARD',
    hover(item: CardDragItem) {
      if (item.id === id) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;
      const sourceColumn = item.columnId
      const targetColumn = columnId;

      dispatch({
        type: "MOVE_TASK",
        payload: {
          dragIndex,
          hoverIndex,
          sourceColumn,
          targetColumn
        }
      })

      item.index = hoverIndex;
      item.columnId = targetColumn;
    }
  })

  drag(drop(ref));

  return (
    <CardContainer ref={ref}>
      {text}
    </CardContainer>
  )
}

export default Card;