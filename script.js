(function () {
    window.onload = () => {
        const blipClient = new BlipChat();
        blipClient
            .withAppKey('cm91dGVybXVyaWxvOmYxNjY3MTQ0LTkwNzctNDYzZS04M2NlLTI2OGU4MThiZmJmYg==')
            .withButton({ "color": "#909090", "icon": "" })
            .withCustomCommonUrl('https://blip-cda.chat.blip.ai/')
            .build();
            blipClient.toogleChat();
            blipClient.withEventHandler(BlipChat.LOAD_EVENT, () => {
                blipClient.sendMessage({
                    "type":"text/plain",
                    "content":"Olá"
                });
            })
    }
})();

