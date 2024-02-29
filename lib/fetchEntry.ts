import { client } from './client';

/**
 *
 * @param {string} id - El ID de la entrada que se debe buscar.
 * @returns {Promise<Entry<EntrySkeletonType, undefined, string>>}
 */
export async function fetchEntry(id: string) {
  try {
    return await client.getEntry(id);
  } catch (e) {
    console.error(e);
  }
}
