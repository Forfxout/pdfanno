import $ from 'jquery';

/**
 * Disable the action of pageback, if `DEL` or `BackSpace` button pressed.
 */
function disablePagebackAction(e) {

    // Allow any keyboard events for <input/>.
    if (e.target.tagName.toLowerCase() === 'input') {
        return;
    }

    // Delete or BackSpace.
    if (e.keyCode == 46 || e.keyCode == 8) {
        e.preventDefault();

        if (e.type === 'keyup') {
            deleteSelectedAnnotations();
        }

        return false;
    }
}

/**
 * Delete selected annotations.
 */
function deleteSelectedAnnotations() {
    window.globalEvent.emit('deleteSelectedAnnotation');
}

// TODO NO NEED `enableViewMode` event ?

/**
 * Enable view mode.
 */
export function enableViewMode() {
    console.log('view:enableViewMode');

    document.removeEventListener('keyup', disablePagebackAction);
    document.removeEventListener('keydown', disablePagebackAction);
    document.addEventListener('keyup', disablePagebackAction);
    document.addEventListener('keydown', disablePagebackAction);

}

/**
 * Disable view mode.
 */
export function disableViewMode() {
    // TODO Remove me.
}
