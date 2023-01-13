import mysql from 'serverless-mysql'

const db = mysql({
    config: {
        host: process.env.PLANETSCALE_DB_HOST as string,
        port: process.env.PLANETSCALE_DB_PORT as unknown as number,
        database: process.env.PLANETSCALE_DB as string ,
        user: process.env.PLANETSCALE_DB_USERNAME as string ,
        password: process.env.PLANETSCALE_DB_PASSWORD as string,

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