export function trimFormValues(form: any) {
  const params: any = {};
  Object.entries(form)
    .forEach((entry: any[]) => {
      let value = entry[1];
      if (value !== null && value !== '') {
        switch (value.constructor.name) {
          case 'String':
            value = value.toString().trim();
            break;
          case 'Number':
            value = value.toString().trim().replace(',', '.');
            break;
          case 'Date':
            value = (<Date>value).toISOString();
            break;
        }
        params[entry[0]] = value;

      }

  });
  return params;
}

