import prettify from "prettify"
import { JSDOM } from "jsdom"
import { getByText, getByTestId, getByRole } from "@testing-library/dom"
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'

let user
let document
let container

describe('Editable title', () => {
  beforeEach(() => {
    const options = {
      resources: 'usable',
      runScripts: 'dangerously',
    }
    return JSDOM.fromFile('./index.html', options)
      .then((dom) => {
        document = dom.window.document
        container = dom.window.document.querySelector('main')

        // tell userEvent to use loaded DOM
        // necessary to use .tab()
        user = userEvent.setup({document: document})
      })
  })

  it('has an accessibly-interactive element', async () => {
    await user.tab()

    const editableTitle = getByTestId(container, 'editable-title')
    // .toHaveRole('button') would be nice here
    const editHandle = editableTitle.getByRole('button')
    expect(editHandle).toHaveFocus()
  })
  it('starts editing with Enter key', async () => {
    const editHandle = getByTestId(container, 'editable-handle')
    editHandle.focus()
    const editableTitle = getByTestId(container, 'editable-title-link')
    await user.keyboard('Enter')

    expect(editableTitle).toHaveAttribute('contenteditable')
    expect(editableTitle).toHaveFocus()
  })
  it('stops editing with the Escape key', async () => {

  })
  it('applies a selection with the Enter key after editing', async () => {

  })
})
