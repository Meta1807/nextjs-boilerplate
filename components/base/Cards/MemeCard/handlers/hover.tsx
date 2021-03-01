const onHover = (timer, setState) => {
  clearTimeout(timer)
  setState(true)
}

const onLeave = (setTimer, setState, duration) => {
  setTimer(
    setTimeout(() => {
      setState(false)
    }, duration)
  )
}

export { onHover, onLeave }
