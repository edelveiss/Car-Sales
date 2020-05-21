import { ADD_FEATURE, REMOVE_FEATURE } from "../actions";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

export const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.payload.price,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload],
        },
        additionalFeatures: state.additionalFeatures.filter(
          (feature) => feature.id !== action.payload.id
        ),
      };

    case REMOVE_FEATURE:
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.payload.price,
        car: {
          ...state.car,
          features: state.car.features.filter(
            (feature) => feature.id !== action.payload.id
          ),
        },
        additionalFeatures: [...state.additionalFeatures, action.payload],
      };
    default:
      return state;
  }
};

//--------------------------------------------------
// import { ADD_FEATURE, REMOVE_FEATURE } from "../actions";

// const initialState = {
//   additionalPrice: 0,
//   car: {
//     price: 26395,
//     name: "2019 Ford Mustang",
//     image:
//       "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
//     features: [],
//   },
//   additionalFeatures: [
//     { id: 1, name: "V-6 engine", price: 1500 },
//     { id: 2, name: "Racing detail package", price: 1500 },
//     { id: 3, name: "Premium sound system", price: 500 },
//     { id: 4, name: "Rear spoiler", price: 250 },
//   ],
// };

// export const carReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_FEATURE:
//       return {
//         ...state,
//         additionalPrice: state.additionalPrice + action.payload.price,
//         car: {
//           ...state.car,
//           features: [...state.car.features, action.payload],
//         },
//         additionalFeatures: state.additionalFeatures.filter(
//           (feature) => feature.id !== action.payload.id
//         ),
//       };

//     case REMOVE_FEATURE:
//       return {
//         ...state,
//         additionalPrice: state.additionalPrice - action.payload.price,
//         car: {
//           ...state.car,
//           features: state.car.features.filter(
//             (feature) => feature.id !== action.payload.id
//           ),
//         },
//         additionalFeatures: [...state.additionalFeatures, action.payload],
//       };
//     default:
//       return state;
//   }
// };

//--------------------------------------------------------------

// import { ADD_FEATURE, REMOVE_FEATURE } from "../actions";

// const initialState = {
//   cars: [
//     {
//       id: 1,
//       additionalPrice: 0,
//       car: {
//         price: 26395,
//         name: "2019 Ford Mustang",
//         image:
//           "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
//         features: [],
//       },
//       additionalFeatures: [
//         { id: 1, name: "V-6 engine", price: 1500 },
//         { id: 2, name: "Racing detail package", price: 1500 },
//         { id: 3, name: "Premium sound system", price: 500 },
//         { id: 4, name: "Rear spoiler", price: 250 },
//       ],
//     },

//     {
//       id: 2,
//       additionalPrice: 0,
//       car: {
//         price: 20800,
//         name: "2020 Honda",
//         image:
//           "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
//         features: [],
//       },
//       additionalFeatures: [
//         { id: 1, name: "V-6 engine", price: 1500 },
//         { id: 2, name: "Racing detail package", price: 1500 },
//         { id: 3, name: "Premium sound system", price: 500 },
//         { id: 4, name: "Rear spoiler", price: 250 },
//       ],
//     },

//     {
//       id: 3,
//       additionalPrice: 0,
//       car: {
//         price: 50000,
//         name: "2019 Tesla",
//         image:
//           "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
//         features: [],
//       },
//       additionalFeatures: [
//         { id: 1, name: "V-6 engine", price: 1500 },
//         { id: 2, name: "Racing detail package", price: 1500 },
//         { id: 3, name: "Premium sound system", price: 500 },
//         { id: 4, name: "Rear spoiler", price: 250 },
//       ],
//     },
//   ],
// };

// export const carReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_FEATURE:
//       return {
//         ...state,
//         cars: state.cars.map((el) => {
//           el.id === action.id
//             ? {
//                 ...state,
//                 additionalPrice: state.additionalPrice + action.payload.price,
//                 car: {
//                   ...state.car,
//                   features: [...state.car.features, action.payload],
//                 },
//                 additionalFeatures: state.additionalFeatures.filter(
//                   (feature) => feature.id !== action.payload.id
//                 ),
//               }
//             : el;
//         }),
//       };

//     case REMOVE_FEATURE:
//       return {
//         ...state,
//         cars: state.cars.map((el) => {
//           el.id === action.id
//             ? {
//                 ...state,
//                 additionalPrice: state.additionalPrice - action.payload.price,
//                 car: {
//                   ...state.car,
//                   features: state.car.features.filter(
//                     (feature) => feature.id !== action.payload.id
//                   ),
//                 },
//                 additionalFeatures: [
//                   ...state.additionalFeatures,
//                   action.payload,
//                 ],
//               }
//             : el;
//         }),
//       };
//     default:
//       return state;
//   }
// };
