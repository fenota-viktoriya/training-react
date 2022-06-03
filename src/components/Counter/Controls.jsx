import React from 'react';
import { ButtonWrapper, Increment, Decrement } from './Counter.styled';
export default function Controls({ onIncrement, onDecrement }) {
  return (
    <ButtonWrapper>
      <Increment type="button" onClick={onIncrement}>
        увеличить на 1
      </Increment>
      <Decrement type="button" onClick={onDecrement}>
        уменьшить на 1
      </Decrement>
    </ButtonWrapper>
  );
}
