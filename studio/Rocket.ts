import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';

export class Rocket implements Payload {
  massKg: number;
  name: string;
  totalCapacityKg: number;
  cargoItems: Cargo[] = [];
  astronauts: Astronaut[] = [];

  constructor(name: string, totalCapacityKg: number) {
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
  }

  sumMass(items: Payload[]): number {
    let sum = 0;
    sum = items.reduce((a, b) => b.massKg + a, 0);
    return sum;
  }

  currentMassKg(): number {
    return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
  }

  canAdd(item: Payload): boolean {
    let booleanVariable: boolean;
    this.currentMassKg() + item.massKg <= this.totalCapacityKg
      ? (booleanVariable = true)
      : (booleanVariable = false);

    return booleanVariable;
  }

  addCargo(cargo: Cargo): boolean {
    if (this.canAdd(cargo)) {
      this.cargoItems.push(cargo);
      return true;
    } else {
      return false;
    }
  }

  addAstronaut(astronaut: Astronaut): boolean {
    if (this.canAdd(astronaut)) {
      this.astronauts.push(astronaut);
      return true;
    } else {
      return false;
    }
  }
}
