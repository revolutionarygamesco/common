import { MS_PER_S, S_PER_M, M_PER_H, H_PER_D, D_PER_W } from '../constants/time.ts'

export const intervalToMS = (interval: string): number => {
  const seconds = interval.match(/(\d+(\.\d+)?) seconds?/)
  const minutes = interval.match(/(\d+(\.\d+)?) minutes?/)
  const hours = interval.match(/(\d+(\.\d+)?) hours?/)
  const days = interval.match(/(\d+(\.\d+)?) days?/)
  const weeks = interval.match(/(\d+(\.\d+)?) weeks?/)

  if (seconds) {
    const n = parseFloat(seconds[1])
    return n * MS_PER_S
  } else if (minutes) {
    const n = parseFloat(minutes[1])
    return n * MS_PER_S * S_PER_M
  } else if (hours) {
    const n = parseFloat(hours[1])
    return n * MS_PER_S * S_PER_M * M_PER_H
  } else if (days) {
    const n = parseFloat(days[1])
    return n * MS_PER_S * S_PER_M * M_PER_H * H_PER_D
  } else if (weeks) {
    const n = parseFloat(weeks[1])
    return n * MS_PER_S * S_PER_M * M_PER_H * H_PER_D * D_PER_W
  } else {
    return -1
  }
}
