import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database  POST
export const putDb = async (content) => {
  try {
    console.log('Update the database');

    // connect to db and version
    const contactDb = await openDB('jate', 1);

    // create new transaction with db and priviliges(need to update)
    const tx = contactDb.transaction('jate', 'readwrite');

    // open up the object store.
    const store = tx.objectStore('jate');

    // use .put() on store and update the content, remember to add in which id you want to update.
    const request = store.put({ id: 1, value: content });

    // get request confirmation
    const result = await request;
    console.log('🦝🎉 - Database successfully updated!', result);

  } catch {
    console.error('putDb not implemented')
  }
};

// TODO: Add logic for a method that gets all the content from the database  GET
export const getDb = async () => {
  try {
    console.log('GET from the database');

    // connect to db and version
    const contactDb = await openDB('jate', 1);

    // create new transaction with db and priviliges(just read)
    const tx = contactDb.transaction('jate', 'readonly');

    // open up the object store.
    const store = tx.objectStore('jate');

    // use .getAll() to get all data in database
    const request = store.getAll();

    // get request confirmation
    const result = await request;
    console.log('result,value', result);
    return result;
    
  } catch {
    console.error('getDb not implemented')
  }
};

initdb();
