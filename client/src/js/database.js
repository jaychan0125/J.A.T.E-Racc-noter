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
    // connect to db and version
    const jateDb = await openDB('jate', 1);

    // create new transaction with db and priviliges(need to update)
    const tx = jateDb.transaction('jate', 'readwrite');

    // open up the object store.
    const store = tx.objectStore('jate');

    // use .put() on store and update the content, remember to add in which id you want to update.
    const request = store.put({ id: 1, value: content });

    // get request confirmation
    const result = await request;
    console.log('🦝🎉 - Database successfully updated!', result);
    return result;

  } catch {
    console.error('putDb not implemented')
  }
};

// TODO: Add logic for a method that gets all the content from the database  GET
export const getDb = async () => {
  try {
    const jateDb = await openDB('jate', 1);
    const tx = jateDb.transaction('jate', 'readonly');          // create new transaction with db and priviliges(just read)
    const store = tx.objectStore('jate');

    // use .get() to get all data in database
    const request = store.get(1);

    // get request confirmation
    const result = await request;
    console.log('result value', result);
    return result?.value;
    
  } catch {
    console.error('getDb not implemented')
  }
};

initdb();
