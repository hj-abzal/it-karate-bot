export const createLessonsMessage = (homeWorkLink: string, todolistLink: string) => {
    const homework = `homework: ${homeWorkLink}`;
    const todolist = `todolist: ${todolistLink}`;

    let res =
        `${homeWorkLink && homework}

${todolistLink && todolist}`;
    return res;
};