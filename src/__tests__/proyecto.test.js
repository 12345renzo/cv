import proyecto from "../data/proyecto";

describe("proyecto data", () => {
  it("should be an array", () => {
    expect(Array.isArray(proyecto)).toBe(true);
  });

  it("should have at least 3 projects", () => {
    expect(proyecto.length).toBeGreaterThanOrEqual(3);
  });

  it("every project should have required fields", () => {
    proyecto.forEach((pro) => {
      expect(pro).toHaveProperty("ruta");
      expect(pro).toHaveProperty("titu");
      expect(pro).toHaveProperty("lore");
      expect(pro).toHaveProperty("lik");
    });
  });

  it("every project should have non-empty strings", () => {
    proyecto.forEach((pro) => {
      expect(typeof pro.ruta).toBe("string");
      expect(pro.ruta.length).toBeGreaterThan(0);
      expect(typeof pro.titu).toBe("string");
      expect(pro.titu.length).toBeGreaterThan(0);
      expect(typeof pro.lore).toBe("string");
      expect(pro.lore.length).toBeGreaterThan(0);
      expect(typeof pro.lik).toBe("string");
      expect(pro.lik.length).toBeGreaterThan(0);
    });
  });

  it("every link should be a valid URL", () => {
    proyecto.forEach((pro) => {
      expect(() => new URL(pro.lik)).not.toThrow();
    });
  });

  it("every image path should start with /img/", () => {
    proyecto.forEach((pro) => {
      expect(pro.ruta).toMatch(/^\/img\//);
    });
  });
});
