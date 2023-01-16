import excuteQuery from '../../../lib/db'

export default async (req, res) => {
    try {
        console.log("req nom", req.body)
      const result = await excuteQuery({
          query: 'INSERT INTO clients(name,email,phone,ask1,ask2,ask3) VALUES(?)',
          values: [[req.body.content.name, req.body.content.email, req.body.content.phone, req.body.content.ask1, req.body.content.ask2,req.body.content.ask3]]
      });
      console.log( "ttt",result );
  } catch ( error ) {
      console.log( error );
  }
   
  
  };
  