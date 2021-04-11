chrome.action.onClicked.addListener((tab) => {
    const url = tab.url.replace('www.youtube.com', 'waaw.space')
    chrome.tabs.update(tab.id, { url })
})


