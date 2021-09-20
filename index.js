const serv = require("./serv");
const port = process.env.port || 5000 ;


serv.listen(5000, () => console.log(`server has been started on ${port}`))
