import './style.css'
import Header from './components/Header'
import Card from './components/Card'
import { apiData } from './helper/data'

const headerData = {
  titulo: 'Employee database',
  giro: 'Universidad'
}

document.body.appendChild(Header(headerData))

apiData.forEach(element => {
  document.body.appendChild(Card(element))
})
