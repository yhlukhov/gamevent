import {collection, orderBy, query, getDocs, where} from 'firebase/firestore'
import { db } from '../firebase'
import type {Info} from '../types'

async function getInfo (lang:string) {
  const q = query(collection(db, "info"), where("lang", "==", lang), orderBy('position'))
  const qSnapshot = await getDocs(q)
  const info = [] as Array<Info>
  qSnapshot.forEach((doc) => {
    info.push(doc.data() as Info)
  })
  return info
}

export {getInfo}