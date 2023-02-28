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

  it('has a focusable element', async () => {
    const button = getByRole(container, 'button')
    await button.focus()
    expect(button).toHaveFocus()

    await user.tab()

    const editHandle = getByTestId(container, 'edit-handle')
    expect(editHandle).toHaveFocus()
  })
})
