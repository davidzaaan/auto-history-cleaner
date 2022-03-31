console.log('Background script running');

function deleteMyHistory() {
    console.log('History removed successfully');
}

const browsingDataToDelete = {
    "appcache": false,
    "cache": false,
    "cacheStorage": false,
    "cookies": false,
    "downloads": true,
    "fileSystems": true,
    "formData": false,
    "history": true,
    "indexedDB": false,
    "localStorage": true,
    "passwords": false,
    "serviceWorkers": false,
    "webSQL": false
}

const options = {
    since: 0
}

chrome.runtime.onStartup.addListener(() => {
    chrome.history.search({ text: '', maxResults: 100 }, function (data) {

        if (data.length > 0) {
            chrome.browsingData.remove(options, browsingDataToDelete, deleteMyHistory);
        } else {
            console.log('You have no history to clean up');
            return;
        }

    });
});