import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./Containers/BurgerBuilder/BurgerBuilder";
import Checkout from './Containers/Checkout/Checkout'
import { Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/checkout' component={Checkout} />
          <Route path='/' exact component={BurgerBuilder} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

//33