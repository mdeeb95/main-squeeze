module.exports = {
    getPlanes: (req, res, next) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.get_planes()
        .then(items => res.status(200).send(items))
        .catch(error => console.log('error', error))
    },
  
    addPlane: (req, res, next) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.add_plane(req.body)
        .then(items => res.status(200).send(items))
        .catch(error => console.log('error', error))
    },

    getVinyl: (req, res, next) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.get_vinyl()
        .then(vinyl => res.status(200).send(vinyl))
        .catch(error => console.log('error', error))
    },
  
    addVinyl: (req, res, next) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.add_vinyl(req.body)
        .then(vinyl => res.status(200).send(vinyl))
        .catch(error => console.log('error', error))
    },
  
    erase: (req, res, next) => {
      console.log(1)
      const dbInstance = req.app.get('db');
  
      dbInstance.erase(req.params.id)
        .then(items => res.status(200).send(items))
        .catch(error => console.log('error', error))
    },
  }
  