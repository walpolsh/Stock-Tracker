const snakeCase = require('lodash.snakecase');

export const snakeCaseFieldResolver = (source, args, contextValue, info) => {
  return source[snakeCase(info.fieldName)];
};
