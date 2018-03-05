import server from './server';

server.set('port', (process.env.PORT || 3000));

server.listen(server.get('port'), (err) => {
   if (err) {
       return console.error('An error occurred', err);
   }

   console.log(`Server is listening on ${server.get('port')}`);
});
