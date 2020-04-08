import { Client } from 'ts-postgres';
 
async function main() {
    const client = new Client({'database':'baltimore911'});
    await client.connect();
 
    try {
        // Querying the client returns a query result promise
        // which is also an asynchronous result iterator.
        const resultIterator = client.query(
            `SELECT username, email FROM admins`
        );
 
        for await (const row of resultIterator) {
            console.log(`Username:`, row.get('username'));
            console.log(`Email:`, row.get('email'));
        }
    } finally {
        await client.end();
    }
}

main()