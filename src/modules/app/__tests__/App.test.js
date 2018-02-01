/* eslint no-undef: "off" */
import React from 'react'
// import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import App from '../components/App'

// import { BrowserRouter as Router } from 'react-router-dom'

describe('components', () => {
  describe('<App />', () => {

    const appC = shallow(<App />)

    /*it('renders without crashing', () => {
      const div = document.createElement('div')
      ReactDOM.render(<Router><App /></Router>, div)
      ReactDOM.unmountComponentAtNode(div)
    })*/

    it('always renders a div', () => {
      const divs = appC.find('div')
      expect(divs.length).toBeGreaterThan(0)
    })

    it('has correct className', () => {
      expect(appC.find('div').hasClass('app')).toBe(true)
    })

    it('matches snapshot', () => {
      expect(appC).toMatchSnapshot()
    })

    it('has required Routes', () => {
      const routes = appC.find('Route')
      expect(routes.length).toBe(2)
    })

  })
})