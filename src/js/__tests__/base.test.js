import { getHpStatus } from "../clean-functions";
import { sortByHealth } from "../sort";

test("hp status", () => {
    expect(getHpStatus({ name: "asd", health: 100 })).toBe("healthy");
    expect(getHpStatus({ name: "asd", health: 30 })).toBe("wounded");
    expect(getHpStatus({ name: "asd", health: 15 })).toBe("critical");
});

test("sort by health", () => {
    const heroes = [
        {name: "мечник", health: 10},
        {name: "маг", health: 100},
        {name: "лучник", health: 80},
    ];
    const expected = [
        { name: "маг", health: 100 },
        { name: "лучник", health: 80 },
        { name: "мечник", health: 10 },
    ];
    expect(sortByHealth(heroes)).toEqual(expected);
})
