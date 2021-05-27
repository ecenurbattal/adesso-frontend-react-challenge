import HomeScreen from '../screens/Home/HomeScreen';
import UnitsScreen from '../screens/Units/UnitsScreen';
import UnitDetailScreen from '../screens/UnitDetail/UnitDetailScreen';

export const routes = [
    {
        path:'/',
        title:'Home',
        exact:true,
        component: () => <HomeScreen/>,
        isLink: true
    },
    {
        path:'/units',
        title:'Units',
        exact:true,
        component: () => <UnitsScreen/>,
        isLink:true
    },
    {
        path:'/units/:unitId',
        title:'Unit Detail',
        exact:true,
        component: () => <UnitDetailScreen/>,
        isLink:false
    }
]