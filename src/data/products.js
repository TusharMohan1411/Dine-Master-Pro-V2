import pizza from '../../public/images/food images/pizza/pizza.jpeg';
import paneerPizza from '../../public/images/food images/pizza/paneerPizza.jpeg';
import margheritaPizza from '../../public/images/food images/pizza/margheritaPizza.jpeg';
import veggiePizza from '../../public/images/food images/pizza/veggiePizza.jpg';
import pepperoniPizza from '../../public/images/food images/pizza/pepperoniPizza.jpeg';

import burger from '../../public/images/food images/burger/burger.jpeg';
import vegBurger from '../../public/images/food images/burger/vegBurger.jpeg';
import cheeseBurger from '../../public/images/food images/burger/cheeseBurger.jpeg';
import doublePattyBurger from '../../public/images/food images/burger/doublePattyBurger.jpg';

import chowmein from '../../public/images/food images/chowmein/chowmein.jpg';
import vegChowmein from '../../public/images/food images/chowmein/vegChowmein.jpeg';
import paneerChowmein from '../../public/images/food images/chowmein/paneerChowmein.jpeg';

import momos from '../../public/images/food images/momos/momos.jpg';
import vegMomos from '../../public/images/food images/momos/vegMomos.jpeg';
import paneerMomos from '../../public/images/food images/momos/paneerMomos.jpeg';
import friedMomos from '../../public/images/food images/momos/friedMomos.jpeg';

import manchurian from '../../public/images/food images/manchurian/manchurian.jpeg';
import vegManchurian from '../../public/images/food images/manchurian/vegManchurian.jpg';
import paneerManchurian from '../../public/images/food images/manchurian/paneerManchurian.jpeg';

import cutlets from '../../public/images/food images/cutlets/cutlets.jpeg';
import vegCutlet from '../../public/images/food images/cutlets/vegCutlet.jpg';
import paneerCutlet from '../../public/images/food images/cutlets/paneerCutlet.jpeg';

import patties from '../../public/images/food images/patties/patties.jpeg';
import vegPatties from '../../public/images/food images/patties/vegPatties.jpeg';
import paneerPatties from '../../public/images/food images/patties/paneerPatties.jpeg';
import cheesePatties from '../../public/images/food images/patties/cheesePatties.jpeg';

import samosa from '../../public/images/food images/samosa/samosa.jpeg';
import alooSamosa from '../../public/images/food images/samosa/alooSamosa.jpeg';
import paneerSamosa from '../../public/images/food images/samosa/paneerSamosa.jpeg';

import roll from '../../public/images/food images/roll/roll.jpeg';
import eggRoll from '../../public/images/food images/roll/eggRoll.jpeg';
import vegRoll from '../../public/images/food images/roll/vegRoll.jpeg';

import miscellaneous from '../../public/images/food images/miscellaneous/miscellaneous.png';
import frenchFries from '../../public/images/food images/miscellaneous/frenchFries.jpg';
import springRolls from '../../public/images/food images/miscellaneous/springRoll.jpg';

