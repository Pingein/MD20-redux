import React, { useEffect, useState } from 'react'
import { generateID } from '../../assets/helper'
import { addAnimal, setAnimals, removeAnimal } from '../features/animals/animalsSlice'
import { Animal } from '../features/animals/types'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import styles from './ReduxApp.module.scss'
import Selection from '../../assets/Selection/Selection'


interface ReduxAppParams {

}

const ReduxApp = ({}:ReduxAppParams) => {

    const dispatch = useAppDispatch()

    const animals = useAppSelector((store) => {
      return store.animals.animals
    })
  
    useEffect(() => {
      localStorage.setItem('animals', JSON.stringify(animals))
    }, [animals])

    return (
        <div className={styles.reactApp}>
        React-redux
        <div>

          <form className={styles.inputForm}
                onSubmit={(e) => {
                  e.preventDefault()
                  const animalName = e.currentTarget.childNodes[0] as HTMLInputElement
                  const animalClass = e.currentTarget.childNodes[1] as HTMLSelectElement
                  const animalLegCount = e.currentTarget.childNodes[2] as HTMLInputElement
                  const animalDiet = e.currentTarget.childNodes[3] as HTMLInputElement
                  const animalEndangerment = e.currentTarget.childNodes[4] as HTMLInputElement
                  
                  let errCount = 0


                  if (!animalName.value.match(RegExp(/\w{2,50}/))) {
                    console.log('name must be between 2 and 50 characters')
                    errCount += 1
                  }
                  if (!animalClass.value) {
                    console.log('please select animal class')
                    errCount += 1
                  }
                  if (!animalLegCount.value || +animalLegCount.value < 0) {
                    console.log('please enter a poisitive leg count integer')
                    errCount += 1
                  }
                  if (!animalDiet.value) {
                    console.log('please select animal diet')
                    errCount += 1
                  }
                  if (!animalEndangerment.value) {
                    console.log('please select animal conservation status')
                    errCount += 1
                  }

                  if (errCount) {
                    return
                  }

                  const animal:Animal = {
                    _id: generateID(),
                    name: animalName.value,
                    animalClass: animalClass.value,
                    legCount: +animalLegCount.value,
                    diet: animalDiet.value,
                    endangerment: animalEndangerment.value,
                  }

                  console.log(animal)

                  dispatch(addAnimal(animal))
          }}>
            <input type="text" 
                   placeholder='Enter animal name'/>

            <Selection placeholder='Select class' 
                       options={['Mammal', 'Bird', 'Insect', 'Fish', 'Reptile', 'Amphibian']}/>

            <input type="number" 
                   placeholder='Enter leg count'/>
            
            <Selection placeholder='Select diet' 
                       options={['Carnivore', 'Herbivore', 'Omnivore']}/>
            <Selection placeholder='Select conservation status' 
                       options={['Least concern', 'Near threatened', 'Vulnerable', 
                                 'Endangered', 'Critically endangered', 'Extinct in the wild', 'Extinct']}/>   
            <button>
              Add animal
            </button>
          </form>

          <button onClick={() => {
            dispatch(setAnimals([]))
          }}>
            Reset
          </button>

          <table className={styles.animalsTable}>
            <thead>
              <tr>
                <td className={styles.animalsHeadCell}>
                  Name
                </td>
                <td className={styles.animalsHeadCell}>
                  Class
                </td>
                <td className={styles.animalsHeadCell}>
                  Leg count
                </td>
                <td className={styles.animalsHeadCell}>
                  Diet
                </td>
                <td className={styles.animalsHeadCell}>
                  Endangerment
                </td>
              </tr>
            </thead>
            <tbody>
              {animals.map(animal => {
                return (
                  <tr>
                    <td>
                      {animal.name}
                    </td>
                    <td>
                      {animal.animalClass}
                    </td>
                    <td>
                      {animal.legCount}
                    </td>
                    <td>
                      {animal.diet}
                    </td>
                    <td>
                      {animal.endangerment}
                    </td>
                    <td onClick={() => {
                      dispatch(removeAnimal(animal._id))
                    }}>
                      Del
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
}


export default ReduxApp