export function parseVariables(code) {
  return code.match(/[^#{{}]+(?=\}})/g);
}

export function getVariableObjects(variables) {
  const variablesArray = variables.map((variable) => {
    const name = variable.split('|').shift();
    const type = variable.split('|').pop();
    return {
      name,
      type
    };
  });

  return variablesArray;
}

export function createTag(variable) {
  const tag = `#{{${variable.name}|${variable.type}}}`;
  return tag;
}

export function setVariable(input, tag, code) {
  return code.replace(tag, input);
}
