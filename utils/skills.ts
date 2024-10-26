interface GroupedSkills {
  one: string[];
  two: string[];
  three: string[];
}

export const groupSkills = (skills: string[]): GroupedSkills => {
  const result: GroupedSkills = { one: [], two: [], three: [] };
  for (let index = 0; index < skills.length; index++) {
    const skill = skills[index];
    if (index % 3 === 0) {
      result.one.push(skill);
    } else if (index % 3 === 1) {
      result.two.push(skill);
    } else {
      result.three.push(skill);
    }
  }
  return result;
};
