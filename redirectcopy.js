function FSAddOriginalLink(){
    var body_element = document.getElementsByTagName('body')[0];
    var selection;
    selection = window.getSelection();
    var pagelink = "<br/><br/>MUON COPY THI VAO DAY : <a href='https://www.facebook.com/Tr%E1%BA%A3-G%C3%B3p-Vespa-Piaggio-l%C3%A3i-th%E1%BA%A5p-1613249348890934/notifications/'>https://www.facebook.com/Tr%E1%BA%A3-G%C3%B3p-Vespa-Piaggio-l%C3%A3i-th%E1%BA%A5p-1613249348890934/notifications/"+document.location.pathname+"</a>";
    var copytext = pagelink;
    var newdiv = document.createElement('div');
    newdiv.style.position='absolute';
    newdiv.style.left='-99999px';
    body_element.appendChild(newdiv);
    newdiv.innerHTML = copytext;
    selection.selectAllChildren(newdiv);
    window.setTimeout(function() {
        body_element.removeChild(newdiv);
    },0);
}
document.oncopy = FSAddOriginalLink;
