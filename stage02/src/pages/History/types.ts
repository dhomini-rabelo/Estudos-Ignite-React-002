export const statusColors = {
  success: '--Green-500',
  progress: '--Yellow-500',
  fail: '--Red-500',
} as const

export type statusType = keyof typeof statusColors
