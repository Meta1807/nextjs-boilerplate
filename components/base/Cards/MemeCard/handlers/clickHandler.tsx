const clickHandler = (loading, saved, saveFunction, removeFunction) => {
  if (loading) {
    if (!saved) {
      saveFunction()
    } else {
      removeFunction()
    }
  }
}

export default clickHandler
