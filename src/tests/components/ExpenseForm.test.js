import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';


test("should render exoenseform corectly", () => {
    const wrapper = shallow( < ExpenseForm /> );
    expect(wrapper).toMatchSnapshot();
});



test("should render error for invalid form submition", () => {
    const wrapper = shallow( < ExpenseForm /> );
    
    wrapper.find('form').simulate('submit' ,{ 
        preventDefault: () => { }
    });

    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
    
});


