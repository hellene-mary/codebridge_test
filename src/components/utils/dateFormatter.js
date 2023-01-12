import { format } from "date-fns"

export function dateFormater(date) {
  return format(new Date(date), "MMMM do, yyyy")
}
