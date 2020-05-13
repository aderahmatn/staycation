import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { render } from '@testing-library/react'
import Button from './index'

test('should not allowed  click button if isDisable is present', () => {
    const {container} = render(<Button isDisable></Button>)

    expect(container.querySelector('span.disabled')).toBeInTheDocument()
})

test('should render laoding/spinner', () => {
    const {container, getByText} = render(<Button isLoading></Button>)

    expect(getByText(/loading/i)).toBeInTheDocument()
    expect(container.querySelector('span')).toBeInTheDocument()
})

test('should render <a> tag', () => {
    const {container} = render(<Button href="" type="link" isExternal></Button>)

    expect(container.querySelector('a')).toBeInTheDocument()
})

test('should render <Link> component', () => {
    const {container} = render(<Route><Router><Button href="" type="button"></Button></Router></Route>)

    expect(container.querySelector('a')).toBeInTheDocument()
})
