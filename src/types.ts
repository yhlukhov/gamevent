import type { Timestamp } from "firebase/firestore"

type Event = {
  id: string
  title: string
  organizer: string
  details: string
  description: string
  datetime: Date
  elevendays: boolean
}

type NewEvent = {
  title: string
  organizer: string
  details: string
  description: string
  datetime: Date
  elevendays: boolean
}

type FSEvent = {
  id: string
  title: string
  organizer: string
  details: string
  description: string
  datetime: Timestamp
  elevendays: boolean
}

type Info = {
  title: string
  details: string
  lang: string
  position: number
}

export type {Event, NewEvent, FSEvent, Info}