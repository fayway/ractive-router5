const emails = [
    {
        "id": "1",
        "mailTitle": "Why router5?",
        "mailMessage": "When using Angular, Vue or React, the question of the router to use doesn't arise at all. This is not the case when your app is built on top af a pure UI library like Ractive.js. In the other side, router5 seems so flexible and so powerful to be the first choice as a framework agnostic router"
    },
    {
        "id": "2",
        "mailTitle": "Use with Ractive",
        "mailMessage": "I have just started playing with it. It does make sense to use a flux-like implementation, to provide a layer between the router and view updates."
    },
    {
        "id": "3",
        "mailTitle": "Compose a new message",
        "mailMessage": "Click on compose, start to fill title and message fields and then try to navigate away by clicking on app links, or by using the back button."
    }
];

export function getEmails() {
    return emails;
}

export function getEmail(id) {
    let index;

    if (emails) {
        for (index in emails) {
            if (emails[index].id === id) return emails[index];
        }
    }
    return null;
}
