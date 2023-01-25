import nprogress from 'nprogress'

export function showProgress() {
  nprogress.start()
}

export function doneProgress() {
  nprogress.done()
}
