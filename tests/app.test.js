const request = require("supertest");
const app = require("../src/app");

const TEST_API_KEY =
  process.env.TEST_API_KEY || "mi_clave_de_prueba_segura_para_test";
require("dotenv").config();

describe("GET /", () => {
  it("responde con mensaje de bienvenida", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("API Insegura funcionando");
  });
});

describe("GET /secure-data", () => {
  let originalApiKey;
  beforeAll(() => {
    originalApiKey = process.env.GITHUB_API_KEY;
    process.env.GITHUB_API_KEY = TEST_API_KEY;
  });
  afterAll(() => {
    process.env.GITHUB_API_KEY = originalApiKey;
  });

  it("debe rechazar sin API key", async () => {
    const res = await request(app).get("/secure-data");
    expect(res.statusCode).toBe(403);
  });

  it("debe permitir con API key válida", async () => {
    const res = await request(app)
      .get("/secure-data")
      .set("x-api-key", TEST_API_KEY);
    expect(res.statusCode).toBe(200);
    expect(res.body.secret).toBe("12345");
  });
});
