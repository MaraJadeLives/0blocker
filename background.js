// background.js

// Function to handle requests
function blockRequest(details) {
    const url = new URL(details.url);
    if (url.hostname === '0.0.0.0') {
        return { cancel: true };
    }
    return {};
}

// Add listener to block requests to 0.0.0.0
browser.webRequest.onBeforeRequest.addListener(
    blockRequest,
    { urls: ["<all_urls>"] },
    ["blocking"]
);

