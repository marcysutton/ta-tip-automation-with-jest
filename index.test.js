import prettify from "prettify"
import { JSDOM } from "jsdom"
import { screen } from "@testing-library/dom"
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'

const user = userEvent.setup()
let document
let container

describe('Editable title', () => {
  beforeEach(() => {
    return JSDOM.fromFile('./index.html')
    .then((dom) => {
      document = dom.window.document
      container = dom.window.document.querySelector('main')
    })
  })

  it('has a focusable element', () => {
    user.tab()
    console.log(container.innerHTML)
    const editHandle = screen.queryByTestId('edit-handle')
    expect(editHandle).toHaveFocus()
  })
})
