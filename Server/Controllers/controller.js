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

    eraseShirts: (req, res, next) => {
      console.log(1)
      const dbInstance = req.app.get('db');
  
      dbInstance.eraseShirts(req.params.id)
        .then(vinyl => res.status(200).send(vinyl))
        .catch(error => console.log('error', error))
    },

    editShirts: (req, res, next) => {
      console.log(1)
      const dbInstance = req.app.get('db');
  
      dbInstance.editShirts(req.body)
        .then(vinyl => res.status(200).send(vinyl))
        .catch(error => console.log('error', error))
    },

    getJewelry: (req, res, next) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.get_jewelry()
        .then(jewelry => res.status(200).send(jewelry))
        .catch(error => console.log('error', error))
    },
  
    addJewelry: (req, res, next) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.add_jewelry(req.body)
        .then(jewelry => res.status(200).send(jewelry))
        .catch(error => console.log('error', error))
    },

    deleteJewelry: (req, res, next) => {
      console.log(1)
      const dbInstance = req.app.get('db');
  
      dbInstance.delete_jewelry(req.params.id)
        .then(jewelry => res.status(200).send(jewelry))
        .catch(error => console.log('error', error))
    },

    editJewelry: (req, res, next) => {
      console.log(1)
      const dbInstance = req.app.get('db');
  
      dbInstance.edit_jewelry(req.body)
        .then(jewelry => res.status(200).send(jewelry))
        .catch(error => console.log('error', error))
    },

    getPatches: (req, res, next) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.get_patches()
        .then(patches => res.status(200).send(patches))
        .catch(error => console.log('error', error))
    },
  
    addPatches: (req, res, next) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.add_patches(req.body)
        .then(patches => res.status(200).send(patches))
        .catch(error => console.log('error', error))
    },

    deletePatches: (req, res, next) => {
      console.log(1)
      const dbInstance = req.app.get('db');
  
      dbInstance.delete_patches(req.params.id)
        .then(patches => res.status(200).send(patches))
        .catch(error => console.log('error', error))
    },

    editPatches: (req, res, next) => {
      console.log(1)
      const dbInstance = req.app.get('db');
  
      dbInstance.edit_patches(req.body)
        .then(patches => res.status(200).send(patches))
        .catch(error => console.log('error', error))
    },

    getFeaturedItem1: (req, res, next) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.get_featureditem1()
        .then(featureditem1 => res.status(200).send(featureditem1))
        .catch(error => console.log('error', error))
    },

    editFeaturedItem1: (req, res, next) => {
      console.log(1)
      const dbInstance = req.app.get('db');
  
      dbInstance.edit_featureditem1(req.body)
        .then(featureditem1 => res.status(200).send(featureditem1))
        .catch(error => console.log('error', error))
    },

    getSocials: (req, res, next) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.get_socials()
        .then(socials => res.status(200).send(socials))
        .catch(error => console.log('error', error))
    },

    
    getPosters: (req, res, next) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.get_posters()
        .then(posters => res.status(200).send(posters))
        .catch(error => console.log('error', error))
    },
  
    addPosters: (req, res, next) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.add_posters(req.body)
        .then(posters => res.status(200).send(posters))
        .catch(error => console.log('error', error))
    },

    deletePosters: (req, res, next) => {
      console.log(1)
      const dbInstance = req.app.get('db');
  
      dbInstance.delete_posters(req.params.id)
        .then(posters => res.status(200).send(posters))
        .catch(error => console.log('error', error))
    },

    editPosters: (req, res, next) => {
      console.log(1)
      const dbInstance = req.app.get('db');
  
      dbInstance.edit_posters(req.body)
        .then(posters => res.status(200).send(posters))
        .catch(error => console.log('error', error))
    },
  }
  