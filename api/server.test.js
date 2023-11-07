const request = require('supertest')
const db = require('../data/dbConfig')
const server = require('./server')
const bcrypt = require('bcryptjs')

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})

beforeEach(async () => {
  await db('users').truncate()
})

afterAll(async () => {
  await db.destroy()
})

test('sanity', () => {
  expect(true).toBe(true)
})

describe('authentication routers tests', () => {
  describe('[POST] /api/auth/register', () => {
    it('returns a username and password', async () => {
      const res = await request(server).post('/api/auth/register').send({ username: 'test', password: 'test' })
      const hash = bcrypt.hashSync('test', 8)
      expect(res.body).toEqual({ id: 1, username: 'test', password: hash })
    })
    it('response body should have an id, username, and password', async () => {
      const res = await request(server).post('/api/auth/register').send({ username: 'test', password: 'test' })
      const hash = bcrypt.hashSync('test', 8)
      expect(res.body).toEqual({ id: 1, username: 'test', password: hash })
    })
  })
  describe('[POST] /api/auth/login', () => {
    it('must login to an existing account with provided credentials', async () => {

    })
    it('response body should have a message and token', async () => {

    })
  })
})
