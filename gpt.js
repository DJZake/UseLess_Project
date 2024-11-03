function registerStuff() {
    document.getElementById('chatarea')?.addEventListener('keydown', chatEnter);
    document.querySelector('.sendbtn button')?.addEventListener('click', triggerHumanChatEvent);
    document.getElementById('delbtn')?.addEventListener('click', delButtonClick);
    document.getElementById('lightmodebtn')?.addEventListener('click', toggleLightMode);
    document.getElementById('infobtn')?.addEventListener('click', showAboutDialog);
}
function chatEnter(ev) {
    if (ev.key == "Enter" && !(ev.ctrlKey || ev.shiftKey)) {
        ev.preventDefault();
        triggerHumanChatEvent();
    }
}
function triggerHumanChatEvent() {
    const ca = document.getElementById('chatarea');
    if (!ca) {
        return;
    }
    sendChatWithTemplateName(ca.value, 'humanchatentry');
    ca.value = '';
    window.setTimeout(generateCatChat, 200);
}
function generateCatChat() {
    const max = possibleResponses.length;
    const chosen = Math.floor(Math.random() * max);
    sendChatWithTemplateName(possibleResponses[chosen], 'catchatentry');
}
function sendChatWithTemplateName(msg, templateName) {
    if (msg.length == 0) {
        return;
    }
    const hce = document.getElementById(templateName);
    if (!hce) {
        return;
    }
    const df = hce.content;
    if (!df) {
        return;
    }
    const root = df.firstElementChild.cloneNode(true);
    const chatContent = root.querySelector(".chat");
    const lines = msg.split('\n');
    for (let l of lines) {
        if (l.startsWith('/')) {
            const p = document.createElement('p');
            const em = document.createElement('em');
            em.textContent = l;
            p.appendChild(em);
            chatContent.appendChild(p);
        }
        else {
            const p = document.createElement('p');
            p.textContent = l;
            chatContent.appendChild(p);
        }
    }
    const main = document.querySelector('main');
    const lastChild = document.querySelector('.chatbox');
    main.insertBefore(root, lastChild);
    root.scrollIntoView();
}
function delButtonClick() {
    const elems = document.querySelectorAll('section.history');
    for (let e of elems) {
        e.remove();
    }
}
function toggleLightMode() {
    const body = document.querySelector('body');
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        document.getElementById('lightmodeicon').textContent = 'light_mode';
        document.getElementById('lightmodelabel').textContent = 'Light Mode';
    }
    else {
        body.classList.add('light');
        document.getElementById('lightmodeicon').textContent = 'dark_mode';
        document.getElementById('lightmodelabel').textContent = 'Dark Mode';
    }
}
function showAboutDialog() {
    const d = document.getElementById('aboutDialog');
    d.showModal();
}
const possibleResponses = [
     "bork.",
     "wow",
     "bork bork bork",
     "woof",
     "bork, bork wowwwww, arf wowowowow.",
     "heckin heck heck heck heck heck heck heck heck heck heck\nheck heck heck heck heck heck heck heck\nheck heck heck heck\nheck heck",
     "grrrrrrr",
     "zoom!!",
     "sniff sniff",
     "mmm... wow... mmm...",
     "wow.",
     "...",
     "boof? wowww... mmm..",
     "grrrrowl",
     "yip yap!",
     "boof boof",
     "boof? boof wow me wooof wooow boof boof.\nboof, boof arf boof boof.",
     "Me boof wow wooof wooof boof boof bork bork boof wow bork wooof, boof wow woooow me wooww wooof wooof grrr boof. woooof; boof, boof, grr boof. wooow boof, me boof wooof .\nwooof boof wow grrr. wowzers, boof woo me boof.\nboof boof boof wooow.",
     "boof? boof. boof boof, boof boof boof.",
     "snarrrrl",
    "/stares with much judgment",
     "/boops your leg with nose",
     "/perches on top of couch, looks majestic",
     "/scratches at the door, then zooms away",
     "/follows the small dust mote floating in the air",
     "/barks at the door. When let out, barks at the door to be let back in.",
     "yip yap yap yap.",
     "huff... sniffle.",
     "/considers the food bowl, which is clearly empty",
     "boof? boof boof?\n/stands expectantly by the food bowl.\nyap yap!",
     "yooooooof.",
     "/jumps onto your lap and starts licking your face",
     "boof boof wow wooooof boof boof.\n/sounds very intense.\nboof boof boof.\n/actually just bored.",
    "/brings a leaf and drops it at your feet",
     "/faces exactly away from you, tail wagging",
     "woof, wooof, wooof..."
];
//# sourceMappingURL=app.js.map