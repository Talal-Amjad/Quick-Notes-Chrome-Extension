# Quick Notes

**Quick Notes** is a lightweight Chrome extension that allows users to save and manage short notes while browsing the web. With a clean and intuitive popup interface, you can quickly jot down ideas, edit, copy, or delete them with ease.

Ideal for **students, professionals, or anyone needing a simple note-taking tool** during web browsing.

## ✨ Features

- Instant Note Saving: Save notes by typing in the popup and pressing Enter or clicking "Save Note".
- Manage Notes: Each note includes "Edit", "Delete", and "Copy" buttons below the note text for quick management.
- Real-Time Updates: Notes appear or update in the list immediately after saving, editing, or deleting.
- User-Friendly Design: A clean interface with a 350px-wide popup for comfortable note-taking.

## Installation

**Clone or Download the Repository**:

```bash
git clone https://github.com/Talal-Amjad/Quick-Notes-Chrome-Extension.git
```

Alternatively, download the ZIP file and extract it.

**Open Chrome Extensions**:

- Navigate to `chrome://extensions/` in Google Chrome.
- Enable **Developer mode** using the toggle in the top-right corner.

**Load the Extension**:

- Click **Load unpacked** and select the `quick-notes` folder containing the extension files.
- The Quick Notes extension will appear in your extensions list.

**Pin to Toolbar**:

- Click the puzzle icon in Chrome’s toolbar.
- Find Quick Notes and click the pin icon to add it to your toolbar.

## Usage

**Open the Popup**:

- Click the Quick Notes icon in your Chrome toolbar while on any webpage.

**Save a Note**:

- Type your note in the textarea.
- Press **Enter** (without Shift) or click **Save Note** to save.
- The note appears instantly in the "Saved Notes" list with a number (e.g., "My note").

**Manage Notes**:

- **Edit**: Click "Edit" below a note, enter new text in the prompt, and save to update.
- **Delete**: Click "Delete" to remove a note instantly.
- **Copy**: Click "Copy" to copy the note’s text to your clipboard for pasting elsewhere.

**View Notes**:



## Project Structure

```plaintext
quick-notes/
├── icon48.png          # 48x48 icon for the extension
├── icon128.png        # 128x128 icon for the extension
├── manifest.json      # Extension configuration
├── popup.html         # Popup UI structure
├── popup.css          # Styles for the popup
├── popup.js           # Logic for saving, editing, copying, and deleting notes
├── README.md          # Project documentation
```

## Technologies Used

- **HTML/CSS/JavaScript**: For the popup interface and core functionality.
- **Chrome Extensions API**: Uses `chrome.storage.local` for persistent note storage and `chrome.tabs` for tab interaction.
- **Clipboard API**: Enables copying note text to the clipboard.
