
const knex = require("knex")({
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "Usha@267",
      database: "knex",
    },
  });
  
   

// for adding new movie into database
var addmovie = (req,res)=>{
    console.log(req.body);
    knex.schema.hasTable("movies").then(function (exists) {
        if (exists) {
        console.log({ Success: `data inserted into users table.` });
        return knex("movies").insert({
            movie_name: req.body.movie_name,
            rating: req.body.rating,
        });
        } else {
        console.log({ Sorry: `movies table not found` });
        }
    });
    res.send(req.body)
}

// This will list of all movies 

var movielist = (req,res)=>{
    knex.from('movies').select("*")
    .then((rows) => {
      res.send(rows)
    }).catch((err) => { console.log( err); throw err })
    .finally(() => {
        knex.destroy();
      });
    
}


// This is for updating data in database

var movieupdate = (req,res)=>{
  console.log(req.params.id);
  knex.schema.hasTable("movies").then(function (exists) {
    if (exists) {
      console.log({ Success: `users data updated successfully.` });
      return knex("movies")
        .update({ movie_name: req.body.movie_name, rating: req.body.rating})
        .where("id", req.params.id);
    } else {
      console.log({ Sorry: `users table not found` });
    }
  });
  res.send("updated")

}

//This is for deleting data from database

const deletedata = (req,res)=>{
  knex.schema.hasTable("movies").then(function (exists) {
    if (exists) {
      console.log({ Success: `data deleted by id:$ successfully.` });
      return knex("movies").where("id", req.params.id).del();
    } else {
      console.log({ Sorry: `users table not found` });
    }
  });
  res.send("movie deleted")
}



module.exports={
    addmovie,
    movielist,
    movieupdate,
    deletedata
}