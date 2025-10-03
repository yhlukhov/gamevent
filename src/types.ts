import type { Timestamp } from "firebase/firestore"

type Event = {
  id: string
  title: string
  organizer: string
  details: string
  description: string
  datetime: Date
}

type NewEvent = {
  title: string
  organizer: string
  details: string
  description: string
  datetime: Date
}

type FSEvent = {
  id: string
  title: string
  organizer: string
  details: string
  description: string
  datetime: Timestamp
}

type Info = {
  title: string
  details: string
  lang: string
  position: number
}

type Video = {
  id: string
  title: string
}

export type {Event, NewEvent, FSEvent, Info, Video}