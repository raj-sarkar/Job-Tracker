export const normalizeDate = (date: string | Date) => {
    return `${new Date(date).toLocaleString("default", {
        day: "2-digit",
        month: "short",
    })}`;
};
