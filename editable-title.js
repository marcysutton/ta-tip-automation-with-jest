const EditableTitle = (elem) => {
    
    const $elem = document.querySelector(elem)
    const $editableTitle = $elem.querySelector('.ItemTitle_titleLink')
    const $editHandle = $elem.querySelector('.ItemTitle_iconEdit')
    let state = { editing: false }

    let render = () => {
        if (state.editing) {
            startEdit();
            $editableTitle.addEventListener('click', titleEditFn);
            $editableTitle.addEventListener('keydown', titleEditFn);
        } else {
            stopEdit();
            $editableTitle.removeEventListener('click', titleEditFn);
            $editableTitle.removeEventListener('keydown', titleEditFn);
        }
    }

    $editHandle.addEventListener('click', (event) => {
        if (!$elem.contains(event.target)) return;

        state.editing === true ?
            state.editing = false :
            state.editing = true;

        render();
    });
    const startEdit = () => {
        document.addEventListener('click', docClickFn);
        state.editing = true;
        $editableTitle.contentEditable = true;
        $elem.classList.add("editing");
        $editableTitle.focus();
    }
    const stopEdit = () => {
        document.removeEventListener('click', docClickFn);
        state.editing = false;
        $editableTitle.contentEditable = false;
        $elem.classList.remove("editing");
        $editableTitle.blur();
    }
    const docClickFn = (event) => {
        if (!$elem.contains(event.target)) {
            stopEdit();
        }
    }
    const titleEditFn = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            
            stopEdit();
        }
    }

    return $elem
}

