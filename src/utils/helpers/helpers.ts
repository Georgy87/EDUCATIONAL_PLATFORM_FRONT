export const timeFunction = (moduleHours: number, moduleMinutes: number, moduleSeconds: number) => {
    let newHours;

    let hours = Math.trunc(moduleMinutes / 60);
    if (moduleHours + hours === 0) {
        newHours = "";
    } else {
        newHours = moduleHours + hours + " ч ";
    }

    let minutes = moduleMinutes % 60;
    let seconds = moduleSeconds / 60;
    let finalMinutes = minutes + Math.floor(seconds);

    return {
        newHours,
        finalMinutes
    }
}