export const toClassNames = (arr) => arr.filter(Boolean).join(' ');

export const classNames = (arr) => ({ className: toClassNames(arr) });
