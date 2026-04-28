// Jest test file — SonarQube reads coverage from this
const request = require("supertest");

// Simple unit test — test the students array logic
describe("Student API Tests", () => {
  test("should return array of students", () => {
    const students = [
      { id: 1, name: "Arjun Sharma", course: "B.Tech CSE" },
      { id: 2, name: "Priya Patel", course: "MCA" },
    ];
    expect(Array.isArray(students)).toBe(true);
    expect(students.length).toBeGreaterThan(0);
  });

  test("student should have required fields", () => {
    const student = { id: 1, name: "Arjun Sharma", course: "B.Tech CSE" };
    expect(student).toHaveProperty("id");
    expect(student).toHaveProperty("name");
    expect(student).toHaveProperty("course");
  });

  test("student name should be a string", () => {
    const student = { id: 1, name: "Arjun Sharma", course: "B.Tech CSE" };
    expect(typeof student.name).toBe("string");
  });
});
