const emails = [
    {
        "id": "1",
        "mailTitle": "Why router5?",
        "mailMessage": "Thomas Roch wrote: \"I imagine a lot of developers who will first see router5 will ask themselves the question: is it yet another router? is it any good? Why oh why do people keep writing new routers all the time? It is not always easy to see the potential of something straight away, or understand the motivations behind. I therefore decided to try to tell you more about router5, why I decided to develop an entire new routing solution, and what problems it tries to solve.\""
    },
    {
        "id": "2",
        "mailTitle": "Use with Ractive",
        "mailMessage": "When using Angular, Vue or React, the question of the router to use doesn't arise at all. This is not the case when your app is built on top af a pure UI library like Ractive.js. In the other side, router5 seems so flexible and so powerful to be the first choice as a framework agnostic router."
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
