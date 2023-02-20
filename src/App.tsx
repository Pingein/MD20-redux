import { useAppDispatch, useAppSelector } from './redux/store/hooks'
import styles from './App.module.scss'
import { Animal } from './redux/features/animals/types'
import { addAnimal, removeAnimal, setAnimals } from './redux/features/animals/animalsSlice'
import { useEffect } from 'react'
import SortableTable from './assets/SortableTable/SortableTable'
import Selection from './assets/Selection/Selection'
import { createApi } from '@reduxjs/toolkit/query'
import { generateID } from './assets/helper'
import ReduxApp from './redux/App/ReduxApp'
import MongoDBApp from './mongoDBApp/App/MongoDBApp'

function App() {



  return (
    <div className={styles.App}>

      <ReduxApp/>
      <MongoDBApp/>

    </div>
  )
}

export default App
