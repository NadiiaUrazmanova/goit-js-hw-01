function getElementWidth(content, padding, border) {
    const num_content = Number.parseFloat(content);
    const num_padding = Number.parseFloat(padding);
    const num_border = Number.parseFloat(border);
    return num_content + 2 * num_padding + 2 * num_border;
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));