import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const EditableTitle = () => {
    const [isEditing, setIsEditing] = useState(false)

    return (
        <h3 data-testid="editable-title"
            className={isEditing ? 'editing' : null}
        >
            <a 
                href="https://codepen.io/marcysutton/pen/JjBqzxx"
                contentEditable={isEditing ? 'true' : 'false'}
                className="ItemTitle_titleLink"
                id="editable-title-span"
                data-testid="editable-title-link"
                title="Testing Accessibility Tips: Accessibility TDD"
            >
                Testing Accessibility Tips: Accessibility TDD
            </a>
            <span
                data-testid="editable-handle"
                onClick={()=> { setIsEditing(!isEditing) }}
            >
                <svg
                    className="ItemTitle_iconEdit"
                    viewBox="0 0 100 100"
                >
                    <path d="M24.56 92.536 0 100l7.453-24.583c6.356-.244 17.322 10.792 17.107 17.119zM96.617 32.082l-.475.471L67.383 3.766l.472-.472c12.927-12.94 42.016 15.517 28.762 28.788zM61.64 9.516l28.758 28.785-46.303 46.345c-1.222 1.221-2.234.884-2.234.884l2.314-15.356-14.454.074.072-14.468-15.342 2.312s-.34-1.011.883-2.234L61.64 9.516z"></path>
                </svg>
            </span>
        </h3>
    )
}

export default EditableTitle
