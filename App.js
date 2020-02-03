import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
// import custom components here (Don't need file ending)
import ComponentsScreen from './src/screens/ComponentsScreen';
import MyScreen from './src/screens/MyScreen';
import ListScreen from './src/screens/ListScreen';
import Exercise1 from './src/screens/Exercise1';
import ImageScreen from './src/screens/ImageScreen';
import CounteScreen from './src/screens/CounterScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColourScreen from './src/screens/ColourScreen';
import SquareScreen from './src/screens/SquareScreen';
import SquareReducer from './src/screens/SquareReducer';
import ReducerConvention from './src/screens/ReducerConvention';
import ReducerExercise from './src/screens/ReducerExercise';
import TextScreen from './src/screens/TextScreen';

// Stack navigator decides what to show on screen 
// Add custom components to options for stack navigator to display
// React navigation is a library used in a tonne of projects to deal with navigation 
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Mine: MyScreen,
    List: ListScreen,
    Ex1: Exercise1,
    Image: ImageScreen,
    Counter: CounterScreen,
    Colour: ColourScreen,
    Square: SquareScreen,
    Reducer: SquareReducer,
    Convention: ReducerConvention,
    Ex2: ReducerExercise,
    Text: TextScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  },
);

export default createAppContainer(navigator);
