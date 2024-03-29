import {Navigation} from 'react-native-navigation';

import Login from './Login';
import Home from './Home';
import Score from './Score';
import StartRun from './StartRun';
import News from './News';
import NewsDetail from './NewsDetail';
// register all screens of the app (including internal ones)
export function registerScreens() {

  Navigation.registerComponent('parcel.Login', () => Login);
  Navigation.registerComponent('parcel.Home', () => Home);
  Navigation.registerComponent('parcel.Score', () => Score);
  Navigation.registerComponent('parcel.StartRun', () => StartRun);
  Navigation.registerComponent('parcel.News', () => News);
  Navigation.registerComponent('parcel.NewsDetail', () => NewsDetail);

}
