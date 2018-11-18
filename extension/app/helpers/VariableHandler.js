export function parseVariables(code) {
  return code.match(/[^#{{}]+(?=\}})/g);
}

export function getVariableObjects(variables) {
  const variablesArray = variables.map((variable) => {
    const name = variable.split('|').shift();
    const type = variable.split('|').pop();
    return {
      name,
      type,
      value: ''
    };
  });

  return variablesArray;
}

export function setVariable(input, tag, code) {
  return code.replace(tag, input);
}
