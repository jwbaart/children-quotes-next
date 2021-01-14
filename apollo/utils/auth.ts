/**
 * checks if the user is on the context object
 * continues to the next resolver if true
 * @param {Function} next next resolver function ro run
 */
export const authenticated = (next) => (root, args, context, info) => {
  if (!context.user) {
    throw new Error('not authenticated');
  }

  return next(root, args, context, info);
};
