// Write your tests here
test('sanity', () => {
  expect(true).toBe(true)
})

describe('authentication routers tests', () => {
  describe('[POST] /api/auth/register', () => {
    it('returns a username and password', async () => {
  
    })
    it('response body should have an id, username, and password', async () => {

    })
  })
  describe('[POST] /api/auth/login', () => {
    it('must login to an existing account with provided credentials', async () => {

    })
    it('response body should have a message and token', async () => {

    })
  })
})
