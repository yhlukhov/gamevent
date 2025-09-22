import {
  doc,
  addDoc,
  getDoc,
  getDocs,
  query,
  orderBy,
  updateDoc,
  deleteDoc,
  collection,
  Timestamp,
  where,
} from 'firebase/firestore'
import { db } from '../firebase'
import type { Event, NewEvent, FSEvent } from '../types'

async function getAllEvents(admin?: boolean) {
  const q = admin
    ? query(collection(db, 'events'), orderBy('datetime'))
    : query(collection(db, 'events'), where("datetime", ">", new Date()), orderBy('datetime'))
  const querySnapshot = await getDocs(q)
  const events = [] as Array<Event>
  querySnapshot.forEach((doc) => {
    const id = doc.id
    const data = doc.data() as FSEvent
    events.push({ ...data, id, datetime: data.datetime.toDate() })
  })
  return events
}

async function getEvent(id: string) {
  const docRef = doc(db, 'events', id)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    const data = docSnap.data() as FSEvent
    return { ...data, id, datetime: data.datetime.toDate() } as Event
  } else {
    return null
  }
}

async function addNewEvent(event: NewEvent) {
  const ref = await addDoc(collection(db, 'events'), {
    ...event,
    datetime: Timestamp.fromDate(event.datetime),
  })
  return ref.id
}

async function editEvent(event: NewEvent, id: string) {
  const ref = doc(db, 'events', id)
  await updateDoc(ref, {
    ...event,
    datetime: Timestamp.fromDate(event.datetime),
  })
}

async function deleteEvent(id: string) {
  await deleteDoc(doc(db, 'events', id))
}

export { getAllEvents, getEvent, addNewEvent, editEvent, deleteEvent }