const PRODUCTS = {
    pizza: {
        image: pizza,
        paneerPizza: {
            name: 'Paneer Pizza',
            price: 200,
            image: paneerPizza,
            ingredients: ['Paneer', 'Cheese', 'Flour', 'Tomato Sauce'],
            recipe: [
                'Prepare the dough.',
                'Spread tomato sauce.',
                'Add cheese and paneer.',
                'Bake in oven.'
            ]
        },
        margheritaPizza: {
            name: 'Margherita Pizza',
            price: 180,
            image: margheritaPizza,
            ingredients: ['Cheese', 'Tomato', 'Flour'],
            recipe: [
                'Prepare the dough.',
                'Spread tomato slices.',
                'Add cheese.',
                'Bake in oven.'
            ]
        },
        veggiePizza: {
            name: 'Veggie Pizza',
            price: 220,
            image: veggiePizza,
            ingredients: ['Cheese', 'Veggies', 'Flour', 'Tomato Sauce'],
            recipe: [
                'Prepare the dough.',
                'Add veggies and sauce.',
                'Sprinkle cheese.',
                'Bake in oven.'
            ]
        },
        pepperoniPizza: {
            name: 'Pepperoni Pizza',
            price: 260,
            image: pepperoniPizza,
            ingredients: ['Pepperoni', 'Cheese', 'Flour', 'Tomato Sauce'],
            recipe: [
                'Prepare the dough.',
                'Add pepperoni and cheese.',
                'Bake in oven.'
            ]
        }
    },
    burger: {
        image: burger,
        vegBurger: {
            name: 'Veg Burger',
            price: 100,
            image: vegBurger,
            ingredients: ['Bun', 'Veg Patty', 'Lettuce', 'Tomato'],
            recipe: [
                'Grill the veg patty.',
                'Toast the buns.',
                'Assemble with lettuce and tomato.'
            ]
        },
        cheeseBurger: {
            name: 'Cheese Burger',
            price: 120,
            image: cheeseBurger,
            ingredients: ['Bun', 'Cheese', 'Patty', 'Lettuce'],
            recipe: [
                'Grill the patty.',
                'Toast the buns.',
                'Assemble with cheese and lettuce.'
            ]
        },
        doublePattyBurger: {
            name: 'Double Patty Burger',
            price: 180,
            image: doublePattyBurger,
            ingredients: ['Bun', 'Double Patty', 'Cheese', 'Lettuce'],
            recipe: [
                'Grill the patties.',
                'Toast the buns.',
                'Assemble with cheese and lettuce.'
            ]
        }
    },
    chowmein: {
        image: chowmein,
        vegChowmein: {
            name: 'Veg Chowmein',
            price: 80,
            image: vegChowmein,
            ingredients: ['Noodles', 'Veggies', 'Soy Sauce'],
            recipe: [
                'Boil the noodles.',
                'Stir-fry the veggies.',
                'Mix with noodles and sauce.'
            ]
        },
        paneerChowmein: {
            name: 'Paneer Chowmein',
            price: 110,
            image: paneerChowmein,
            ingredients: ['Noodles', 'Paneer', 'Veggies', 'Soy Sauce'],
            recipe: [
                'Boil the noodles.',
                'Cook the paneer and veggies.',
                'Mix with noodles and sauce.'
            ]
        },
    },
    momos: {
        image: momos,
        vegMomos: {
            name: 'Veg Momos',
            price: 60,
            image: vegMomos,
            ingredients: ['Flour', 'Vegetables', 'Oil'],
            recipe: [
                'Prepare the dough.',
                'Add vegetable filling.',
                'Steam until cooked.'
            ]
        },
        paneerMomos: {
            name: 'Paneer Momos',
            price: 70,
            image: paneerMomos,
            ingredients: ['Flour', 'Paneer', 'Oil'],
            recipe: [
                'Prepare the dough.',
                'Add paneer filling.',
                'Steam until cooked.'
            ]
        },
        friedMomos: {
            name: 'Fried Momos',
            price: 90,
            image: friedMomos,
            ingredients: ['Flour', 'Vegetables', 'Oil'],
            recipe: [
                'Prepare the dough.',
                'Add vegetable filling.',
                'Fry until golden brown.'
            ]
        },
    },
    manchurian: {
        image: manchurian,
        vegManchurian: {
            name: 'Veg Manchurian',
            price: 90,
            image: vegManchurian,
            ingredients: ['Vegetables', 'Soy Sauce', 'Cornflour'],
            recipe: [
                'Mix vegetables and form balls.',
                'Fry the balls.',
                'Cook in soy sauce.'
            ]
        },
        paneerManchurian: {
            name: 'Paneer Manchurian',
            price: 110,
            image: paneerManchurian,
            ingredients: ['Paneer', 'Soy Sauce', 'Cornflour'],
            recipe: [
                'Mix paneer and form balls.',
                'Fry the balls.',
                'Cook in soy sauce.'
            ]
        },
    },
    cutlets: {
        image: cutlets,
        vegCutlet: {
            name: 'Veg Cutlet',
            price: 70,
            image: vegCutlet,
            ingredients: ['Potatoes', 'Vegetables', 'Breadcrumbs'],
            recipe: [
                'Mix vegetables and form patties.',
                'Coat in breadcrumbs.',
                'Fry until golden brown.'
            ]
        },
        paneerCutlet: {
            name: 'Paneer Cutlet',
            price: 90,
            image: paneerCutlet,
            ingredients: ['Paneer', 'Breadcrumbs', 'Spices'],
            recipe: [
                'Mix paneer and form patties.',
                'Coat in breadcrumbs.',
                'Fry until golden brown.'
            ]
        },
    },
    patties: {
        image: patties,
        vegPatties: {
            name: 'Veg Patties',
            price: 40,
            image: vegPatties,
            ingredients: ['Flour', 'Vegetables', 'Spices'],
            recipe: [
                'Prepare the dough.',
                'Add vegetable filling.',
                'Bake until golden brown.'
            ]
        },
        paneerPatties: {
            name: 'Paneer Patties',
            price: 50,
            image: paneerPatties,
            ingredients: ['Flour', 'Paneer', 'Spices'],
            recipe: [
                'Prepare the dough.',
                'Add paneer filling.',
                'Bake until golden brown.'
            ]
        },
        cheesePatties: {
            name: 'Cheese Patties',
            price: 60,
            image: cheesePatties,
            ingredients: ['Flour', 'Cheese', 'Spices'],
            recipe: [
                'Prepare the dough.',
                'Add cheese filling.',
                'Bake until golden brown.'
            ]
        }
    },
    samosa: {
        image: samosa,
        alooSamosa: {
            name: 'Aloo Samosa',
            price: 20,
            image: alooSamosa,
            ingredients: ['Flour', 'Potato', 'Spices'],
            recipe: [
                'Prepare the dough.',
                'Add potato filling.',
                'Fry until golden brown.'
            ]
        },
        paneerSamosa: {
            name: 'Paneer Samosa',
            price: 25,
            image: paneerSamosa,
            ingredients: ['Flour', 'Paneer', 'Spices'],
            recipe: [
                'Prepare the dough.',
                'Add paneer filling.',
                'Fry until golden brown.'
            ]
        },
    },
    roll: {
        image: roll,
        eggRoll: {
            name: 'Egg Roll',
            price: 50,
            image: eggRoll,
            ingredients: ['Flour', 'Eggs', 'Spices'],
            recipe: [
                'Prepare the dough.',
                'Cook the eggs.',
                'Wrap in the dough and cook again.'
            ]
        },
        vegRoll: {
            name: 'Veg Roll',
            price: 40,
            image: vegRoll,
            ingredients: ['Flour', 'Vegetables', 'Spices'],
            recipe: [
                'Prepare the dough.',
                'Add vegetable filling.',
                'Wrap in the dough and cook again.'
            ]
        },
    },
    miscellaneous: {
        image: miscellaneous,
        frenchFries: {
            name: 'French Fries',
            price: 30,
            image: frenchFries,
            ingredients: ['Potatoes', 'Salt', 'Oil'],
            recipe: [
                'Cut potatoes into strips.',
                'Fry until golden brown.',
                'Sprinkle salt.'
            ]
        },
        springRolls: {
            name: 'Spring Rolls',
            price: 60,
            image: springRolls,
            ingredients: ['Flour', 'Vegetables', 'Spices'],
            recipe: [
                'Prepare the dough.',
                'Add vegetable filling.',
                'Fry until golden brown.'
            ]
        }
    }
};

export default PRODUCTS;
