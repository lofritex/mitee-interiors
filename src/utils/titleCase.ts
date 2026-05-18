const toTitleCase = (str: string) =>
    str
        .split(" ")
        .map((w) => w.at(0)?.toUpperCase() + w.slice(1).toLowerCase())
        .join(" ");
export { toTitleCase };
