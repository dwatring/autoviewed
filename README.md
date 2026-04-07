# Autoviewed

A Chrome extension that automatically marks files as "viewed" in GitHub pull requests, so you can skip auto-generated files and other files you don't want to review.

## Installation

### From Chrome Web Store

Install from <https://chrome.google.com/webstore/detail/autoviewed/occcjmolphcfebdeichmoflmfgeefjef> and click **Add to Chrome**. Also works on Brave.

### From Source (no build required)

1. Clone the repo:

   ```sh
   git clone https://github.com/dwatring/autoviewed.git
   ```

2. Load in Chrome:
   - Open `chrome://extensions/`
   - Enable **Developer mode** (toggle in the top-right corner)
   - Click **Load unpacked**
   - Select the `dist/` folder inside the cloned repo

### Development

If you want to modify the source and rebuild:

```sh
npm install
npm run build
```

To rebuild automatically on file changes:

```sh
npm run build:watch
```

After each rebuild, go to `chrome://extensions/` and click the reload button on the Autoviewed card to pick up changes.

## Configuration

1. Right-click the extension icon and select **Options**.
   ![](docs/open-options.png)
2. Add the repositories where you want the extension enabled.
   ![](docs/add-repository.png)
3. Add a regex to match files you want auto-marked as viewed.
   ![](docs/add-rule.png)
4. Open a pull request's **Files changed** tab and watch the viewed progress bar move.
   ![](docs/autoviewed-progress.gif)

## Use Cases

- Hide auto-generated files (transpiled output, lock files, etc.)
- Skip Jest snapshots or other test artifacts your teammates create
- Automatically view any files matching a pattern so you can focus on what matters
