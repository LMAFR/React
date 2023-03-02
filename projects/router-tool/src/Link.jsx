import { EVENTS } from './const'

export function navigate (href) {
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === 0 // allow only primary click
    const isModifiedEvent = event.metaKey || event.ctrlKey || event.altKey || event.shiftKey // If click is done while one of these keys are pressed
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && !isModifiedEvent && isManageableEvent) {
      // By default an anchor tag would reload the page when it is clicked
      // so we will prevent that default event in the line below before navigating
      event.preventDefault()
      navigate(to) // SPA (Single Page Application) navigation
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}
