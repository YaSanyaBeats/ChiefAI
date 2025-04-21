import { getClient } from './connect'

// Access a specific database
const db = getClient().db('chief');

export default db;