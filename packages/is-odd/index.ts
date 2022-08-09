import { isEven } from '../is-even/index'

export function isOdd (i: number): boolean {
  return !isEven(i)
}
