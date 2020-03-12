import React from 'react'
import Enzyme ,{shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Button from './Button'

descibe('Button',() => {
	it('should show Text', () =>{
		const wrapper = shallow(<Button/>);
	})
})