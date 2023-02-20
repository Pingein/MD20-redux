import React, { useState } from "react";
import { generateID } from "../../assets/helper";
import { Animal } from "../../redux/features/animals/types";
import styles from "./MongoDBApp.module.scss";
import Selection from "../../assets/Selection/Selection";

interface MongoDBAppParams {}

const MongoDBApp = ({}: MongoDBAppParams) => {
  return (
    <div>
      <div className={styles.reactApp}>
        MongoDB
        <div>
          <form
            className={styles.inputForm}
            onSubmit={(e) => {
              e.preventDefault();
              const animalName = e.currentTarget
                .childNodes[0] as HTMLInputElement;
              const animalClass = e.currentTarget
                .childNodes[1] as HTMLSelectElement;
              const animalLegCount = e.currentTarget
                .childNodes[2] as HTMLInputElement;
              const animalDiet = e.currentTarget
                .childNodes[3] as HTMLInputElement;
              const animalEndangerment = e.currentTarget
                .childNodes[4] as HTMLInputElement;

              let errCount = 0;

              if (!animalName.value.match(RegExp(/\w{2,50}/))) {
                console.log("name must be between 2 and 50 characters");
                errCount += 1;
              }
              if (!animalClass.value) {
                console.log("please select animal class");
                errCount += 1;
              }
              if (!animalLegCount.value || +animalLegCount.value < 0) {
                console.log("please enter a poisitive leg count integer");
                errCount += 1;
              }
              if (!animalDiet.value) {
                console.log("please select animal diet");
                errCount += 1;
              }
              if (!animalEndangerment.value) {
                console.log("please select animal conservation status");
                errCount += 1;
              }

              if (errCount) {
                return;
              }

              const animal: Animal = {
                _id: generateID(),
                name: animalName.value,
                class: animalClass.value,
                legCount: +animalLegCount.value,
                diet: animalDiet.value,
                endangerment: animalEndangerment.value,
              };

              console.log(animal);

              //dispatch(addAnimal(animal))
            }}
          >
            <input type="text" placeholder="Enter animal name" />

            <Selection
              placeholder="Select class"
              options={[
                "Mammal",
                "Bird",
                "Insect",
                "Fish",
                "Reptile",
                "Amphibian",
              ]}
            />

            <input type="number" placeholder="Enter leg count" />

            <Selection
              placeholder="Select diet"
              options={["Carnivore", "Herbivore", "Omnivore"]}
            />
            <Selection
              placeholder="Select conservation status"
              options={[
                "Least concern",
                "Near threatened",
                "Vulnerable",
                "Endangered",
                "Critically endangered",
                "Extinct in the wild",
                "Extinct",
              ]}
            />
            <button>Add animal</button>
          </form>

          <button onClick={() => {}}>Reset</button>

          <table className={styles.animalsTable}>
            <thead>
              <tr>
                <td>
                  <input type="text" className={styles.searchParam} />
                </td>
                <td>
                  <input type="text" className={styles.searchParam} />
                </td>
                <td>
                  <input type="number" className={styles.searchParam} />
                </td>
                <td>
                  <input type="text" className={styles.searchParam} />
                </td>
                <td>
                  <input type="text" className={styles.searchParam} />
                </td>
              </tr>
              <tr>
                <td className={styles.animalsHeadCell}>Name</td>
                <td className={styles.animalsHeadCell}>Class</td>
                <td className={styles.animalsHeadCell}>Leg count</td>
                <td className={styles.animalsHeadCell}>Diet</td>
                <td className={styles.animalsHeadCell}>Endangerment</td>
              </tr>
            </thead>
            <tbody>
              {/* {animals.map(animal => {
                        return (
                        <tr>
                            <td>
                            {animal.name}
                            </td>
                            <td>
                            {animal.class}
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
                    })} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MongoDBApp;