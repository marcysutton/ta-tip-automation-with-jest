import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import EditableTitle from './EditableTitle'

const user = userEvent.setup()

describe('EditableTitle-React', () => {
    it('renders', () => {
        render(<EditableTitle />)
        const example = screen.getByTestId('edit-handle')
        expect(example).toBeInTheDocument()
    })
    it('has a focusable element', async () => {
        render(<EditableTitle />)
        await user.tab()
        
        const editHandle = screen.getByTestId('edit-handle')
        expect(editHandle).toHaveFocus()
    })
})
