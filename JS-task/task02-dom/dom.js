function changeOuterLinks() {
    const navElements = document.querySelectorAll('nav#link-list a');
    navElements.forEach( e => {
        if (e.innerHTML.includes('outer-link')) {
            e.target ='_blank';
            e.innerHTML = `<strong>${e.innerHTML}</strong>`;
        }
    })
    
    document.querySelectorAll("nav").forEach( e => {
        e.style.display = "flex";
        e.style.flexDirection = "column";
        e.style.width = "30%";
        e.style.margin = "0px auto";
        e.style.border = "1px solid blue";
        e.style.padding = "16px";
    });
}
changeOuterLinks()

export { changeOuterLinks };