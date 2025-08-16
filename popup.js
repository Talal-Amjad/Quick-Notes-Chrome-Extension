document.addEventListener('DOMContentLoaded', () => {
  const noteInput = document.getElementById('noteInput');
  const saveNoteBtn = document.getElementById('saveNote');
  const noteList = document.getElementById('noteList');

  loadNotes();

  saveNoteBtn.addEventListener('click', () => {
    const noteText = noteInput.value.trim();
    if (noteText) {
      saveNote(noteText);
      noteInput.value = '';
      loadNotes();
    }
  });


  noteInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); 
      const noteText = noteInput.value.trim();
      if (noteText) {
        saveNote(noteText);
        noteInput.value = '';
        loadNotes();
      }
    }
  });

  // save a note
  function saveNote(text) {
    chrome.storage.local.get(['notes'], (result) => {
      const notes = result.notes || [];
      notes.push({ text });
      chrome.storage.local.set({ notes }, () => {
        console.log('Note saved');
        loadNotes(); 
      });
    });
  }

  function loadNotes() {
    chrome.storage.local.get(['notes'], (result) => {
      const notes = result.notes || [];
      noteList.innerHTML = ''; 
      notes.forEach((note, index) => {
        const li = document.createElement('li');
        li.className = 'note-item';
        li.innerHTML = `
          <span class="note-text">${note.text}</span>
          <button class="action-btn edit-btn" data-index="${index}">Edit</button>
          <button class="action-btn delete-btn" data-index="${index}">Delete</button>
          <button class="action-btn copy-btn" data-index="${index}">Copy</button>
        `;
        noteList.appendChild(li);
      });

      document.querySelectorAll('.copy-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          const index = btn.getAttribute('data-index');
          copyNote(index);
        });
      });

      document.querySelectorAll('.edit-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          const index = btn.getAttribute('data-index');
          editNote(index);
        });
      });

      document.querySelectorAll('.delete-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          const index = btn.getAttribute('data-index');
          deleteNote(index);
        });
      });
    });
  }

  // copy a note to clipboard
  function copyNote(index) {
    chrome.storage.local.get(['notes'], (result) => {
      const notes = result.notes || [];
      const noteText = notes[index].text;
      navigator.clipboard.writeText(noteText);
    });
  }

  // edit a note
  function editNote(index) {
    chrome.storage.local.get(['notes'], (result) => {
      const notes = result.notes || [];
      const newText = prompt('Edit your note:', notes[index].text);
      if (newText !== null && newText.trim() !== '') {
        notes[index].text = newText.trim();
        chrome.storage.local.set({ notes }, () => {
          console.log('Note edited');
          loadNotes(); 
        });
      }
    });
  }

  // delete a note
  function deleteNote(index) {
    chrome.storage.local.get(['notes'], (result) => {
      const notes = result.notes || [];
      notes.splice(index, 1); 
      chrome.storage.local.set({ notes }, () => {
        console.log('Note deleted');
        loadNotes(); 
      });
    });
  }
});