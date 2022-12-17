export function stringToHTML (element) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(element, 'text/html');
    return doc.body;
}