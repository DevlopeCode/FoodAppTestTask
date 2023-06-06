import {StackActions} from '@react-navigation/native';
import {createNavigationContainerRef} from '@react-navigation/native';
let _navigator: any;
export const navigationRef = createNavigationContainerRef();

function setTopLevelNavigator(navigatorRef: any) {
  _navigator = navigatorRef;
}

export const navigate = (name: string, params: Object) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};
function replace(routeName: string, params?: any) {
  _navigator.dispatch(StackActions.replace(routeName, params));
}

function goBack(target?: string) {
  _navigator.goBack(target ? target : undefined);
}

async function stackFirst(routeName: string, params: any = {}) {
  await navigate(routeName, params);
}

export default {
  setTopLevelNavigator,
  navigate,
  goBack,
  stackFirst,
  replace,
};
