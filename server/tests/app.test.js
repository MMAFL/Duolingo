const request = require('supertest');
const app = require('../index'); // Import your Express app

describe('API Endpoints', () => {
  let userId;
  let streakId;

  // Test Health Check
  it('should return health check status', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'ok');
  });

  // Test Create User
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({
        username: 'testuser',
        email: 'test@example.com',
        password_hash: 'test123'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('user_id');
    userId = res.body.user_id;
  });

  // Test Get User by ID
  it('should get a user by ID', async () => {
    const res = await request(app).get(`/api/users/${userId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('user_id', userId);
  });

  // Test Create Streak
  it('should create a new streak', async () => {
    const res = await request(app)
      .post('/api/streaks')
      .send({
        user_id: userId,
        streak_count: 3
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('streak_id');
    streakId = res.body.streak_id;
  });

  // Test Get All Streaks
  it('should get all streaks', async () => {
    const res = await request(app).get('/api/streaks');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  // Test Delete User
  it('should delete a user', async () => {
    const res = await request(app).delete(`/api/users/${userId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'User deleted');
  });
}); 