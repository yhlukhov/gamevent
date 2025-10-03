import { collection, orderBy, query, getDocs, where } from 'firebase/firestore'
import type { Info, Video } from '../types'
import { db } from '../firebase'

async function getInfo(lang: string) {
  const q = query(
    collection(db, 'info'),
    where('lang', '==', lang),
    orderBy('position')
  )
  const qSnapshot = await getDocs(q)
  const info = [] as Array<Info>
  qSnapshot.forEach((doc) => {
    info.push(doc.data() as Info)
  })
  return info
}

async function getVideos() {
  const q = query(collection(db, 'videos'))
  const qSnapshot = await getDocs(q)
  const videos = [] as Array<Video>
  qSnapshot.forEach((doc) => {
    videos.push({ id: doc.id, ...doc.data() } as Video)
  })
  return videos
}

export { getInfo, getVideos }
