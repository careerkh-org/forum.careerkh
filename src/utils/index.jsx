export const pageTypes = [
  'forum',
  'updates',
  'jobs',
  'login',
  'register',
  'user',
];

export const capitalize = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const filterItems = (items, search, tag) => {
  return items
    .filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
    .filter(thread => thread.tags.includes(tag) || tag === 'All');
};

export const checkIfNew = date => {
  const newMark = Math.round(new Date() / 1000) - 3600;
  return date.seconds >= newMark;
};

export const autoExpand = elm => {
  const textarea = elm.target;
  textarea.style.height = 'auto';
  textarea.style.height = `${textarea.scrollHeight}px`;
};

export const tags = [
  {
    name: 'All',
    isActive: true,
  },
  {
    name: 'IT',
    isActive: false,
  },
  {
    name: 'Engineering',
    isActive: false,
  },
  {
    name: 'Developer',
    isActive: false,
  },
];
