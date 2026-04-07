(function () {
  'use strict';

  chrome.runtime.onInstalled.addListener(function ({ reason }) {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
      chrome.declarativeContent.onPageChanged.addRules([
        {
          conditions: [
            new chrome.declarativeContent.PageStateMatcher({
              pageUrl: {
                hostEquals: 'github.com',
              },
            }),
          ],
          actions: [new chrome.declarativeContent.ShowPageAction()],
        },
      ]);
    });
    // Open the options page when the extension is installed
    if (reason === 'install') {
      chrome.storage.sync.get(['db'], (result) => {
        var _a, _b;
        const isConfigured =
          ((_b =
            (_a = result === null || result === void 0 ? void 0 : result.db) ===
              null || _a === void 0
              ? void 0
              : _a.repos) === null || _b === void 0
            ? void 0
            : _b.length) > 0;
        if (!isConfigured) {
          chrome.runtime.openOptionsPage();
        }
      });
    }
  });
})();
//# sourceMappingURL=background.js.map
