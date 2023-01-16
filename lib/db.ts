import  fs  from 'fs';
import mysql from 'serverless-mysql'

const db = mysql({
    config: {
        host: process.env.MYSQL_HOST as string,
        port: process.env.MYSQL_PORT as unknown as number,
        database: process.env.MYSQL_DATABASE as string ,
        user: process.env.MYSQL_USER as string ,
        password: process.env.MYSQL_PASSWORD as string,
        ssl: {
            ca: fs.readFileSync(process.env.PLANETSCALE_SSL_CERT_PATH as string)
        },

    }
});

export default async function excuteQuery({query,values}: {query: string  , values: string []}){
    try {
        console.log(db)
        const results = await db.query(query, values);
        await db.end();
        return results;
    } catch (error) {
        return {error}
    }
}