import {collection, getDocs} from 'firebase/firestore'
import { db } from '../firebase'
import type {Info} from '../types'

async function getInfo () {
  const querySnap = await getDocs(collection(db, "info"))
  const info = [] as Array<Info>
  querySnap.forEach(doc => {
    info.push(doc.data() as Info)
  });
  return info
}

export {getInfo}