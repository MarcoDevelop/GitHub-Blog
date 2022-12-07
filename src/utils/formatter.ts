import moment from 'moment'

export function FormatterDate(date: string) {
  return moment(date).fromNow()
}
