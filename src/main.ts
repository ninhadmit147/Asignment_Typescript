import Navigo from 'navigo'
import './index.css'
import Admin from './page/admin';
import AddProd from './page/admin/addProd';
import UpdateProd from './page/admin/updateProd';
import Signin from './page/auth/signin';
import Signup from './page/auth/signup';
import HomePage from './page/homePgae';
import Card from './page/user/card';
import DetailProd from './page/user/detailProuct';
import Gear from './page/user/filter/gear';
import Laptop from './page/user/filter/laptop';
import Mobile from './page/user/filter/mobile';
import Tables from './page/user/filter/tables';

const router = new Navigo('/', { linksSelector: "a" });

export type ComponetBase = {
  render: (id: any) => Promise<string>
  afterRender?: () => void
}

const print = async (component: ComponetBase, id: ComponetBase, params?: any) => {
  document.getElementById('app').innerHTML = await component.render(id)
  if (component.afterRender) {
    component.afterRender(id)
  }
}

router.on({
  '/': () => print(HomePage),
  '/gear': () => print(Gear),
  '/mobile': () => print(Mobile),
  '/tables': () => print(Tables),
  '/laptop': () => print(Laptop),
  '/card': () => print(Card),
  '/product/:id': (data: any) => {
    const id = +data.data.id
    print(DetailProd, id)
  },
  '/admin/products': () => print(Admin),
  '/admin/product/add': () => print(AddProd),
  '/admin/product/:id/update': (data: any) => {
    const id = +data.data.id
    print(UpdateProd, id)
  },
  '/signin': () => print(Signin),
  '/signup': () => print(Signup),

})

router.resolve()