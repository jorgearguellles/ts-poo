import {Animal, Dog} from './protected';

const animal = new Animal('Elite');
animal.greeting();

const cheis = new Dog('Cheis', 'Jorge');
cheis.greeting();
cheis.woof(3);

