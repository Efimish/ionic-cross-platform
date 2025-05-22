import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { musicalNotes, search, settings } from 'ionicons/icons';
import routes from './routes.json';
import Main from './pages/Main';
import Search from './pages/Search';
import Settings from './pages/Settings';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path={routes.main}>
            <Main />
          </Route>
          <Route exact path={routes.search}>
            <Search />
          </Route>
          <Route exact path={routes.settings}>
            <Settings />
          </Route>
          <Route exact path="/">
            <Redirect to={routes.main} />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab={routes.main} href={routes.main}>
            <IonIcon aria-hidden="true" icon={musicalNotes} />
            <IonLabel>Main</IonLabel>
          </IonTabButton>
          <IonTabButton tab={routes.search} href={routes.search}>
            <IonIcon aria-hidden="true" icon={search} />
            <IonLabel>Search</IonLabel>
          </IonTabButton>
          <IonTabButton tab={routes.settings} href={routes.settings}>
            <IonIcon aria-hidden="true" icon={settings} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
