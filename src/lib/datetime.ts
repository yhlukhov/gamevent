function dateToLocaleStr(date: Date) {
  const yyyy = date.getFullYear()
  const MM = leadZero(date.getMonth() + 1)
  const dd = leadZero(date.getDate())
  const hh = leadZero(date.getHours())
  const mm = leadZero(date.getMinutes())
  return `${yyyy}-${MM}-${dd}T${hh}:${mm}`
}

function leadZero(n: number) {
  return n < 10 ? `0${n}` : `${n}`
}

function displayDateTime(date: Date) {
  return date.toLocaleString(navigator.language, {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    minute: 'numeric',
    hour: 'numeric',
    hour12: false,
  })
}

function shortDateTime(date: Date) {
  return date.toLocaleString(navigator.language, {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    minute: 'numeric',
    hour: 'numeric',
    hour12: false,
  })
}

export { dateToLocaleStr, displayDateTime, shortDateTime }
