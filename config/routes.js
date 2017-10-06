const express = require('express')

module.exports = (server) => {
  //API routes
  const apiUrl = '/api'
  const router = express.Router()

  const clienteService = require('../api/cliente/clienteService')
  server.use(`${apiUrl}/cliente`, clienteService)
}
