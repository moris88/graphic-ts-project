export var Classes;
(function (Classes) {
    function set(classes) {
        let array = [];
        array = [...classes];
        return print(array);
    }
    Classes.set = set;
    function get(classes) {
        let array = classes.split(' ');
        return array;
    }
    Classes.get = get;
    function remove(classes, nameClass) {
        classes = classes.filter((elem) => elem !== nameClass);
        return print(classes);
    }
    Classes.remove = remove;
    function removeAll(classes) {
        classes = [];
        return print(classes);
    }
    Classes.removeAll = removeAll;
    function print(array) {
        let result = '';
        if (array.length === 0)
            result += ``;
        else if (array.length === 1)
            result += `${array[0].trim()}`;
        else {
            for (const elem of array)
                result += `${elem.trim()} `;
        }
        return result.trim();
    }
    Classes.print = print;
})(Classes || (Classes = {}));
