import React from 'react'
import {render, screen, getByTestId, getByRole} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import EditableTitle from './EditableTitle'

const user = userEvent.setup()

describe('EditableTitle-React', () => {
    it('renders', () => {
        render(<EditableTitle />)
        const example = screen.getByTestId('editable-handle')
        expect(example).toBeInTheDocument()
    })
    xit('has an accessibly interactive element', async () => {
        render(<EditableTitle />)
        await user.tab()
        
        const editableTitle = screen.getByTestId('editable-title')
        const editHandle = getByRole(editableTitle, 'button')
        expect(editHandle).toHaveFocus()
    })
    it('starts editing', async () => {
        render(<EditableTitle />)
        const editHandle = screen.getByTestId('editable-handle')
        editHandle.focus()

        const editableTitle = screen.getByTestId('editable-title-link')

        await editHandle.click()

        // await needed to allow time for attribute to flip
        await expect(editableTitle).toHaveAttribute('contenteditable', 'true')
        expect(editableTitle).toHaveFocus()
      })
})
