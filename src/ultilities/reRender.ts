import { ComponetBase } from "../main"

export async function rerender(elementId, content: ComponetBase) {
    if (elementId) {
        document.querySelector(elementId).innerHTML = await content.render();
    }
    if (content.afterRender) content.afterRender();
}