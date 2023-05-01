 import { sign,verify } from "./func/crypto"
 import Fastify from "fastify"
import {v4} from 'uuid'

const fastify = Fastify({logger:true})

fastify.get('/api:players', (req,res) => {
 const playerId = v4()
 const signature = sign(playerId)
 res.send({
  playerId: playerId,
  signature: signature, 
  pass: verify(playerId, signature)

 })

})

fastify.listen({port:8000}).catch((err)=> {
  fastify.log.error(err)
  process.exit(1)
}).then(()=>{
  fastify.log.info('le server ecoute sur le port 8000')
})





