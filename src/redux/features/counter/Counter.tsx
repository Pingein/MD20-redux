import React from 'react'

import { useAppDispatch, useAppSelector } from '../../store/hooks'

import { decrement, increment } from './counterSlice'

export function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  //const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  //return { count, dispatch }

  // omit rendering logic
}