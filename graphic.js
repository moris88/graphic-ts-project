var Graphic;
(function (Graphic) {
    let rootHTMLElement = null;
    function removeTag(tag) {
        const element = window.document.getElementById(tag.id);
        element === null || element === void 0 ? void 0 : element.remove();
    }
    Graphic.removeTag = removeTag;
    function removeTags(tags) {
        if (tags.length > 0) {
            tags.forEach(tag => {
                const element = window.document.getElementById(tag.id);
                element === null || element === void 0 ? void 0 : element.remove();
            });
        }
    }
    Graphic.removeTags = removeTags;
    function createHTMLObject(classes, disabled = false) {
        return {
            classes: classes ? classes : '',
            disabled: disabled
        };
    }
    Graphic.createHTMLObject = createHTMLObject;
    function addTags(parent, childs) {
        if (parent !== null) {
            childs.forEach(child => {
                parent.innerHTML += `${child.html}`;
            });
        }
        else
            throw new Error('Not found parent HTMLElement');
    }
    Graphic.addTags = addTags;
    function addTagToParent(parent, child) {
        let temp = window.document.getElementById(parent.id);
        if (temp !== null)
            temp.innerHTML += `${child.html}`;
        else
            throw new Error('No tag parent');
    }
    Graphic.addTagToParent = addTagToParent;
    function addTagsToParent(parent, childs) {
        let temp = window.document.getElementById(parent.id);
        if (temp !== null) {
            childs.forEach(child => {
                if (temp !== null)
                    temp.innerHTML += `${child.html}`;
            });
        }
        else
            throw new Error('No tag parent');
    }
    Graphic.addTagsToParent = addTagsToParent;
    function addTagToRoot(child) {
        if (rootHTMLElement !== null)
            rootHTMLElement.innerHTML += `${child.html}`;
        else
            throw new Error('No tag root');
    }
    Graphic.addTagToRoot = addTagToRoot;
    function addTagsToRoot(childs) {
        if (rootHTMLElement !== null) {
            childs.forEach(child => {
                if (rootHTMLElement !== null)
                    rootHTMLElement.innerHTML += `${child.html}`;
            });
        }
        else
            throw new Error('No tag root');
    }
    Graphic.addTagsToRoot = addTagsToRoot;
    function setRoot(id) {
        let root = window.document.getElementById(id);
        if (root !== null)
            rootHTMLElement = root;
        else
            throw new Error('Not found root HTMLElement');
    }
    Graphic.setRoot = setRoot;
    function getRoot() {
        if (rootHTMLElement !== null)
            return rootHTMLElement;
        else
            throw new Error('No tag root');
    }
    Graphic.getRoot = getRoot;
    function createTitle(text, size, other) {
        const id = `h${size}_` + generateRandomString(10);
        const className = (other === null || other === void 0 ? void 0 : other.classes) ? `class="${other === null || other === void 0 ? void 0 : other.classes}"` : '';
        return {
            type: `h${size}`,
            id: id,
            html: `<h${size} id="${id}" ${className}>${text}</h${size}>`,
        };
    }
    Graphic.createTitle = createTitle;
    function createParagraph(text, other) {
        const id = 'p_' + generateRandomString(10);
        const className = (other === null || other === void 0 ? void 0 : other.classes) ? `class="${other === null || other === void 0 ? void 0 : other.classes}"` : '';
        return {
            type: 'p',
            id: id,
            html: `<p id="${id}" ${className}>${text}</p>`,
        };
    }
    Graphic.createParagraph = createParagraph;
    function createSpan(text, other) {
        const id = 'span_' + generateRandomString(10);
        const className = (other === null || other === void 0 ? void 0 : other.classes) ? `class="${other === null || other === void 0 ? void 0 : other.classes}"` : '';
        return {
            type: 'span',
            id: id,
            html: `<span id="${id}" ${className}>${text}</span>`,
        };
    }
    Graphic.createSpan = createSpan;
    function createDiv(other) {
        const id = 'div_' + generateRandomString(10);
        const className = (other === null || other === void 0 ? void 0 : other.classes) ? `class="${other === null || other === void 0 ? void 0 : other.classes}"` : '';
        return {
            type: 'div',
            id: id,
            html: `<div id="${id}" ${className}></div>`,
        };
    }
    Graphic.createDiv = createDiv;
    function createTable(fields, other) {
        const className = (other === null || other === void 0 ? void 0 : other.classes) ? `class="${other === null || other === void 0 ? void 0 : other.classes}"` : '';
        const tableID = 'table_' + generateRandomString(10);
        let result = `<table ${className}><thead><tr>`;
        for (const field of fields) {
            result += `<th>${field}</th>`;
        }
        result += `</tr></thead><tbody id="${tableID}"></tbody></table>`;
        return {
            type: 'table',
            id: tableID,
            html: result,
        };
    }
    Graphic.createTable = createTable;
    function addRecordTable(parentID, records, other) {
        const className = (other === null || other === void 0 ? void 0 : other.classes) ? `class="${other === null || other === void 0 ? void 0 : other.classes}"` : '';
        const rowID = 'tr_' + generateRandomString(10);
        let result = `<tr id="${rowID}" ${className}>`;
        for (const record of records) {
            result += `<td>${record}</td>`;
        }
        result += '</tr>';
        const riga = window.document.getElementById(parentID);
        if (riga !== null)
            riga.innerHTML += result;
        return {
            type: 'tr',
            id: rowID,
            html: result,
        };
    }
    Graphic.addRecordTable = addRecordTable;
    function removeAllRecordsTable(table) {
        const tableRecord = window.document.getElementById(table.id);
        if (tableRecord !== null)
            tableRecord.innerHTML = '';
    }
    Graphic.removeAllRecordsTable = removeAllRecordsTable;
    function createLink(text, href, target, other) {
        const id = 'a' + generateRandomString(10);
        const className = (other === null || other === void 0 ? void 0 : other.classes) ? `class="${other === null || other === void 0 ? void 0 : other.classes}"` : '';
        const linkHref = href ? `href="${href}"` : '';
        const linkTarget = target ? `target="${target}"` : '';
        return {
            type: 'a',
            id: id,
            html: `<a id="${id}" ${className} ${linkHref} ${linkTarget}>${text}</a>`,
        };
    }
    Graphic.createLink = createLink;
    function createSelect(other) {
        const className = (other === null || other === void 0 ? void 0 : other.classes) ? `class="${other === null || other === void 0 ? void 0 : other.classes}"` : '';
        const selectID = 'select_' + generateRandomString(10);
        const result = `<select id="${selectID}" ${className}></select>`;
        return {
            type: 'select',
            id: selectID,
            html: result,
        };
    }
    Graphic.createSelect = createSelect;
    function addOption(selectID, label, value, selected, other) {
        const className = (other === null || other === void 0 ? void 0 : other.classes) ? `class="${other === null || other === void 0 ? void 0 : other.classes}"` : '';
        const optionID = 'option_' + generateRandomString(10);
        const result = selected
            ? `<option id="${optionID}" ${className} selected value="${value}">${label}</option>`
            : `<option id="${optionID}" ${className} value="${value}">${label}</option>`;
        const select = window.document.getElementById(selectID);
        if (select !== null)
            select.innerHTML += result;
        return {
            type: 'option',
            id: optionID,
            html: result,
        };
    }
    Graphic.addOption = addOption;
    function createInput(type, name, label, other) {
        const id = 'input_' + generateRandomString(10);
        const className = (other === null || other === void 0 ? void 0 : other.classes) ? `class="${other === null || other === void 0 ? void 0 : other.classes}"` : '';
        const typeInput = type ? `type="${type}"` : '';
        const nameInput = name ? `name="${name}"` : '';
        const valueInput = label ? `value="${label}"` : '';
        return {
            type: 'input',
            id: id,
            html: `<input id="${id}" ${className} ${typeInput} ${nameInput} ${valueInput}></input>`,
        };
    }
    Graphic.createInput = createInput;
    function createButton(label, other) {
        const id = 'input_' + generateRandomString(10);
        const className = (other === null || other === void 0 ? void 0 : other.classes) ? `class="${other === null || other === void 0 ? void 0 : other.classes}"` : '';
        const valueButton = label ? `class="${label}"` : '';
        const disabled = (other === null || other === void 0 ? void 0 : other.disabled) ? 'disabled' : '';
        return {
            type: 'input',
            id: id,
            html: `<button id="${id}" ${className} ${disabled}>${valueButton}</button>`,
        };
    }
    Graphic.createButton = createButton;
    function addEvent(parentID, typeEvent, callback) {
        const element = window.document.getElementById(parentID);
        if (element !== null)
            element.addEventListener(typeEvent, callback);
    }
    Graphic.addEvent = addEvent;
})(Graphic || (Graphic = {}));
const generateRandomString = (num) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < num; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};
export default Graphic;
