import { Div } from './styles'
import { useContext, useEffect, useState } from 'react'
import { differenceInSeconds } from 'date-fns'
import { TimerCycleInterface } from '../../../../contexts/types'
import { TimerCyclesContext } from '../../../../contexts/cycles'

export function CountDown() {
  const [secondsPassed, setSecondsPassed] = useState<number>(0)
  const { activeCycle, activeCycleId, actions } = useContext(TimerCyclesContext)
  const [minutesDisplay, secondsDisplay] = getCountDownRepresentation(
    activeCycle,
    secondsPassed,
  )

  useEffect(() => {
    let interval: number | null = null

    if (activeCycle) {
      document.title = activeCycle.task
      interval = setInterval(() => {
        const difference = differenceInSeconds(new Date(), activeCycle.start)
        const totalSeconds = activeCycle.minutes * 60
        if (difference >= totalSeconds) {
          actions.killCycle()
          setSecondsPassed(totalSeconds)
        } else {
          setSecondsPassed(difference)
        }
      }, 1000)
    } else {
      setSecondsPassed(0)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [activeCycle, activeCycleId, actions])

  function getCountDownRepresentation(
    activeCycle: TimerCycleInterface | undefined,
    secondsPassed: number,
  ): [string, string] {
    const currentSeconds = activeCycle
      ? activeCycle.minutes * 60 - secondsPassed
      : 0
    const minutesAmount = Math.floor(currentSeconds / 60)
    const secondsAmount = currentSeconds % 60
    const minutesForRepresentation = String(minutesAmount).padStart(2, '0')
    const secondsForRepresentation = String(secondsAmount).padStart(2, '0')
    return [minutesForRepresentation, secondsForRepresentation]
  }

  return (
    <Div.countDown className="text-Gray-100 flex gap-4">
      <span className="index-countdown">
        {minutesDisplay[0]} {minutesDisplay[1]}
      </span>
      <span className="index-countdown text-Green-500 w-16 overflow-hidden flex justify-center py-2 px-0">
        :
      </span>
      <span className="index-countdown">
        {secondsDisplay[0]} {secondsDisplay[1]}
      </span>
    </Div.countDown>
  )
}
