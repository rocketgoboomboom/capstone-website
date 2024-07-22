document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content1');
    content.style.maxHeight = "0px";
});

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content2');
    content.style.maxHeight = "0px";
});

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content3');
    content.style.maxHeight = "0px";
});

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content4');
    content.style.maxHeight = "0px";
});

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content5');
    content.style.maxHeight = "0px";
});

function expandContent(dropdownContent, dropdownIcon) {
    const content = dropdownContent;
    const icon = dropdownIcon;

    if (content.style.maxHeight === "0px" || content.style.maxHeight === "") {
        content.style.maxHeight = content.scrollHeight + "px";
        //                   top right bottom left
        content.style.padding = "0 1.5rem 1.5rem 1.5rem";
        // content.style.borderBottom = "solid 1px #5B616B";
        content.style.color = "#212121";
        icon.classList.add('expanded');
    } else {
        content.style.maxHeight = "0px";
        content.style.padding = "0 1.5rem 0 1.5rem";
        // content.style.borderBottom = "none";
        content.style.color = "white";
        icon.classList.remove('expanded');
    }
}





